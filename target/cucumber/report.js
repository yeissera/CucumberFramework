$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login into account",
  "description": "Existing user should be able to login to account using correct credentials",
  "id": "login-into-account",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4028102000,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Login into account with correct credentials",
  "description": "",
  "id": "login-into-account;login-into-account-with-correct-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User navigates to stackoverflow website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on the login button on homepage",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User enters a correct username",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters a correct password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should be taken to the successful login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_stackoverflow_website()"
});
formatter.result({
  "duration": 4721370700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button_on_homepage()"
});
formatter.result({
  "duration": 1354558500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_a_correct_username()"
});
formatter.result({
  "duration": 3037193900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_a_correct_password()"
});
formatter.result({
  "duration": 24321600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 4710554500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_taken_to_the_successful_login_page()"
});
formatter.result({
  "duration": 5017462900,
  "error_message": "org.openqa.selenium.InvalidSelectorException: Given xpath expression \"//a[contains(text(), \u0027Ask Question\u0027]\" is invalid: SyntaxError: The expression is not a legal expression.\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027ANUBISMIC\u0027, ip: \u0027192.168.0.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\YEISSER\\AppData\\Local\\Temp\\rust_mozprofile6RvOa7, rotatable\u003dfalse, moz:geckodriverVersion\u003d0.26.0, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, moz:headless\u003dfalse, platform\u003dWINDOWS, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dtrue, browserVersion\u003d72.0.1, moz:shutdownTimeout\u003d60000, platformVersion\u003d10.0, moz:processID\u003d7324, browserName\u003dfirefox, moz:buildID\u003d20200107212822, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: bc9a0c83-9c5c-4446-852e-8145cb7fe262\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(), \u0027Ask Question\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:458)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat CucumberFramework.steps.LoginSteps.user_should_be_taken_to_the_successful_login_page(LoginSteps.java:57)\r\n\tat ✽.Then User should be taken to the successful login page(Login.feature:9)\r\n",
  "status": "failed"
});
});