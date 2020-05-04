import totp from 'otplib'
import utf8 from 'utf8'
import base64 from 'base-64'
import axios from 'axios'

const URL = 'https://api.challenge.hennge.com/challenges/003'

const info = {
    "github_url": "https://github.com/dulerong/emailviewer",
    "contact_email": "codeydu@hotmail.com"
}
const dataBody = JSON.stringify(info) // data to be sent to server
const sharedSecret = userid+"HENNGECHALLENGE003" // shared key

totp.options = { digits: 10, algorithm: "sha512", epoch: 0}

const newTOTP = totp.generate(sharedSecret);
const isValid = totp.check(newTOTP, sharedSecret);

console.log(newTOTP, isValid)

const authStringUTF = info.contact_email + ":" + newTOTP;
const bytes = utf8.encode(authStringUTF);
const password = base64.encode(bytes);

const request = async () => {
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Basic " + password
            }
        };

        console.log('Requesting...', {URL, info, config})

        const res = await axios.post(URL, dataBody, config);
        console.log(res.data)

    }
    catch(err){
        console.log(err.response.data)
    }
}

export default request