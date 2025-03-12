import { test, expect } from "@playwright/test";

// Scenario 1 
// GIVEN user is on any page of the Quartex Published Site 
// WHEN user enters valid <Search term> in the basic search input box 
// AND the search button is clicked 
// THEN user is navigated to the Browse All page 
// AND the first page of search results is displayed 
// AND the <Asset listed> meets the search criteria 
// Example Test Data: 
// | Search term | Asset listed | 
// | Brown | 1 April 1875. Browning, Robert to Pollock, Lady. 

test("basic search box goes to results page", async ({ page }) => {
	await page.goto("https://demo.quartexcollections.com/");

	// expand the masthead search
	await page.getByTestId("toggleSearchButton").click();
	// input our search term
	page.getByTestId("mastheadSearch").fill("Brown");
	// fire off the search
	await page.getByTitle("Apply search").click();
	// ensure we end up on the results page
	await page.waitForURL(/\/documents/);
	await expect(page.getByRole("heading", { name: "Browse All" })).toBeVisible();
	// assert search term shows
	await expect(
		page.getByTestId("search-criteria-search-terms-group"),
	).toHaveText(/Brown/);
	// assert search result
	await expect(
		page.getByText("1 April 1875. Browning, Robert to Pollock, Lady"),
	).toBeVisible();
});

test("multi word search has multiple search terms", async ({ page }) => {
	await page.goto("https://demo.quartexcollections.com/");

	// expand the masthead search
	await page.getByTestId("toggleSearchButton").click();
	// input our space separated search term
	page.getByTestId("mastheadSearch").fill("Browning Pollock");
	// fire off the search
	await page.getByTitle("Apply search").click();
	// ensure we end up on the results page
	await page.waitForURL(/\/documents/);
	await expect(page.getByRole("heading", { name: "Browse All" })).toBeVisible();
	// assert multiple search terms
	await expect(
		page.getByTestId("search-criteria-search-terms-group"),
	).toHaveText(/Browning/);
	await expect(
		page.getByTestId("search-criteria-search-terms-group"),
	).toHaveText(/Pollock/);
	// assert results
	await expect(
		page.getByText("1 April 1875. Browning, Robert to Pollock, Lady"),
	).toBeVisible();
});
