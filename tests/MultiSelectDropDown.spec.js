const {test, expect}=require ('@playwright/test')
test("handle multiselect dropdown", async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/") 
await page.selectOption('#colors',['Blue','Red'])
await page.waitForTimeout(5000)



})

