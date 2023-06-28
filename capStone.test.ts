//WARNING!!!! This code works but the website will block you, as soon as the Automation goes to a product page it says "Permission Denied" and blocks the IP address


import { groupPage } from "./PageObject";
const tools = new groupPage();

afterAll(async() => {
    setTimeout(() => {
        tools.driver.quit();
    }, 2000);
});

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
    await tools.driver.sleep(4000);
    await tools.click(tools.cpuBPage);
        await tools.click(tools.cpuAddPart);
    await tools.click(tools.cpuCBPage);
        await tools.click(tools.cpuCAddPart);
    await tools.click(tools.mBoardBPage);
        await tools.click(tools.mBoardAP);
    await tools.click(tools.memoryBPage);
        await tools.click(tools.memoryAP);
    await tools.click(tools.storageBPage);
        await tools.click(tools.storageAP);
    await tools.click(tools.videoCBPage);
        await tools.click(tools.videoCAP);
    await tools.click(tools.caseBPage);
        await tools.click(tools.caseAP);
    await tools.click(tools.powerSBPage);
        await tools.click(tools.powerAP);
    await tools.click(tools.operatingSystemBPage);
        await tools.click(tools.operatingAP);
    await tools.click(tools.monitorBPage);
        await tools.click(tools.monitorAP);
});
