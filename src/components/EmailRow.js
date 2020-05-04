import React from 'react';
import DateConverter from './dateconverter.js'

class EmailRow extends React.Component {
    render(){
        let receiver = this.props.email.to.length > 1 ? this.props.email.to[0] + ' ... ' : this.props.email.to[0]     
        let sender = this.props.email.from.length > 18 ? this.props.email.from.slice(0,19) + '...' : this.props.email.from
        let extraCount = this.props.email.to.length > 1 ?  
            <span className='border-radius-5px padding-x-5px color-white bg-darkgray'>+{Number(this.props.email.to.length-1)}</span> : ''
        let attachment = this.props.email.attachment ?
            <img className='max-w-15px display-inline-block padding-right-5px' src={this.props.icon_clip} alt='' /> : ''
        let senderClass = this.props.clicked === 'from' ? 'font-weight-bold' : ''
        let receiverClass = this.props.clicked === 'to' ? 'font-weight-bold' : ''
        let subjectClass = this.props.clicked === 'subject' ? 'font-weight-bold' : ''
        let dateClass = this.props.clicked === 'date' ? 'font-weight-bold' : ''

        return(
        <div className='max-w-100-pct box-sizing border-b-gray-1px padding-left-10px padding-y-10px display-flex on-hover'>
            <div className='display-inline-block width-20pct'>  
                <span className={senderClass} id={this.props.email.id} onClick={this.props.handleShowBody}>{sender}</span>
            </div> 
            <div className='display-inline-block width-30pct'>
                <div className='display-flex'>
                <span className={receiverClass}>{receiver}</span>
                {extraCount}
                </div>
            </div> 
            <div className='display-inline-block width-25pct'>
                <div className='display-flex'>
                <span className={subjectClass}>{this.props.email.subject}</span>
                {attachment}
                </div>
            </div> 
            <div className='display-inline-block width-10pct'>
                <span className={dateClass}>{DateConverter(this.props.email.date)}</span>
            </div>
        </div>
        )
    }
}
export default EmailRow