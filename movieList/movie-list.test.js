const { Builder, Capabilities, By} = require("selenium-webdriver")

require("chromedriver")

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async() =>{
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async() => {
    await driver.quit()
})

// test('Test for adding delete button', async () => {

//     await driver.findElement(By.xpath('//input')).sendKeys('Mulan')

//     await driver.findElement(By.xpath('//button')).click()

//     await driver.sleep(3000)

//     const deleteBtn = await driver.findElement(By.xpath("//button[contains(text(), 'x')]"))

//     const displayed = deleteBtn.isDisplayed()

//     await deleteBtn.click()

//     expect(displayed).not.toBe(true)

//     await driver.sleep(3000)

// })

test('Check to see if a movie has been crossed, css class', async () => {
    await driver.findElement(By.xpath('//input')).sendKeys('Up')

    await driver.findElement(By.xpath('//button')).click()

    await driver.sleep(1000)

    const title = await driver.findElement(By.xpath("//span[contains(text(), 'Up')]"))

    await title.click()

    const clickedTitle = await driver.findElement(By.xpath("//span[contains(@class, 'checked')]"))

    await driver.sleep(3000)

    const isCrossed = title.isDisplayed()

    expect(isCrossed).toBeTruthy()

    expect(clickedTitle).toBeTruthy()

    await driver.sleep(1000)


})

test('Check to see if message displays after movie has been added', async () => {
    await driver.findElement(By.xpath('//input')).sendKeys("Revenge Of The Sith")

    await driver.findElement(By.xpath("//button")).click()

    await driver.sleep(1000)

    const message = await driver.findElement(By.xpath("//aside[contains(text(), Sith)]"))

    // const displayedMessage = message.isDisplayed()

    expect(message).toBeTruthy()


})