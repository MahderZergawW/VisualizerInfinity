package com.appfactory.webtests;

import io.github.bonigarcia.wdm.WebDriverManager;
import java.time.Duration;

import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.*;
import static org.testng.Assert.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.NoAlertPresentException;

public class UntitledTestCase {
  private WebDriver driver;
  private boolean acceptNextAlert = true;
  private StringBuffer verificationErrors = new StringBuffer();
  private WebDriverWait wait;

  @BeforeClass(alwaysRun = true)
  public void setUp() {
    WebDriverManager.chromedriver().setup();
    driver = new ChromeDriver();
    // Explicit wait handler (used for the 2sec wait and element checks)
    wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    driver.manage().window().maximize();
  }

  @Test
  public void testNavigationToUIInterface() {
    // 1. Navigate to Home
    driver.get("http://127.0.0.1:9989/KitchenSink6ScreenApp/kdw#_frmHome");

    // 2. Click "UI Interface" using the text (more stable than the ID)
    WebElement uiInterfaceMenu = wait.until(ExpectedConditions.elementToBeClickable(
            By.xpath("//label[text()='UI Interface']")
    ));
    uiInterfaceMenu.click();

    // 3. Wait for the new page and verify the Heading
    // This is the "2 second wait" logic implemented safely
    WebElement headerLabel = wait.until(ExpectedConditions.visibilityOfElementLocated(
            By.xpath("//label[text()='User Interface']")
    ));

    // Assertion: Check if the text is exactly what we expect
    assertEquals(headerLabel.getText(), "User Interface", "Header title mismatch on UI Category page!");

    // 4. Verification using the 'kwp' attribute you found in the inspect tool
    boolean isHeaderPresent = driver.findElement(
            By.xpath("//label[@kwp='frmUICategory_headerTitleLabel']")
    ).isDisplayed();
    assertTrue(isHeaderPresent, "The header label with kwp attribute was not found!");

    // 5. Navigate back to the main page
    driver.navigate().back();

    // 6. Verify we are back home by checking for "UI Library" title
    wait.until(ExpectedConditions.textToBePresentInElementLocated(
            By.xpath("//div[contains(@class, 'header')] | //label"), "UI Library"
    ));
  }



//  @Test
//  public void testUntitledTestCase() throws Exception {
//    driver.get("http://127.0.0.1:9989/KitchenSink6ScreenApp/kdw#_frmHome");
//    driver.findElement(By.id("K1773155107179")).click();
//
//    driver.get("http://127.0.0.1:9989/KitchenSink6ScreenApp/kdw#_frmUICategory");
//    driver.findElement(By.id("K1773154621678")).click();
//    driver.get("http://127.0.0.1:9989/KitchenSink6ScreenApp/kdw#_frmContainerWidgets");
//    driver.findElement(By.id("K1773154621696")).click();
//    driver.findElement(By.id("K1773154621714")).click();
//    driver.get("http://127.0.0.1:9989/KitchenSink6ScreenApp/kdw#_frmTabs");
//    driver.findElement(By.id("K1773154621724")).click();
//    driver.get("http://127.0.0.1:9989/KitchenSink6ScreenApp/kdw#_frmTabCollpasible");
//    driver.findElement(By.id("K1773154621735")).click();
//    driver.findElement(By.xpath("//div[@id='K1773154621736']/div/ul/li[2]/div/label")).click();
//    driver.findElement(By.xpath("//div[@id='K1773154621736']/div/ul/li[3]/div/label")).click();
//    driver.get("http://127.0.0.1:9989/KitchenSink6ScreenApp/kdw#_frmTabs");
//    driver.findElement(By.id("K1773154621725")).click();
//    driver.get("http://127.0.0.1:9989/KitchenSink6ScreenApp/kdw#_frmTabPageView");
//    driver.findElement(By.xpath("//div[@id='K1773154621751']/div/ul/li[2]/div/label")).click();
//    driver.findElement(By.xpath("//div[@id='K1773154621751']/div/ul/li[3]/div/label")).click();
//    driver.get("http://127.0.0.1:9989/KitchenSink6ScreenApp/kdw#_frmTabs");
//    driver.findElement(By.id("K1773154621727")).click();
//    driver.get("http://127.0.0.1:9989/KitchenSink6ScreenApp/kdw#_frmUICategory");
//    driver.findElement(By.id("K1773154621784")).click();
//    driver.get("http://127.0.0.1:9989/KitchenSink6ScreenApp/kdw#_frmBasicWidgets");
//    driver.findElement(By.id("K1773154621827")).click();
//    driver.get("http://127.0.0.1:9989/KitchenSink6ScreenApp/kdw#_frmBtn");
//    driver.findElement(By.id("K1773154621858")).click();
//    driver.findElement(By.id("K1773154621859")).click();
//    driver.findElement(By.id("K1773154621860")).click();
//    driver.findElement(By.id("K1773154621861")).click();
//    driver.get("http://127.0.0.1:9989/KitchenSink6ScreenApp/kdw#_frmUICategory");
//    driver.findElement(By.id("K1773154621904")).click();
//  }

  @AfterClass(alwaysRun = true)
  public void tearDown() throws Exception {
    driver.quit();
    String verificationErrorString = verificationErrors.toString();
    if (!"".equals(verificationErrorString)) {
      fail(verificationErrorString);
    }
  }

  private boolean isElementPresent(By by) {
    try {
      driver.findElement(by);
      return true;
    } catch (NoSuchElementException e) {
      return false;
    }
  }

  private boolean isAlertPresent() {
    try {
      driver.switchTo().alert();
      return true;
    } catch (NoAlertPresentException e) {
      return false;
    }
  }

  private String closeAlertAndGetItsText() {
    try {
      Alert alert = driver.switchTo().alert();
      String alertText = alert.getText();
      if (acceptNextAlert) {
        alert.accept();
      } else {
        alert.dismiss();
      }
      return alertText;
    } finally {
      acceptNextAlert = true;
    }
  }
}
