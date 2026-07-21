//Create a Lead using CSS Selectors

import {test} from "@playwright/test";

test('Create lead using CSS selector',async ({page}) => {
    
    //Login
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator('[id="username"]').fill("democsr2");
    await page.locator('.inputLogin').last().fill("crmsfa");
    await page.locator('[value="Login"]').click();
    //Click CRM/SFA button
    await page.locator('[id="button"]').click();
    //Click leads
    await page.locator('a[href="/crmsfa/control/leadsMain"]').click();
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click();
    //Entering details
    await page.locator('#createLeadForm_companyName').fill("VV Enterprise");
    await page.locator('#createLeadForm_firstName').fill("Vignesh");
    await page.locator('#createLeadForm_lastName').fill("Raju");
    await page.locator('#createLeadForm_personalTitle').fill("Mr.");
    await page.locator('#createLeadForm_annualRevenue').fill("10000000");
    await page.locator('.inputBox').nth(11).fill("Arts");
    //Source dropdown 
    const dropdownValues = page.locator('select[id="createLeadForm_dataSourceId"]>option');
    const dropdownCount = await dropdownValues.count();
    for(let i=0;i<dropdownCount;i++){
    console.log(dropdownValues.nth(i).innerText());
    }
    //Phone number and submit button
    await page.locator('[id="createLeadForm_primaryPhoneNumber"]').fill("9500671681");
    await page.locator('.smallSubmit').click();
})
