import { expect, test } from '@playwright/test'
import { blazedemo_login } from '../login/page_objects/login'


test("Entering expected input for email and password text fields to log in successfully ", async({page}) => {
    const login = new blazedemo_login(page)
    const reference_emailAddress = process.env.BLAZEDEMO_LOGIN_EMAIL
    const reference_password = process.env.BLAZEDEMO_LOGIN_PASSWORD
    const reference_title = process.env.BLAZEDEMO_LOGIN_TITLE
    const reference_endpoint = process.env.BLAZEDEMO_LOGIN_ENDPOINT
    // Listen for console messages and log them to the terminal
    await page.on('console', msg => {
        console.log(`Browser log: [${msg.type()}] "${msg.text()}"`)
    })
    await login.visitWebsiteLogin()
    await expect(page).toHaveTitle(reference_title)
    await expect(page).toHaveURL(reference_endpoint)
    await login.test_login(reference_emailAddress, reference_password)
    await login.close()
})