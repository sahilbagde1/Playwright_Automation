const {test, expect}=require ('@playwright/test')
test("handle dropdown", async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/") 

await page.locator('#country').selectOption({label:'India'})   // label - visible text
await page.locator('#country').selectOption('India')            // visible text
await page.locator('#country').selectOption({value:'uk'})   // by value
await page.locator('#country').selectOption({index:1}) // by index value


})