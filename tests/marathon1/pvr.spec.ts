//PVR ticket bookings
import {test,expect} from "@playwright/test";

test("Book ticket in PVR",async ({page}) => {

    await page.goto("https://www.pvrcinemas.com/");
    await page.waitForTimeout(5000);
    if (await page.getByRole("heading",{name:"Select City"}).isVisible()) {//Select cities
        await page.locator("[aria-label='Cities']").fill("Chennai");
        await page.locator("li[role='option']").click();
        await page.waitForTimeout(2000);
        const quickBook = page.locator("//p[text()='Quick Book']")
        await expect(quickBook).toBeVisible();
        await page.locator("//span[text()='Cinema']").click();
        await page.getByRole("button",{name:"Select Cinema"}).click();
        await page.locator("//li[@role='option']/span[contains(text(),'INOX The Marina Mall')]").click();
        await page.waitForTimeout(2000);
        await page.locator("//li[@role='option']/span[contains(text(),'Tomorrow')]").click();
        await page.waitForTimeout(2000);
        await page.locator("//li[@role='option']/span[text()='THE ODYSSEY']").click();
        await page.waitForTimeout(2000);
        await page.locator("//li[@role='option']//span[contains(text(),'06:40 PM')]").click();
        await page.waitForTimeout(2000);
        await page.getByRole("button",{name:"Submit"}).click();
        const certificateA = page.getByRole("button",{name:"Accept"});
        if(await certificateA.isVisible()){
            certificateA.click();
        }else{
            console.log("A certificate is not applicable");   
        }
        if(await page.getByRole("heading",{name:"Terms & Conditions"}).isVisible()){
            await page.waitForTimeout(2000);
            certificateA.click();
        }
        const seat = page.locator("//span[contains(@id,'K:20')]");
        await expect(seat).toBeEnabled();
        seat.click();
        const summarytitle = page.getByRole(("heading"),{name:"Booking Summary"});
        if (await summarytitle.isVisible()) {
            console.log(summarytitle," is displayed");
            const seatVal = page.locator("//h6[text()='Seat Info']/following::div[contains(@class,'seat-number')]/p").innerText();
            if(await seatVal === "K20"){
                console.log("Selected seat is displayed in the summary");   
            }else{
                console.log("Selected seat is not displayed in the summary"); 
            }
        }
    
        const grandTotal = page.getByRole(("heading"),{name:"Grand Total"});
        if(await grandTotal.isVisible()){
            const totalAmount = page.locator("(//*[text()='Grand Total']/following::text())[2]").innerText();
            console.log("The grand total is",totalAmount);
            await page.getByRole("button",{name:"Proceed"}).click();
        }else{
            console.log("Grand total is not displayed");
        }
    }else{
        console.log("Select city is not displayed");   
    }
    
})