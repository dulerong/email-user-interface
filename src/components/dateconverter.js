let d = new Date()
let monthRef1 = {Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
                Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'}
let monthRef2 = {'01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr', '05': 'May', '06': 'Jun',
                 '07': 'Jul', '08': 'Aug', '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec'}
let yearNow = d.toString().slice(11, 15)
let monthNow = monthRef1[d.toString().slice(4, 7)]
let dateNow = d.toString().slice(8, 10)

// if email date is today, will return only time
// if email date is within this year, will return MMM-DD format
// or else, return YYYY/MM/DD format

function DateConverter(date) {
    let emailYear = date.slice(0,4)
    let emailMonth = date.slice(5,7)
    let emailDate = date.slice(8,10)
    let emailTime = date.slice(-5)

    if(emailYear === yearNow && emailMonth === monthNow && emailDate === dateNow){
        return emailTime
    }
    if(emailYear === yearNow){
        return monthRef2[emailMonth] + ' ' + emailDate
    }

    return date.slice(0,10)

}

export default DateConverter