package com.kony.appiumTests.tests;

import java.net.URL;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.ios.IOSDriver;

import io.appium.java_client.remote.AndroidMobileCapabilityType;
import io.appium.java_client.remote.IOSMobileCapabilityType;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;

public abstract class BaseTest {
	public static String platformName;
	public static AndroidDriver<WebElement> androiddriver;
	public static IOSDriver<WebElement> iosdriver;
	public static RemoteWebDriver driver;

	@BeforeSuite
	public void beforeSuite() throws Exception {

		System.out.println("initializing is starting..........");

	    DesiredCapabilities capabilities = new DesiredCapabilities();
	    capabilities.setCapability("noReset", true);
	    capabilities.setCapability("autoGrantPermissions", true);
	    capabilities.setCapability("newCommandTimeout", "300");
	
	    String appiumVersion = System.getenv("APPIUM_VERSION");
	    if (appiumVersion == null) {
	        appiumVersion = System.getProperty("appium.version");
	    }
	    boolean usePrefix = false;
	    if (appiumVersion != null) {
	        String majorVersion = appiumVersion.split("\\.")[0];
	        usePrefix = Integer.parseInt(majorVersion) >= 2;
	    }
	
	    String prefix = usePrefix ? "appium:" : "";
	
	    System.out.println("DEVICEFARM_DEVICE_PLATFORM_NAME: " + System.getenv("DEVICEFARM_DEVICE_PLATFORM_NAME"));
	    if ("iOS".equalsIgnoreCase(System.getenv("DEVICEFARM_DEVICE_PLATFORM_NAME"))) {
	        capabilities.setCapability(prefix + "automationName", "XCUITest");
	        capabilities.setCapability(prefix + "autoAcceptAlerts", true);
	        capabilities.setCapability(prefix + "noReset", true);
	        capabilities.setCapability(IOSMobileCapabilityType.AUTO_ACCEPT_ALERTS, true);
	        capabilities.setCapability(prefix + IOSMobileCapabilityType.WDA_LAUNCH_TIMEOUT.getName(), 120000);
	        capabilities.setCapability(prefix + IOSMobileCapabilityType.WDA_STARTUP_RETRIES.getName(), 4);
	        System.out.println("Initializing the iOS Driver!!!!!!!!!!!!");
	        iosdriver = new IOSDriver<WebElement>(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
	        driver = iosdriver;
	    } else {
	        System.out.println("Initializing the Android Driver!!!!!!!!!!!!");
	        capabilities.setCapability(prefix + "automationName", "UiAutomator2");
	        capabilities.setCapability(prefix + AndroidMobileCapabilityType.AUTO_GRANT_PERMISSIONS.getName(), true);
	        androiddriver = new AndroidDriver<WebElement>(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
	        driver = androiddriver;
	    }
	    System.out.println("Driver is successfully initialized!!!!!!!!!!!!!!!!!!!!!");

		if (driver == null) {
			if (iosdriver == null) {
				iosdriver = new IOSDriver<WebElement>(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
			}

			System.out.println("Getting platform name from capabilities.........."
					+ iosdriver.getCapabilities().getPlatform().toString());
			/**
			 * getPlatform() is used to know the platform on which the app is running
			 */
			platformName = iosdriver.getCapabilities().getPlatform().toString();

			if ("MAC".equalsIgnoreCase(platformName)) {
				System.out.println("Inside platform MAC............");
				driver = iosdriver;
			} else {
				if (driver != null) {
					driver.quit();
					driver = null;
				}
				if (androiddriver != null) {
					androiddriver.quit();
					androiddriver = null;
				}
				if (iosdriver != null) {
					iosdriver.quit();
					iosdriver = null;
				}

				System.out.println("Inside platform ANDROID............");
				androiddriver = new AndroidDriver<WebElement>(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
				driver = androiddriver;
			}
		}
	}

	@AfterSuite
	public void tearDownAppium() {
		if (driver != null)
			driver.quit();
		if (androiddriver != null)
			androiddriver.quit();
		if (iosdriver != null)
			iosdriver.quit();
	}

	public static RemoteWebDriver getDriver() {
		return driver;
	}
}
