package com.kony.appiumTests.tests;

import static org.testng.Assert.assertEquals;

import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import com.kony.appiumTests.forms.FrmDeviceFeatures;
import com.kony.appiumTests.forms.FrmHome;

public class FrmdeviceFeaturesTests extends BaseTest {
	
	public static RemoteWebDriver driver;
	FrmDeviceFeatures frmObj;
	
	@BeforeClass
	public void setup() throws InterruptedException {
		System.out.println("In setup FrmDeviceFeaturesTests");
		driver = BaseTest.getDriver();
		frmObj = new FrmDeviceFeatures(driver);
		FrmHome frmhome = new FrmHome(driver);
		frmhome.navigateToDeviceFeaturesForm();
	}
	
	@BeforeMethod
	public void beforeMethod() throws InterruptedException {
		FrmHome frmhome = new FrmHome(driver);
		frmhome.navigateToDeviceFeaturesForm();
	}
	
	
	@AfterMethod
	public void navigateBackToUIForm() throws InterruptedException {
		if(frmObj.back_btn.isDisplayed()) {
			frmObj.back_btn.click();
		}
		Thread.sleep(5000);
	}
	
	@AfterClass
	public void navigateBackToHomePage() throws InterruptedException {
		if(frmObj.back_btn.isDisplayed()) {
			frmObj.back_btn.click();
		}
		Thread.sleep(2000);
	}
	
	@Test
	public void testNavigationToAccelerometerForm() {
		frmObj.navigateToAccelerometerForm();
		assertEquals(frmObj.isNavigatedToAccelerometerForm(), true);
	}
	
	@Test
	public void testNavigationToCameraForm() {
		frmObj.navigateToCameraForm();;
		assertEquals(frmObj.isNavigatedToCameraForm(), true);
	}
	
	@Test
	public void testNavigationToEmailForm() {
		frmObj.navigateToEmailForm();
		assertEquals(frmObj.isNavigatedToEmailForm(), true);
	}
	
	@Test
	public void testNavigationToAddressBookForm() {
		frmObj.navigateToAddressBookForm();;
		assertEquals(frmObj.isNavigatedToAddressBookForm(), true);
	}
	
	@Test
	public void testNavigationToDeviceInfoForm() {
		frmObj.navigateToDeviceInfoForm();
		assertEquals(frmObj.isNavigatedToDeviceInfoForm(), true);
	}
	
	@Test
	public void testNavigationToLocalStorageForm() {
		frmObj.navigateToLocalStorageForm();
		assertEquals(frmObj.isNavigatedToLocalStorageForm(), true);
	}
	
	@Test
	public void testNavigationToWebSQLForm() {
		frmObj.navigateToWebSQLForm();
		assertEquals(frmObj.isNavigatedToWebSQLForm(), true);
	}
	
	@Test
	public void testNavigationToCryptoForm() {
		frmObj.navigateToCryptoLibrariesForm();
		assertEquals(frmObj.isNavigatedToCryptoLibrariesForm(), true);
	}

}
