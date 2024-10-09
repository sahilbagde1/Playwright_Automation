const {test, expect}=require('@playwright/test')

test('handle radio button',async ({page})=>{

    await page.goto('https://itera-qa.azurewebsites.net/home/automation');

    //Radio button

await page.locator("//input[@value='option2']").check(); //male
await expect (await page.locator("//input[@value='option2']")).toBeChecked();
await expect (await page.locator("//input[@value='option2']").isChecked()).toBeTruthy();
await expect(await page.locator("//input[@value='option1']").isChecked()).toBeFalsy(); // for female
 await page.waitForTimeout(5000); //pausing code



})