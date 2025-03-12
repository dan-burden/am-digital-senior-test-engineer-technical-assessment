import { test, expect } from "@playwright/test";

// Scenario 3
// GIVEN user is viewing the Browse by collection Name A-Z content block
// WHEN user selects a <Letter> to browse
// THEN the page is scrolled to display all collections starting with the chosen <Letter>
// AND the expected <Collection> is displayed
// Example Test Data:
// | Letter | Collection |
// | W | War & Conflict |

test("browse a collection by letter", async ({ page }) => {
    await page.goto(
        "https://demo.quartexcollections.com/explore-the-collections",
    );

    // scroll W into view
    await page.getByRole("button", { name: "Scroll right" }).click();
    await page.getByLabel("Letter W link").click(); // N.B. the click works even without scrolling into view
    await expect(
        page.getByRole("heading", { level: 3, name: /\bW\b(?!.)/ }), // frustrating lack of exact matching for getByRole, and no data-testid, so regex to ensure only one match
    ).toBeInViewport();
    await expect(
        page.getByRole("heading", { level: 4, name: "War & Conflict" }),
    ).toBeInViewport();
});
