@important
Feature: Submit data to webdriveruniversity.com using contact us form

@live
Scenario: Submit valid data via contact us form
	Given I access webdriveruniversity
	When I click on the contact us button
	And I enter a valid first name
	And I enter a valid last name
	| woods | jackson | jones | 
	And I enter a valid email address
	And I enter comments
	| example comment one | example comment two |
	| exaaple comment three| example commentfour |
	When I click on the submit button
	Then the information should successfully be submitted via the contact us form

@staging	
Scenario: Submit valid data via contact us form
	Given I access webdriveruniversity
	When I click on the contact us button
	And I enter a valid first name
	And I enter a valid last name
	| gates | bill | bruno | 
	And I enter a valid email address
	And I enter comments
	| example comment five  | example comment six   |
	| exaaple comment seven | example comment eight |
	When I click on the submit button
	Then the information should successfully be submitted via the contact us form