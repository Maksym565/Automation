const locator = {
  mainPage: {
    giftCards: "//*[text()='Cadeaubonnen']",
    acceptCookieBtn: "#CookieConsentIOAccept",
    megaMenuItems: ".d5f0817d4922284f4183423cbd914755-css > div",
  },
  giftCard: {
    allInGift: "//*[text()='Alles-in-1 Keuze Cadeaukaart van cadeaubon.nl']",
  },
  cart: {
    goToCartBtn: '//button[@type="button"]',
    name: "//input[@name='name']",
    postCode: "//input[@name='postCode']",
    houseNumber: "//input[@name='houseNumber']",
    street: "//input[@name='street']",
    city: "//input[@name='city']",
    cartHeader: "//*[text()='Je winkelmandje']",
    errorContainer:
      "(//p[contains(text(),'Je betaling is helaas niet succesvol afgerond.')])[1]",
  },
  userInfo: {
    firstName: '//input[@name="firstName"]',
    lastName: '//input[@name="lastName"]',
    profileEmail: '//input[@name="profileEmail"]',
    phoneNumber: '//input[@name="phoneNumber"]',
    submitBtn: '//button[@type="submit"]',
    paymentHeader: "//h2[normalize-space()='Te betalen']",
    creditCardLabel: "//*[text()='MasterCard']",
  },
  creditCard: {
    name: "#brq_SERVICE_mastercard_CustomerCardName",
    number: "#brmv_brq_SERVICE_mastercard_MastercardCreditcardNumber",
    expirationMonth: "#brmv_brq_CardExpirationDate_month",
    expirationYear: "#brmv_brq_CardExpirationDate_year",
    cvv: "#brq_SERVICE_mastercard_CVV3",
    continueBtn: "#button_continue",
  },
};

export { locator };
