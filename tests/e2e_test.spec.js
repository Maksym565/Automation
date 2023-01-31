const {test, expect} = require('@playwright/test');
const {PROD_ENVIRONMENT} = require('../src/domain')
const {userInfo} = require('../src/data')
const {locator} = require('../src/locators')

const {name, city, postCode, houseNumber, street} = userInfo

test.beforeEach(async ({ page }) => {
    await page.goto(PROD_ENVIRONMENT);

    await test.step('Accept cookies', async () => {
        await page.waitForTimeout(3000)
        await page.locator("#CookieConsentIOAccept").click()
    });
});

test('Add any product to cart', async ({ page }) => {

    await test.step('Add cart item', async () => {
        await page.locator(locator.mainPage.giftCards).first().click()
        await page.locator(locator.giftCard.allInGift).last().click()
        await page.locator(locator.cart.goToCartBtn).click()
    });

    await test.step('Fill cart form and click goToCart button', async () => {
        await page.locator(locator.cart.name).fill(name)
        await page.locator(locator.cart.postCode).fill(postCode)
        await page.locator(locator.cart.houseNumber).fill(houseNumber)
        await page.locator(locator.cart.street).fill(street)
        await page.locator(locator.cart.city).fill(city)
        await page.locator(locator.cart.goToCartBtn).last().click()
        await expect(page.locator(locator.cart.cartHeader)).toBeVisible()
    });
});