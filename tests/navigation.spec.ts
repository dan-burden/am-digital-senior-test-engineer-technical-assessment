import { test, expect } from "@playwright/test";

test("timeline content block link navigates to page", async ({ page, context }) => {
    await page.goto("https://demo.quartexcollections.com/");

    // expand the content block
    await page.getByRole('button', { name: 'Discovery Aids' }).click()
    // input our search term
    await page.getByText('The Brownings: A Brief History').click()

    await page.waitForURL(/\/discovery-aids\/the-brownings-a-brief-history/);
    // set up expected new tab
    const newTabPromise = context.waitForEvent('page')
    // need to scroll to load content, so hook into the loading message
    await page.getByText('Loading....').scrollIntoViewIfNeeded() // this may not be robust
    await page.getByRole('link', { name: 'one of their first love' }).click()
    // expect to open new tab
    const newTab = await newTabPromise
    await page.goto("https://demo.quartexcollections.com/");
    await newTab.waitForURL(/\/Documents\/Detail\/10-january-1845\.-browning-robert-to-browning-elizabeth-barrett\.\/36113/)
    await expect(newTab).toHaveTitle(/\[10 January 1845\]\. Browning, Robert to Browning, Elizabeth Barrett\..*/) // trailing wildcard allows for other environments 
});
