describe('loginPage',function(){

it ('browse to deckopayloginpage',function(){


    browser.get('https://release.dekopay.org/backoffice/v2/#/');
    browser.driver.manage().window().maximize();
    element(by.model('User.Username')).sendKeys('praveen.kakkerla');
    element(by.model('User.Password')).sendKeys('DekoQA2020');
  
  let signInButton= $('#ng-app > div > div > div > div > div > form > div.col-md-2.nopadding > button');
  signInButton.click();
   browser.waitForAngularEnabled(false);
    var EC = protractor.ExpectedConditions;
    // Waits for the element to be clickable.
    browser.wait(EC.elementToBeClickable(element(by.binding('User.DisplayName'))), 5000);
   let loggedInUserNAme=element(by.binding('User.DisplayName'));
   
   expect(loggedInUserNAme.getText()).toEqual('Praveen');
   
   loggedInUserNAme.getText().then(function(user){
    console.log('logged in as  '+  user)

   });
    
});
    
});