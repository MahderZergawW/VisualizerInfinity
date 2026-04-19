package com.kony.appiumTests.forms;

import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;

import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.iOSXCUITFindBy;

public class FrmDeviceFeatures extends BaseConfig {
	
	public RemoteWebDriver driver;

	@iOSXCUITFindBy(id = "Accelerometer")
	@AndroidFindBy(xpath = "//android.widget.Button[contains(@text,'Accelerometer')]")
	public WebElement btn_Accelerometer;
	
	@iOSXCUITFindBy(id = "Camera")
	@AndroidFindBy(xpath = "//android.widget.Button[contains(@text,'Camera')]")
	public WebElement btn_Camera;
	
	@iOSXCUITFindBy(id = "Email")
	@AndroidFindBy(xpath = "//android.widget.Button[contains(@text,'Email')]")
	public WebElement btn_Email;
	
	@iOSXCUITFindBy(id = "Address Book")
	@AndroidFindBy(xpath = "//android.widget.Button[contains(@text,'Address Book')]")
	public WebElement btn_AddressBook;
	
	@iOSXCUITFindBy(id = "SMS")
	@AndroidFindBy(xpath = "//android.widget.Button[contains(@text,'SMS')]")
	public WebElement btn_SMS;
	
	@iOSXCUITFindBy(id = "Device Info")
	@AndroidFindBy(xpath = "//android.widget.Button[contains(@text,'Device Info')]")
	public WebElement btn_DeviceInfo;
	
	@iOSXCUITFindBy(id = "Local Storage")
	@AndroidFindBy(xpath = "//android.widget.Button[contains(@text,'Local Storage')]")
	public WebElement btn_LocalStorage;
	
	@iOSXCUITFindBy(id = "WebSQL")
	@AndroidFindBy(xpath = "//android.widget.Button[contains(@text,'WebSQL')]")
	public WebElement btn_WebSQL;
	
	@iOSXCUITFindBy(id = "Crypto Libraries")
	@AndroidFindBy(xpath = "//android.widget.Button[contains(@text,'Crypto Libraries')]")
	public WebElement btn_CryptoLibraries;
	
	@iOSXCUITFindBy(id = "Current accelerometer data")
	@AndroidFindBy(xpath = "//android.widget.Button[contains(@text,'Current accelerometer data')]")
	public WebElement btn_CurAccelerometer;

	@iOSXCUITFindBy(id = "Basic camera")
	@AndroidFindBy(xpath = "//android.widget.Button[contains(@text,'Basic camera')]")
	public WebElement btn_Basiccamera;
	
	@iOSXCUITFindBy(id = "Email without attachment")
	@AndroidFindBy(xpath = "//android.widget.Button[contains(@text,'Email without attachment')]")
	public WebElement btn_attachment;
	
	@iOSXCUITFindBy(id = "Add contact")
	@AndroidFindBy(xpath = "//android.widget.Button[contains(@text,'Add contact')]")
	public WebElement btn_Addcontact;
	
	@iOSXCUITFindBy(id = "deviceid")
	@AndroidFindBy(xpath = "//android.widget.TextView[contains(@text,'Device ID')]")
	public WebElement txt_DeviceID;
	
	@iOSXCUITFindBy(id = "Local Store")
	@AndroidFindBy(xpath = "//android.widget.TextView[contains(@text,'Local Store')]")
	public WebElement txt_LocalStore;
	
	@iOSXCUITFindBy(id = "Create database")
	@AndroidFindBy(xpath = "//android.widget.Button[contains(@text,'Create database')]")
	public WebElement btn_Createdatabase;
	
	@iOSXCUITFindBy(id = "Encrypt")
	@AndroidFindBy(xpath = "//android.widget.Button[contains(@text,'Encrypt')]")
	public WebElement btn_Encrypt;
	
	@iOSXCUITFindBy(id = "Back")
	@AndroidFindBy(xpath = "(//*[@class='android.widget.TextView'])[1]")
	public WebElement back_btn;
	
	
	public FrmDeviceFeatures(RemoteWebDriver driver) {
		super(driver);
		this.driver = driver;
	}
	
	public void navigateToAccelerometerForm() {
		this.btn_Accelerometer.click();
	}
	
	public void navigateToCameraForm() {
		this.btn_Camera.click();
	}
	
	public void navigateToEmailForm() {
		this.btn_Email.click();
	}
	
	public void navigateToAddressBookForm() {
		this.btn_AddressBook.click();
	}
	
	public void navigateToDeviceInfoForm() {
		this.btn_DeviceInfo.click();
	}
	
	public void navigateToLocalStorageForm() {
		this.btn_LocalStorage.click();
	}
	
	public void navigateToWebSQLForm() {
		//scrollDown();
		this.btn_WebSQL.click();
	}
	
	public void navigateToCryptoLibrariesForm() {
		//scrollDown();
		this.btn_CryptoLibraries.click();
	}
	
	public boolean isNavigatedToAccelerometerForm() {
		return this.btn_CurAccelerometer.isDisplayed();
	}
	
	public boolean isNavigatedToCameraForm() {
		return this.btn_Basiccamera.isDisplayed();
	}
	
	public boolean isNavigatedToEmailForm() {
		return this.btn_attachment.isDisplayed();
	}
	
	public boolean isNavigatedToAddressBookForm() {
		return this.btn_Addcontact.isDisplayed();
	}
	
	public boolean isNavigatedToDeviceInfoForm() {
		return this.txt_DeviceID.isDisplayed();
	}
	
	public boolean isNavigatedToLocalStorageForm() {
		return this.txt_LocalStore.isDisplayed();
	}
	
	public boolean isNavigatedToWebSQLForm() {
		return this.btn_Createdatabase.isDisplayed();
	}
	public boolean isNavigatedToCryptoLibrariesForm() {
		return this.btn_Encrypt.isDisplayed();
	}
	
//	public void scrollDown() {
//		Dimension dimensions = driver.manage().window().getSize();
//		Double screenHeightStart = dimensions.getHeight() * 0.5;
//		int scrollStart = screenHeightStart.intValue();
//		Double screenHeightEnd = dimensions.getHeight() * 0.2;
//		int scrollEnd = screenHeightEnd.intValue();
//		((TouchShortcuts) driver).swipe(0,scrollStart,0,scrollEnd,1000);
//	}
}
