package com.appfactory.webtests;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.jspecify.annotations.NonNull;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.*;
import static org.testng.Assert.*;
import java.time.Duration;

public class KitchenSinkDeepTest {
    private WebDriver driver;
    private WebDriverWait wait;

//    @BeforeClass
//    public void setUp() {
//        WebDriverManager.chromedriver().setup();
//        driver = new ChromeDriver();
//        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
//        driver.manage().window().maximize();
//        driver.get("http://127.0.0.1:9989/KitchenSink6ScreenApp/kdw#_frmHome");
//    }

    @BeforeClass(alwaysRun = true)
    public void setUp() {
        // 1. Get properties passed from AppFactory (-DDRIVER_PATH, -DBROWSER_PATH, -DWEB_APP_URL)
        String driverPath = System.getProperty("DRIVER_PATH");
        String browserPath = System.getProperty("BROWSER_PATH");
        String appUrl = System.getProperty("WEB_APP_URL");

        // 2. Configure Chrome Options for Headless Mode
        ChromeOptions chromeOptions = getChromeOptions(browserPath);

        // 3. Set the Driver Path
        if (driverPath != null && !driverPath.isEmpty()) {
            System.setProperty("webdriver.chrome.driver", driverPath);
        } else {
            // Fallback for local testing if not running in AppFactory
            io.github.bonigarcia.wdm.WebDriverManager.chromedriver().setup();
        }

        driver = new ChromeDriver(chromeOptions);
        wait = new WebDriverWait(driver, Duration.ofSeconds(15));

        // 4. Navigate to the App URL provided by AppFactory
        if (appUrl != null && !appUrl.isEmpty()) {
            driver.get(appUrl);
        } else {
            driver.get("http://127.0.0.1:9989/KitchenSink6ScreenApp/kdw#_frmHome");
        }
    }

    private static @NonNull ChromeOptions getChromeOptions(String browserPath) {
        ChromeOptions chromeOptions = new ChromeOptions();

        // Set the Browser Binary Path (required if AppFactory uses a non-standard Chrome location)
        if (browserPath != null && !browserPath.isEmpty()) {
            chromeOptions.setBinary(browserPath);
        }

        // AppFactory/CI/CD Required Flags
        chromeOptions.addArguments("--headless=new"); // Modern headless mode
        chromeOptions.addArguments("--no-sandbox");
        chromeOptions.addArguments("--disable-dev-shm-usage");
        chromeOptions.addArguments("--window-size=1920,1080");
        return chromeOptions;
    }

    // --- HELPER METHODS (To keep tests clean) ---

    private void clickByText(String text) {
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='" + text + "']"))).click();
    }

    private void verifyHeader(String expectedTitle) {
        WebElement header = wait.until(ExpectedConditions.visibilityOfElementLocated(
                By.xpath("//label[contains(@class, 'headerTitle') and text()='" + expectedTitle + "']")));
        assertEquals(header.getText(), expectedTitle);
    }

    private void goBack() {
        driver.navigate().back();
        // Wait for a home element to ensure we are back
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//label[text()='UI Library']")));
    }

    private void goBackTo(String expectedTextOnPage) {
        driver.navigate().back();
        // Wait until the specific page we want actually loads
        wait.until(ExpectedConditions.visibilityOfElementLocated(
                By.xpath("//*[text()='" + expectedTextOnPage + "']")));
    }

    // --- TEST CASES ---

    @Test(priority = 1)
    public void testFormAnimationsNavigation() {
        clickByText("Form Animations");
        verifyHeader("Transitions");
        // Scenario 1: Verify Transition list exists
        assertTrue(driver.findElement(By.xpath("//label[text()='Flip']")).isDisplayed());
        goBackTo("UI Library");
    }

    @Test(priority = 2)
    public void testDeviceFeaturesNavigation() {
        clickByText("Device Features");
        verifyHeader("Device Features"); // Scenario 2: Main Device Features page
        goBackTo("UI Library");
    }

    @Test(priority = 3)
    public void testAccelerometerMenu() {
        clickByText("Device Features");
        clickByText("Accelerometer");
        verifyHeader("Accelerometer"); // Scenario 3: Accelerometer Options page

        // Scenario 4: Verify specific buttons exist
        assertTrue(driver.findElement(By.xpath("//button[text()='Register shake event']")).isDisplayed());
        goBackTo("Device Features"); // Back to Device Features
        goBackTo("UI Library"); // Back to Home
    }

    @Test(priority = 4)
    public void testRegisterShakeEvent() {
        clickByText("Device Features");
        clickByText("Accelerometer");
        clickByText("Register shake event");

        // Verify success message
        WebElement msg = wait.until(ExpectedConditions.visibilityOfElementLocated(
                By.xpath("//*[contains(text(), 'Registration is successful')]")));
        assertTrue(msg.getText().contains("Please shake the device"));

        // FIXING THE DEPTH:
        driver.navigate().back(); // Now we are at 'Accelerometer' options
        wait.until(ExpectedConditions.textToBePresentInElementLocated(By.tagName("body"), "Current accelerometer data"));

        driver.navigate().back(); // Now we are at 'Device Features'
        wait.until(ExpectedConditions.textToBePresentInElementLocated(By.tagName("body"), "Accelerometer"));

        driver.navigate().back(); // Now we are at 'UI Library' (Home)
        wait.until(ExpectedConditions.textToBePresentInElementLocated(By.tagName("body"), "UI Interface"));
    }

    @Test(priority = 5)
    public void testAnimationFlipScreen() {
        clickByText("Form Animations");
        clickByText("Flip");
        // Scenario 7: Verify navigation to a specific animation sub-page
        // (Assuming it navigates or triggers a change)
        assertTrue(driver.getCurrentUrl().contains("frmAni"));
        goBackTo("UI Library");
    }

    @Test(priority = 6)
    public void testDeviceApplicationSettings() {
        clickByText("Device Features");
        // Scenario 8: Test 'Application Settings' button specifically
        clickByText("Application Settings");
        verifyHeader("App Settings");
        goBackTo("Device Features");
        goBackTo("UI Library");
    }

    @Test(priority = 7)
    public void testPageRefreshStability() {
        // Scenario 9: Refresh the page and ensure the app recovers
        driver.navigate().refresh();
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//label[text()='UI Library']")));
        clickByText("Device Features");
        verifyHeader("Device Features");
        goBack();
    }

    @Test(priority = 8)
    public void testInvalidNavigation() {
        // Scenario 10: Verify the "Provide App Feedback" is clickable
        clickByText("Provide App Feedback");
        // Verify it doesn't crash the app
        assertNotNull(driver.getTitle());
        goBack();
    }

    @AfterClass
    public void tearDown() {
        if (driver != null) driver.quit();
    }
}