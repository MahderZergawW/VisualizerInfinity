package com.kony.appiumTests.tests;

import static org.testng.Assert.assertEquals;

import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.kony.appiumTests.forms.FrmHome;

public class FrmHomeTests extends BaseTest{

	public static RemoteWebDriver driver;
	FrmHome frmObj;
	
	@BeforeClass
	public void setup() throws InterruptedException {
		System.out.println("In setup FrmHomeTests");
		driver = BaseTest.getDriver();
		frmObj = new FrmHome(driver);
	}
	
	@AfterMethod
	public void navigateBackToHome() throws InterruptedException {
		if(frmObj.back_btn.isDisplayed()) {
			frmObj.back_btn.click();
		}
		Thread.sleep(2000);
	}
	
	@Test
	public void testNavigationToUIInterfaceForm() {
		frmObj.navigateToUIInterfaceForm();
		assertEquals(frmObj.isNavigatedToUIInterfaceForm(), true);
	}
	
	//@Test
	public void testNavigationToAnimationsForm() throws InterruptedException {
		frmObj.navigateToAnimationForm();
		assertEquals(frmObj.isNavigatedToAnimationsForm(),true);
	}
	
	//@Test
	public void testNavigationToDeviceFeaturesForm() {
		frmObj.navigateToDeviceFeaturesForm();
		assertEquals(frmObj.isNavigatedToDeviceFeaturesForm(), true);
	}
}
