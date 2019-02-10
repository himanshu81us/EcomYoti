

describe( 'Multiple test cases',function(){
browser.waitForAngularEnabled(false);
beforeEach(function(){  
browser.get('http://automationpractice.com/index.php');
 });

//TC1 - check  the title of page
it('should have page title',function(){
expect(browser.getTitle()).toEqual('My Store');
});




//TC2 - Add T-shirt in the cart [E2E scenario]
it('Click on T-shirt and Add in cart ',function(){
element(by.xpath('//*[@id="block_top_menu"]/ul/li[3]/a')).click;
element(by.xpath('//*[@id="center_column"]/ul/li/div/div/div[1]/div/a[1]/img')).click;
element(by.id('color_14')).click;
browser.driver.sleep(3000);
element(by.xpath('//*[@id="add_to_cart"]/button/span')).click;
});



//TC3 - Search Dress and varify the search result
it('should enter dresses in search field and saw 7 products as search result',function(){
element(by.name('search_query')).sendKeys('DRESSES');
element(by.id('search_query_top')).click;
browser.driver.sleep(2000);
var text = element(by.xpath('//*[@id="center_column"]/h1/span[2]'));
expect(text.getText()).toEqual('7 results have been found.');
});


//TC4 - Sign in with incorrect log in credential
it('display error message if no password entered in password field ',function(){
element(by.xpath('//*[@id="header"]/div[2]/div/div/nav/div[1]/a')).click;
element(by.name('email')).sendKeys('12345@yah.com');
element(by.xpath('//*[@id="SubmitLogin"]/span')).click;
var text = element(by.xpath('//*[@id="center_column"]/div[1]/ol/li'));
expect(text.getText()).toContain('Password is required.')
});



//TC5 - Contact customer services 
 it('Contact customer services',function(){
element(by.xpath('//*[@id="contact-link"]/a')).click;
element(by.id('id_contact')).click;
element(by.xpath('//*[@id="email"]')).sendKeys('yahoo@yahoo.com');
element(by.id('id_order')).sendKeys('1234');
element(by.name('message')).sendKeys('xyz');
element(by.xpath('//*[@id="submitMessage"]/span')).click;
var text = element(by.xpath('//*[@id="center_column"]/p'));
expect(text.getText()).toEqual('Your message has been successfully sent to our team.');
});


//TC6 Redirect to customer service page from home page.

it('Click on customer service page',function(){
element(by.xpath('//*[@id="contact-link"]/a')).click;
element(by.id('id_contact')).click;
var text = element(by.xpath('//*[@id="center_column"]/h1'));
expect(text.getText()).toEqual('CUSTOMER SERVICE - CONTACT US');
});

});
