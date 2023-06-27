import { groupPage } from "./PageObject";
const tools = new groupPage();

// afterAll(async() => {
//     setTimeout(() => {
//         tools.driver.quit();
//     }, 2000);
// });

test('Turn on/off dark mode', async () => {
    await tools.navigate();
    await tools.click(tools.allowCookies);
    await tools.driver.manage().window().maximize();
    await tools.driver.sleep(2000);
    await tools.click(tools.lightMode);
    await tools.click(tools.darkMode);
});

test('Build a Computer', async () => {
    await tools.navigate();
    await tools.click(tools.builderPage);
    await tools.driver.sleep(2000);
    await tools.click(tools.cpuBPage);
    
});