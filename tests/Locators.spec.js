const { test, expect } = require('@playwright/test')
test('Locators', async ({page}) => {

 await page.goto("https://www.demoblaze.com/index.html")

 await page.locator("id=login2").click();
 //await page.pause();
 await page.locator('#loginusername').fill("rahuld")
 
 await page.fill('id=loginpassword', 'poiuyt')
 await page.click("//button[normalize-space()='Log in']")
 //await page.pause()
// Verify successful login by checking the presence of the logout button
const logoutLink=await page.locator('//a[normalize-space()="Log out"]') //XPath
await expect(logoutLink).toBeVisible(); 

//await page.close();



})