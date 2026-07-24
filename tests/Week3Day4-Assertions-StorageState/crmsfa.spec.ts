import {test,expect} from "@playwright/test";

test("crmsfa",async ({page}) => {
    await page.goto("https://leaftaps.com/opentaps/control/login");
    const userName = page.locator("#username");
    await expect(userName).not.toBeVisible();
    const crmFA = page.locator("//div[@id='label']");
    await expect(crmFA).toBeEnabled();
    await expect(crmFA).toBeVisible();
    await crmFA.click();
})