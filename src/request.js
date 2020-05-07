//const bytes = utf8.encode(authStringUTF);
//import utf8 from 'utf8'

import { totp } from 'otplib'
import base64 from 'base-64'
import axios from 'axios'

const request = () => {
    const URL = 'https://api.challenge.hennge.com/challenges/003'

    const info = {
        "github_url": "https://github.com/dulerong/emailviewer",
        "contact_email": "codeydu@hotmail.com"
    }
    const secret = 'HENNGECHALLENGE003'
    const dataBody = JSON.stringify(info) // data to be sent to server
    const sharedSecret = info.contact_email+secret // sharedSecret

    totp.options = { digits: 10, algorithm: "sha512", epoch: 0}

    const newTOTP = totp.generate(sharedSecret);
    const isValid = totp.check(newTOTP, sharedSecret);

    console.log(newTOTP, isValid)

    const userPass = info.contact_email + ":" + newTOTP;
    const credential = base64.encode(userPass);

    const config = {
    headers: {
        'Content-Type': 'application/json',
        "Authorization": "Basic " + credential
        }
    };

    axios.post(URL, dataBody, config).then((response) => {
        console.log(response)
    }, (err) => {
        console.log(err)
    })
}

export default request