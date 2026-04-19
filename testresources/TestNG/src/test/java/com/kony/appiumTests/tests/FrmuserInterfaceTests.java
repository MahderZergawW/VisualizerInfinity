package com.kony.appiumTests.tests;

import static org.testng.Assert.assertEquals;

import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.kony.appiumTests.forms.FrmHome;
import com.kony.appiumTests.forms.FrmUserInterface;

public class FrmuserInterfaceTests extends BaseTest{
	public static RemoteWebDriver driver;
	FrmUserInterface frmObj;
	
	@BeforeClass
	public void beforeClassSetup() {
		System.out.println("In setup FrmUserInterfaceTests");
		driver = BaseTest.getDriver();
		frmObj = new FrmUserInterface(driver);
		FrmHome frmhome = new FrmHome(driver);
		if(frmhome.txt_ui_interface.isDisplayed()) {
			frmhome.navigateToUIInterfaceForm();
		}
	}
		
	@AfterMethod
	public void navigateBackToUIForm() throws InterruptedException {
		if(frmObj.back_btn.isDisplayed()) {
			frmObj.back_btn.click();
		}
		Thread.sleep(2000);
	}
	
	@AfterClass
	public void navigateBackToHomePage() throws InterruptedException {
		if(frmObj.back_btn.isDisplayed()) {
			frmObj.back_btn.click();
		}
		Thread.sleep(2000);
	}
	
	@Test
	public void testNavigationToContainerWidgetsForm() {
		frmObj.navigateToContainerWidgetsForm();
		assertEquals(frmObj.isNavigatedToContainerWidgetsForm(), true);
	}
	
	@Test
	public void testNavigationToAdvancedwidgetsForm() throws InterruptedException {
		Thread.sleep(2000);
		frmObj.navigateToAdvancedWidgetsForm();
		assertEquals(frmObj.isNavigatedToAdvancedWidgetsForm(),true);
	}
	
	@Test
	public void testNavigationToBasicWidgetsForm() {
		frmObj.navigateToBasicWidgetsForm();
		assertEquals(frmObj.isNavigatedToBasicWidgetsForm(), true);
	}
	
	@Test
	public void testNavigationToFlexLayoutForm() throws InterruptedException {
		frmObj.navigateToFlexLayoutForm();
		Thread.sleep(2000);
		assertEquals(frmObj.isNavigatedToFlexLayoutForm(), true);
	}

}
