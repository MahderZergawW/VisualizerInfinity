package com.kony.appiumTests.forms;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;

import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.iOSXCUITFindBy;

public class FrmHome extends BaseConfig{

	public RemoteWebDriver driver;

	@iOSXCUITFindBy(id = "UI Interface")
	@AndroidFindBy(xpath = "//android.widget.TextView[contains(@text,'UI Interface')]")
	public WebElement txt_ui_interface;

	@iOSXCUITFindBy(id = "Form Animations")
	@AndroidFindBy(xpath = "//android.widget.TextView[contains(@text,'Form Animations')]")
	public WebElement txt_form_animations;

	@iOSXCUITFindBy(id = "Device Features")
	@AndroidFindBy(xpath = "//android.widget.TextView[contains(@text,'Device Features')]")
	public WebElement txt_device_features;

	@iOSXCUITFindBy(id = "Provide App Feedback")
	@AndroidFindBy(xpath = "//android.widget.TextView[contains(@text,'Provide App Feedback')]")
	public WebElement txt_provide_app_feedback;

	@iOSXCUITFindBy(id = "Container Widgets")
	@AndroidFindBy(xpath = "//android.widget.TextView[contains(@text,'Container Widgets')]")
	public WebElement txt_container_widgets;
	
	@iOSXCUITFindBy(id = "Back")
	@AndroidFindBy(xpath = "(//*[@class='android.widget.TextView'])[1]")
	public WebElement back_btn;
	
	@iOSXCUITFindBy(id = "Flip")
	@AndroidFindBy(xpath = "//android.widget.TextView[contains(@text,'Bottom-Top')]")
	public WebElement txt_bottom_top;
	
	@iOSXCUITFindBy(id = "Accelerometer")
	@AndroidFindBy(xpath = "//android.widget.Button[contains(@text,'Accelerometer')]")
	public WebElement btn_accelerometer;

	public FrmHome(RemoteWebDriver driver) {
		super(driver);
	}

	public void navigateToUIInterfaceForm() {
		this.txt_ui_interface.click();
	}

	public void navigateToAnimationForm() {
		this.txt_form_animations.click();
	}

	public void navigateToDeviceFeaturesForm() {
		this.txt_device_features.click();
	}

	public void navigateToFeedbackForm() {
		this.txt_provide_app_feedback.click();
	}

	public boolean isNavigatedToUIInterfaceForm() {
		return this.txt_container_widgets.isDisplayed();
	}

	public boolean isNavigatedToAnimationsForm() {
		return this.txt_bottom_top.isDisplayed();
	}

	public boolean isNavigatedToDeviceFeaturesForm() {
		return this.btn_accelerometer.isDisplayed();
	}

}
