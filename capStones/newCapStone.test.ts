import { newEgg } from "./newPageObject";
const tools = new newEgg();

afterAll(async() => {
        tools.driver.quit();
});

test('This is to test the Light/Dark feature', async() => {
    await tools.navigate();
    await tools.driver.manage().window().maximize();
    await tools.driver.sleep(2000);
    await tools.click(tools.closePopUp);
    await tools.driver.sleep(2000);
    await tools.click(tools.lightDarkSwitch);
    await tools.driver.sleep(2000);
    await tools.click(tools.lightDarkSwitch);
}); 

test('This is to test the Search Function', async() => {
    await tools.click(tools.searchBar);
    await tools.driver.sleep(2000);
    await tools.click(tools.searchBar);
    await tools.driver.sleep(1000);
    await tools.search('monitors');
    await tools.driver.sleep(2000);
    let text = await tools.getResults;
    await tools.driver.sleep(2000);
});

test('This is to test adding and removing items from the cart', async() => {
    await tools.click(tools.homeBtn);
    await tools.click(tools.sideMenu);
    await tools.click(tools.CompBtn);
    await tools.click(tools.coreComp);
    await tools.click(tools.processorBtn);
    await tools.click(tools.processorDesktopBtn);
    await tools.click(tools.processorDetails);
    await tools.click(tools.processorAddToCart);
    await tools.click(tools.noAdProtection);
    await tools.click(tools.exitPopUpCart);
    await tools.click(tools.cartBtn);
    await tools.click(tools.removeItem);
    await tools.click(tools.homeBtn);
});

test('This is to test to see if each of the subMenu options work as intended', async() => {
    await tools.click(tools.bestDeals);
    await tools.click(tools.homeBtn);
    await tools.click(tools.bestSellers);
    await tools.click(tools.homeBtn);
    await tools.click(tools.giftIdeas);
    await tools.click(tools.homeBtn);
    await tools.click(tools.clearance);
    await tools.click(tools.homeBtn);
    await tools.click(tools.amdCombos);
    await tools.click(tools.homeBtn);
});

test('This is to test the country selector', async() => {
    await tools.click(tools.changeLang);
    await tools.click(tools.changLangKuwait);
    await tools.driver.sleep(1000);
    await tools.click(tools.savePreference);
    await tools.driver.sleep(1000);
    await tools.click(tools.changeLang);
    await tools.click(tools.changLangPhilip);
    await tools.click(tools.savePreference);
    await tools.driver.sleep(1000);
    await tools.click(tools.changeLang);
    await tools.click(tools.changeLangJapan);
    await tools.click(tools.savePreference);
    await tools.driver.sleep(1000);
    await tools.click(tools.changeLang);
    await tools.click(tools.changeLangOatar);
    await tools.click(tools.savePreference);
    await tools.driver.sleep(1000);
})