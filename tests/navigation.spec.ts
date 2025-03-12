import { test, expect } from "@playwright/test";
// Scenario 2
// GIVEN user is on any page of the Quartex Published Site
// AND user has navigated to a <Timeline content block >
// WHEN user navigates to a <Timeline item>
// AND user clicks a <Link>available on the <Timeline item>
// THEN the correct <webpage is launched> in a new tab
// Example Test Data:
// | Timeline content block | Timeline item | Link | Webpage is launched |
// | https://demo.quartexcollections.com/discovery-aids/the-brownings-a-brief-history |
// 1845 | View one of their first love letters within The Browning Letters Collection. |
// https://demo.quartexcollections.com/Documents/Detail/10-january-1845.-browning-
// robert-to-browning-elizabeth-barrett./36113 |

test("timeline content block link navigates to page", async ({
	page,
	context,
}) => {
	await page.goto("https://demo.quartexcollections.com/");

	// expand the discovery aids block
	await page.getByRole("button", { name: "Discovery Aids" }).click();
	// click to navigate to Timeline item
	await page.getByText("The Brownings: A Brief History").click();
	await page.waitForURL(/\/discovery-aids\/the-brownings-a-brief-history/);
	// set up expected new tab
	const newTabPromise = context.waitForEvent("page");
	// need to scroll to load content, so hook into the loading message
	await page.getByText("Loading....").scrollIntoViewIfNeeded(); // this may not be robust
	await page.getByRole("link", { name: "one of their first love" }).click();
	// expect to open new tab
	const newTab = await newTabPromise;
	await newTab.waitForURL(
		/\/Documents\/Detail\/10-january-1845\.-browning-robert-to-browning-elizabeth-barrett\.\/36113/,
	);
	await expect(newTab).toHaveTitle(
		/\[10 January 1845\]\. Browning, Robert to Browning, Elizabeth Barrett\..*/, // trailing wildcard allows for other environments
	); 
});
