const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const https = require('https')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/signup.html`)
})

app.post('/', (req, res) => {
    // const firstName = req.body.fName
    // const lastName = req.body.lName
    // const email = req.body.email

    // const data = {
    //     members: [
    //         {
    //             email_address: email,
    //             status: "subscribed",
    //             merge_fields: {
    //                 FNAME: firstName,
    //                 LNAME: lastName
    //             }
    //         }
    //     ]
    // }

    // const jsonData = JSON.stringify(data)

    // const url = "https://us10.api.mailchimp.com/3.0/lists/d7894bd800"
    // const options = {
    //     method: "POST",
    //     auth: "matt1:1dad7bd2beb6be9f2cd1b5b52c8a57ac-us10"
    // }

    // const request = https.request(url, options, function(response) {
    //     response.on("data", function(data) {
    //         console.log(JSON.parse(data));
    //     })
    // })

    // request.write(jsonData)
    // request.end()

    const dc = "us10"
    const apikey = "1dad7bd2beb6be9f2cd1b5b52c8a57ac-us10"

    const url = `https://${dc}.api.mailchimp.com/3.0/ping`
    const user = `anystring:${apikey}`

    const request = https.request(url, user, function(response) {
        response.on("data", function(data) {
            console.log(JSON.parse(data));
        })
    })

    request.send()
})

app.listen(3000, (req, res) => {
    console.log('App is listening on port 3000');
})

// API Key
// 1dad7bd2beb6be9f2cd1b5b52c8a57ac-us10

// List ID
// d7894bd800