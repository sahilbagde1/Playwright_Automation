const {test, expect}=require ('@playwright/test')
test("handle multiselect dropdown", async ({page})=>{

await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2") 
await page.locator('.multiselect').click() // click on the dropdown

// select options from dropdown
    const options=await page.$$('ul>li label')
    for(let option of options)
    {
        const value=await option.textContent();
        //console.log("value is",value)
        if(value.includes('Angular') || value.includes('Java'))
        {
            await option.click()
        }
    }
    await page.waitForTimeout(5000);

})