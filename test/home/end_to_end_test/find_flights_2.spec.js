const {expect, test} = require('@playwright/test')
import {blazedemo_home} from '../page_objects/home'
import logger from '../../../my-report.js'

test.beforeEach(async({page}) => {
    const searchFlightInformation = new blazedemo_home(page)
    const referenceTitle = process.env.BLAZEDEMO_HOME_TITLE
    await searchFlightInformation.gotoWebsite()
    const verifyTitle = await expect(page).toHaveTitle(referenceTitle)
    
    // await page.evaluate((data) => {
    //     console.log("Title not found:", data)
    // }, verifyTitle)
    // await page.on('pageerror', (dialog) => {
    //     console.log(`Uncaught exception: ${dialog.message}`)
    // })
})
test("Search flight information for Philadelphia to Buenos Aires", async({page}) => {
    const searchFlightInformation = new blazedemo_home(page)
    const referenceTitle = process.env.BLAZEDEMO_RESERVE_TITLE
    const referenceEndpoint = process.env.BLAZEDEMO_RESERVE_ENDPOINT
    await searchFlightInformation.select_departure_philadelphia()
    await searchFlightInformation.select_destination_buenos_aires()
    await searchFlightInformation.submitButton_findFlights()
    //Verifying the flight information page
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page).toHaveURL(referenceEndpoint)
   
})
test("Search flight information for Philadelphia to Rome", async({page}) => {
    const searchFlightInformation = new blazedemo_home(page)
    const referenceTitle = process.env.BLAZEDEMO_RESERVE_TITLE
    const referenceEndpoint = process.env.BLAZEDEMO_RESERVE_ENDPOINT

    await searchFlightInformation.select_departure_philadelphia()

    await searchFlightInformation.select_destination_rome()

    await searchFlightInformation.submitButton_findFlights()

    await expect(page).toHaveTitle(referenceTitle)

    await expect(page).toHaveURL(referenceEndpoint)
  
})
test("Search flight information for Philadelphia to London", async({page}) => {
    const searchFlightInformation = new blazedemo_home(page)
    const referenceTitle = process.env.BLAZEDEMO_RESERVE_TITLE
    const referenceEndpoint = process.env.BLAZEDEMO_RESERVE_ENDPOINT
 
    await searchFlightInformation.select_departure_philadelphia()

    await searchFlightInformation.select_destination_london()

    await searchFlightInformation.submitButton_findFlights()

    await expect(page).toHaveTitle(referenceTitle)
 
    await expect(page).toHaveURL(referenceEndpoint)
    
})
test("Search flight information for Philadelphia to Berlin", async({page}) => {
    const searchFightInformation = new blazedemo_home(page)
    const referenceTitle = process.env.BLAZEDEMO_RESERVE_TITLE
    const referenceEndpoint = process.env.BLAZEDEMO_RESERVE_ENDPOINT
    await searchFightInformation.select_departure_philadelphia()
    await searchFightInformation.select_destination_berlin()
    await searchFightInformation.submitButton_findFlights()

    await expect(page).toHaveTitle(referenceTitle)

    await expect(page).toHaveURL(referenceEndpoint)
    
})
test("Search flight information for Philadelphia to New York", async({page}) => {
    const searchFlightInformation = new blazedemo_home(page)
    const referenceTitle = process.env.BLAZEDEMO_RESERVE_TITLE
    const referenceEndpoint = process.env.BLAZEDEMO_RESERVE_ENDPOINT
    await searchFlightInformation.select_departure_philadelphia()
    await searchFlightInformation.select_destination_new_york()
    await searchFlightInformation.submitButton_findFlights()

    await expect(page).toHaveTitle(referenceTitle)

    await expect(page).toHaveURL(referenceEndpoint)
    
})
test.afterEach(async({page}) => {
    const searchFlightInformation = new blazedemo_home(page)
    await searchFlightInformation.close()
})