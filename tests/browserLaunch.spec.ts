//Launch browsers

import {chromium, test, webkit} from "@playwright/test";
//To launch red bus in edge browser
test('To launch Red bus in edge',async () => {
const browser = await chromium.launch({headless:false,channel:'msedge'});
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://www.redbus.in")

console.log('The title of the page is ',await page.title());
console.log('The current url is ', await page.url());   
})
//To launch flipkart in webkit browser
test('To launch flipkart in webkit',async () => {
const browser = await webkit.launch({headless:false});
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://www.flipkart.com")

console.log('The title of the page is ',await page.title());
console.log('The current url is ', await page.url());   
})