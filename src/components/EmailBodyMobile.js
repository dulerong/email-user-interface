import React from 'react';

class EmailBodyMobile extends React.Component {
    render(){
        let slideBox = this.props.slide?
            'border-1px width-100pct box-sizing bg-white position-absolute top-0 left-0 transition' :
            'border-1px width-100pct box-sizing bg-white position-absolute top-0 left-150 transition'

        return(
        <div className={slideBox}>
            <div className='display-flex-center padding-y-5px'><button onClick={this.props.handleSlide}>Hide Email</button></div>
            {this.props.emailChecked.map((email, index) => {
                let receiver = email.to ? email.to.join(', ') : ''
                let emailBodyClass = email? 'padding-top-5px padding-bottom-10px padding-x-10px border-b word-wrap' : 'display-none'
                let attachment = email.attachment? 'Click to see attachment' : 'None'
                let attachmentClass = email.attachment? 'on-hover' : ''
                return(
                    <div className={emailBodyClass} key={index}>
                        <p className='margin-0'><span className='font-weight-bold'>From:</span> {email.from}</p>
                        <p className='margin-0'><span className='font-weight-bold'>To:</span> {receiver}</p>
                        <p className='margin-0'><span className='font-weight-bold'>Subject:</span> {email.subject}</p>
                        <p className='margin-0'><span className='font-weight-bold'>Date:</span> {email.date}</p>
                        <p className='margin-0 border-b-gray-1px'>
                            <span className='font-weight-bold'>Attachment: </span><span className={attachmentClass}>{attachment}</span></p>
                        <p className='margin-0'>{email.body}</p>
                    </div>
                )
            })}
        </div>
        )
    }
}

export default EmailBodyMobile