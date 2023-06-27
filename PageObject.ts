import {By, WebDriver} from "selenium-webdriver";
import { BasePage } from "./basePage";

const chromedriverdriver = require("chromedriver");

export class groupPage extends BasePage {
    driver: WebDriver;
    url: string = "https://pcpartpicker.com/";

    searchPopUpButton: By = By.xpath('(//a[@class="js-trigger-offCanvas--search"])');
     searchBar: By = By.xpath('(//input[@class="text-input inactive_search"])');
     searchButton: By = By.xpath('(//button[@class="button button--primary xs-col-12"])');
     allowCookies: By = By.xpath('//a[@class="cc-btn cc-allow"]');

    lightMode: By = By.xpath('(//div[@class="modeSwitch__wrapper pp_toggle_theme"])[1]');
        darkMode: By = By.xpath('(//div[@class="modeSwitch__wrapper pp_toggle_theme"])[2]');

    builderPage: By = By.xpath('(//li[@class="nav-icon nav-icon--builder"])');
        cpuBPage: By = By.xpath('(//a[@class="button  button--icon button--small"])[1]');
            cpuAddPart: By = By.xpath('(//button[@class="td__add button button--small pp_add_part"])[5]');
        cpuCBPage: By = By.xpath('(//a[@class="button  button--icon button--small"])[2]');
            cpuCAddPart: By = By.xpath('(//button[@class="td__add button button--small pp_add_part"])[3]');
        mBoardBPage: By = By.xpath('(//a[@class="button  button--icon button--small"])[3]');
        memoryBPage: By = By.xpath('(//a[@class="button  button--icon button--small"])[4]');
        storageBPage: By = By.xpath('(//a[@class="button  button--icon button--small"])[5]');
        videoCBPage: By = By.xpath('(//a[@class="button  button--icon button--small"])[6]');
        caseBPage: By = By.xpath('(//a[@class="button  button--icon button--small"])[7]');
        powerSBPage: By = By.xpath('(//a[@class="button  button--icon button--small"])[8]');
        operatingSystemBPage: By = By.xpath('(//a[@class="button  button--icon button--small"])[9]');
        monitorBPage: By = By.xpath('(//a[@class="button  button--icon button--small"])[10]');


    constructor() {
        super({url: "https://pcpartpicker.com/"});
    };

    async search(searchTerm: string) {
        return this.setInput(this.searchBar, `${searchTerm}`);
    };

//     async getResults() {
//         return this.getText(this.results);
//     }
  };