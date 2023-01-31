const locator = {
  mainPage: {
    giftCards: "//*[text()='Cadeaubonnen']",
    acceptCookieBtn: "#CookieConsentIOAccept",
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
  },
};

export { locator };
