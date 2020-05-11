import utf8 from 'utf8'
import { totp } from 'otplib'
import base64 from 'base-64'
import axios from 'axios'

const request = () => {
    const URL = '/'
    const info = {
        github_url: "https://github.com/dulerong/emailviewer",
        contact_email: "codeydu@hotmail.com"
    }
    const secret = 'HENNGECHALLENGE003'
    const dataBody = JSON.stringify(info) // data to be sent to server
    let sharedSecret = info.contact_email+secret // sharedSecret

    totp.options = { digits: 10, algorithm: "sha512", epoch: Date.now(),step: 30}
    const opts = totp.options;

    const newTOTP = totp.generate(sharedSecret);
    
    const isValid = totp.check(newTOTP, sharedSecret);
    console.log('isValid '+isValid)

    const userPass = info.contact_email + ":" + newTOTP;
    const bytes = utf8.encode(userPass);
    const credential = base64.encode(bytes);
    

    console.log(opts)
    console.log('sharedSecret '+sharedSecret)
    
    console.log('TOTP '+newTOTP)
    console.log('userpass '+userPass)
    console.log('bytes '+bytes)
    console.log('credential '+credential)
    console.log('dataBody '+dataBody)
    const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + credential
        }
    };

    axios.post(URL, dataBody, config).then((response) => {
        console.log(response)
    }, (err) => {
        console.log(err)
    })

}

export default request