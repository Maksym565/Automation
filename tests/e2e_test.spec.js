const { test, expect } = require("@playwright/test");
const { PROD_ENVIRONMENT } = require("../src/domain");
const { userInfo, cardData } = require("../src/data");
const { locator } = require("../src/locators");

const {
  name,
  lastName,
  city,
  postCode,
  houseNumber,
  street,
  mail,
  phoneNumber,
} = userInfo;
const { number, month, year, cvv } = cardData;

test.beforeEach(async ({ page }) => {
  await page.goto(PROD_ENVIRONMENT);

  await test.step("Accept cookies", async () => {
    await page.waitForTimeout(3000);
    await page.locator(locator.mainPage.acceptCookieBtn).click();
  });
});

test("Test #1 - Add any product to cart", async ({ page }) => {
  await test.step("Add cart item", async () => {
    await page.locator(locator.mainPage.giftCards).first().click();
    await page.locator(locator.giftCard.allInGift).last().click();
    await page.locator(locator.cart.goToCartBtn).click();
  });

  await test.step("Fill cart form and click goToCart button", async () => {
    await page.locator(locator.cart.name).fill(name);
    await page.locator(locator.cart.postCode).fill(postCode);
    await page.locator(locator.cart.houseNumber).fill(houseNumber);
    await page.locator(locator.cart.street).fill(street);
    await page.locator(locator.cart.city).fill(city);
    await page.locator(locator.cart.goToCartBtn).last().click();
    await expect(page.locator(locator.cart.cartHeader)).toBeVisible();
  });
});

test("Test #2 - Proceed to checkout and try to put credit card data.", async ({
  page,
}) => {
  await test.step("Add cart item", async () => {
    await page.locator(locator.mainPage.giftCards).first().click();
    await page.locator(locator.giftCard.allInGift).last().click();
    await page.locator(locator.cart.goToCartBtn).click();
  });

  await test.step("Fill cart form and click goToCart button", async () => {
    await page.locator(locator.cart.name).fill(name);
    await page.locator(locator.cart.postCode).fill(postCode);
    await page.locator(locator.cart.houseNumber).fill(houseNumber);
    await page.locator(locator.cart.city).fill(city);
    await page.locator(locator.cart.street).fill(street);
    await page.locator(locator.cart.goToCartBtn).last().click();
    await expect(page.locator(locator.cart.cartHeader)).toBeVisible();
  });

  await test.step("Fill user info, choose CC payment method and proceed to checkout", async () => {
    await page.locator(locator.cart.goToCartBtn).last().click();
    await page.locator(locator.userInfo.firstName).fill(name);
    await page.locator(locator.userInfo.lastName).fill(lastName);
    await page.locator(locator.userInfo.profileEmail).fill(mail);
    await page.locator(locator.userInfo.phoneNumber).fill(phoneNumber);

    await page.locator(locator.userInfo.submitBtn).click();
    await expect(page.locator(locator.userInfo.paymentHeader)).toBeVisible();
    await page.locator(locator.userInfo.creditCardLabel).first().click();
    await page.locator(locator.cart.goToCartBtn).last().click();
  });

  await test.step("Fill checkouts field and click confirm continue button, validate error container to displayed", async () => {
    await page.locator(locator.creditCard.name).fill(name + " " + lastName);
    await page.locator(locator.creditCard.number).fill(number);

    await page
      .locator(locator.creditCard.expirationMonth)
      .selectOption({ label: month });
    await page
      .locator(locator.creditCard.expirationYear)
      .selectOption({ label: year });
    await page.locator(locator.creditCard.cvv).fill(cvv);

    await page.locator(locator.creditCard.continueBtn).click();
    await page.waitForLoadState("networkidle");
    await expect(page.locator(locator.cart.errorContainer)).toBeVisible();
  });
});
