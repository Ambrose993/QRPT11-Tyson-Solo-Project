import { BasePage } from "./basePage";
import {By, WebDriver} from "selenium-webdriver";

const chromedriver = require("chromedriver");

export class newEgg extends BasePage {
    driver: WebDriver;
    url: string = "https://www.newegg.com/";

    closePopUp: By = By.xpath('(//button[@class="close"])');

    lightDarkSwitch: By = By.xpath('(//label[@id="darkLabel"])');
    
    searchBar: By = By.xpath('(//input[@title="Search Site"])');
        results: By = By.xpath('(//span[@class="limit-string"])');

    homeBtn: By = By.xpath('(//img[@alt="Newegg"])[1]');
    homeBtn2: By = By.xpath('(//img[@*])[1]');
    sideMenu: By = By.xpath('(//i[@class="header2021-hamburger-icon ico ico-bars bg-transparent-gray"])');
        CompBtn: By = By.xpath('(//a[@class="menu-list-link bg-transparent-lightblue"])[15]');
         coreComp: By = By.xpath('(//div[@class="section-subtitle"])[1]');
            processorBtn: By = By.xpath('(//a[@class="menu-list-link bg-transparent-lightblue"])[16]');
                processorDesktopBtn: By = By.xpath('(//a[@class="menu-list-link bg-transparent-lightblue"])[17]')
                 processorDetails: By = By.xpath('(//button[@class="btn btn-mini"])[1]');
                    processorAddToCart: By = By.xpath('(//button[@class="btn btn-primary btn-wide"])[1]');
                        noAdProtection: By = By.xpath('(//button[@class="btn"])[1]');
                            exitPopUpCart: By = By.xpath('(//i[@class="fas fa-times"])');
                                cartBtn: By = By.xpath('(//i[@class="ico ico-shopping-cart header2021-nav-icon"])');
                                    removeItem: By = By.xpath('(//button[@class="btn btn-mini btn-tertiary"])[3]');

    subMenuJuly: By = By.xpath('(//a[@class="header2021-portal"])[1]');
        bestDeals: By = By.xpath('(//a[@class="header2021-portal"])[2]');
            bestSellers: By = By.xpath('(//a[@class="header2021-portal"])[3]');
                giftIdeas: By = By.xpath('(//a[@class="header2021-portal"])[4]');
                    clearance: By = By.xpath('(//a[@class="header2021-portal"])[5]');
                        amdCombos: By = By.xpath('(//a[@class="header2021-portal"])[6]');

    changeLang: By = By.xpath('(//a[@title="Change Country"])');
    savePreference: By = By.xpath('(//button[text()="Save Preferences"])');
        changeLangJapan: By = By.xpath('(//div[@class="list-item-title"])[8]');
        changLangAmerica: By = By.xpath('(//div[@class="list-item-title"])[1]');
        changLangTurkey: By = By.xpath('(//div[@class="list-item-title"])[19]');
        changeLangSing: By = By.xpath('(//div[@class="list-item-title"])[16]');
        changeLangOatar: By = By.xpath('(//div[@class="list-item-title"])[14]');
        changLangPhilip: By = By.xpath('(//div[@class="list-item-title"])[13]');
        changLangKuwait: By = By.xpath('(//div[@class="list-item-title"])[9]');

constructor() {
    super({url: "https://www.newegg.com/"});
};

async search(searchTerm: string) {
    return this.setInput(this.searchBar, `${searchTerm}\n`);
};

async getResults() {
    return this.getText(this.results);
};

async navigateBack() {
    return await this.driver.navigate().back();
};

};