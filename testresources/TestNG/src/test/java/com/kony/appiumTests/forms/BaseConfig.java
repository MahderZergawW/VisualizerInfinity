package com.kony.appiumTests.forms;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.PageFactory;

import io.appium.java_client.pagefactory.AppiumFieldDecorator;

public class BaseConfig {
	
	public RemoteWebDriver driver;
	
	public BaseConfig(RemoteWebDriver driver){
		this.driver = driver;
		new AppiumFieldDecorator(driver);
		PageFactory.initElements(new AppiumFieldDecorator(driver,
				Duration.ofSeconds(10)), this);
	}

}
