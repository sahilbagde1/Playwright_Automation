const{test, expect}= require('@playwright/test');
test('Test Alert Box', async ({page}) => {
   
    await page.goto("https://testautomationpractice.blogspot.com/");

// Enable alert handling | Dailog window handler
page.on('dialog', async dialog => {
     expect(dialog.type()).toContain('alert');   // Verify type of dialog
     expect(dialog.message()).toContain('I am an alert box!');   // verify message of alert
     await dialog.accept();          //click on alert Ok button
  });
 
  // Click on trigger an alert button
   await page.click('//button[normalize-space()="Alert"]');
});



