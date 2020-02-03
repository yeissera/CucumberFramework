package CucumberFramework.steps;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {

	WebDriver driver;

	@Before()
	public void setup() throws IOException{
		System.setProperty("webdriver.gecko.driver",Paths.get(System.getProperty("user.dir")).toRealPath() + "\\src\\test\\java\\CucumberFramework\\resources\\chromedriver.exe");
		this.driver = new FirefoxDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);
	}
	@Given("^I access webdriveruniversity$")
	public void i_access_webdriveruniversity() throws Throwable {
	    driver.get("http://webdriveruniversity.com");
	}

	@When("^I click on the login portal button$")
	public void i_click_on_the_login_portal_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.id("login-portal")).click();
	}

	@When("^I enter a username$")
	public void i_enter_a_username() throws Throwable {
	    // Store the current windows handle
		 @SuppressWarnings("unused")
		String winHandleBefore=driver.getWindowHandle();
		//Perform the click operation that opens new window
		//Switch to new opened
		for(String winHandle : driver.getWindowHandles()) {
			driver.switchTo().window(winHandle);
		}
		driver.findElement(By.id("text")).sendKeys("Tom");
	}

	@When("^I enter a \"([^\"]*)\" password$")
	public void i_enter_a_password(String password) throws Throwable {
	    driver.findElement(By.id("password")).sendKeys(password);
	}

	@When("^I click on the login button$")
	public void i_click_on_the_login_button() throws Throwable {
	    driver.findElement(By.id("login-button")).click();
	}

	@Then("^I should be presented with a succesfful validation alert$")
	public void i_should_be_presented_with_a_succesfful_validation_alert() throws Throwable {
		Alert alert=driver.switchTo().alert();
	    System.out.println(alert.getText());
	    Assert.assertEquals("validation failed666", alert.getText());
	}
	
	@Then("^I should be presented with a unsuccessful validation alert$")
	public void i_should_be_presented_with_a_unsuccessful_validation_alert() throws Throwable {
		Alert alert=driver.switchTo().alert();
		System.out.println(alert.getText());
		//actual expects
		Assert.assertEquals("validation failed", alert.getText());
	}
	
}
