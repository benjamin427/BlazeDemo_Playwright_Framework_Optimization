import {expect, test} from '@playwright/test';
import {blazedemo_login} from '../login/page_objects/login';


test.beforeEach( async({page}) => {
    const login = new blazedemo_login(page)
    // Listen for console messages and log them to the terminal
    await page.on('console', msg => {
        console.log(`Browser log: [${msg.type()}] "${msg.text()}}"`)
    })
    await login.visitWebsiteLogin()
})

test('Enter email address in text field and leave the password blank', async({page}) => {
    const login = new blazedemo_login(page)
    const reference_emailAddress = process.env.BLAZEDEMO_LOGIN_EMAIL
    const reference_title = process.env.BLAZEDEMO_LOGIN_TITLE
    const reference_endpoint = process.env.BLAZEDEMO_LOGIN_ENDPOINT
    await expect(page).toHaveTitle(reference_title)
    await expect(page).toHaveURL(reference_endpoint)
    await login.negative_test_blank_password_login(reference_emailAddress)
})
test("Enter the password in text field and leave the email blank", async({page}) => {
    const login = new blazedemo_login(page)
    const reference_password = process.env.BLAZEDEMO_LOGIN_PASSWORD
    const reference_title = process.env.BLAZEDEMO_LOGIN_TITLE
    const reference_endpoint = process.env.BLAZEDEMO_LOGIN_ENDPOINT
    await expect(page).toHaveTitle(reference_title)
    await expect(page).toHaveURL(reference_endpoint)
    await login.negative_test_blank_email_login(reference_password)

})
test("Leave email and password text fields blank. Should display a prompt error message", async({page}) => {
    const login = new blazedemo_login(page)
    const reference_title = process.env.BLAZEDEMO_LOGIN_TITLE
    const reference_endpoint = process.env.BLAZEDEMO_LOGIN_ENDPOINT
    await expect(page).toHaveTitle(reference_title)
    await expect(page).toHaveURL(reference_endpoint)
    await login.negative_test_blank_login()

})