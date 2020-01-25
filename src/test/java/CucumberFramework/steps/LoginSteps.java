package CucumberFramework.steps;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {

	WebDriver driver;

	@Before()
	public void setup() {
		System.setProperty("webdriver.gecko.driver","D:\\Google Drive\\PROYECTOS\\CucumberFramework\\CucumberFramework\\src\\test\\java\\CucumberFramework\\resources\\geckodriver.exe");
		this.driver = new FirefoxDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
	}

	@Given("^User navigates to stackoverflow website$")
	public void user_navigates_to_stackoverflow_website() throws Throwable {
		driver.get("https://stackoverflow.com/");
	}

	@Given("^User clicks on the login button on homepage$")
	public void user_clicks_on_the_login_button_on_homepage() throws Throwable {
		driver.findElement(By.xpath("/html/body/header/div/ol[2]/li[2]/a[1]")).click();
	}

	@Given("^User enters a correct username$")
	public void user_enters_a_correct_username() throws Throwable {
		Thread.sleep(3000);
		driver.findElement(By.xpath("//*[@id=\"email\"]")).sendKeys("yeisser@gmail.com");
	}

	@Given("^User enters a correct password$")
	public void user_enters_a_correct_password() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys("1q2w3e4r");
	}

	@When("^User clicks on the login button$")
	public void user_clicks_on_the_login_button() throws Throwable {
		driver.findElement(By.xpath(".//*[@id=\"submit-button\"]")).click();
	}

	@Then("^User should be taken to the successful login page$")
	public void user_should_be_taken_to_the_successful_login_page() throws Throwable {
		Thread.sleep(5000);
		WebElement askQuestionButton = driver.findElement(By.xpath("//a[contains(text(), 'Ask Question']"));
		Assert.assertEquals(true, askQuestionButton.isDisplayed());
	}

	
}
