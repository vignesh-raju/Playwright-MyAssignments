//Create lead using playwright locators

import {test} from "@playwright/test";

test("Create lead using playwright locators",async ({page}) => {
    //initiate browser
    await page.goto("http://leaftaps.com/opentaps/control/main");
    //Login using credentails
    await page.getByRole("textbox",{name:"Username"}).fill("Demosalesmanager");
    await page.getByRole("textbox",{name:"Password"}).fill("crmsfa");
    await page.getByRole("button",{name:"Login"}).click();
    //Click CRM/SFA button
    await page.getByRole("link",{name:"CRM/SFA"}).click();
    //Click leads
    await page.getByRole("link",{name:"Leads"}).click();
    await page.getByRole("link",{name:"Create Lead"}).click();
    //Enter details for creating new leads
    await page.locator('[name="companyName"]').last().fill("Leastleaf");
    await page.locator('(//input[contains(@id,"firstName")])[1]').fill("Vignesh Raju");
    await page.locator('(//input[contains(@id,"lastName")])[1]').fill("P");
    await page.locator('//input[contains(@id,"personalTitle") and @type="text"]').fill("Mr.");
    await page.locator('[name="generalProfTitle"]').fill("New lead")
    await page.locator('//span[text()="Annual Revenue"]/following::input[contains(@id,"annualRevenue")]').fill("10,00,000");
    await page.locator('[name="departmentName"]').fill("QA");
    await page.locator('[name="primaryPhoneNumber"]').nth(3).fill("9842977415");
    //Click create lead button
    await page.getByRole("button",{name:"Create Lead"}).click();



    
})
