import React from 'react';
import DateConverter from './dateconverter.js'

class EmailRowMobile extends React.Component {
    render(){
        let sender = this.props.email.from.length > 19 ? this.props.email.from.slice(0,20) + '...' : this.props.email.from
        let receiver = this.props.email.to.length === 1 ? this.props.email.to : this.props.email.to[0] + '...'
        let extraCount = this.props.email.to.length > 1 ?  
            <span className='border-radius-5px padding-right-5px padding-left-5px color-white bg-darkgray'>+{Number(this.props.email.to.length-1)}</span> : ''
        let attachment = this.props.email.attachment ?
        <img className='max-w-15px display-inline-block padding-right-5px' src={this.props.icon_clip} alt='' /> : ''
        
        let senderClass = this.props.clicked === 'from' ? 'font-weight-bold font-size-small on-hover' : 'font-size-small on-hover'
        let receiverClass = this.props.clicked === 'to' ? 'font-weight-bold font-size-small' : 'font-size-small'
        let subjectClass = this.props.clicked === 'subject' ? 'font-weight-bold font-size-small' : 'font-size-small'
        let dateClass = this.props.clicked === 'date' ? 'font-weight-bold font-size-small' : 'font-size-small'

        return(
        <div className='border-b-gray-1px height-100px padding-x-10px display-flex-vertical box-sizing'>
            <div className='display-flex padding-left-5px padding-right-5px'>
                <img src={this.props.icon_mail} alt='' className='display-inline-block max-w-15px' />
                <div className='display-inline-block width-90pct'>
                    <p className='display-flex margin-0'>
                        <span className={senderClass} id={this.props.email.id} onClick={this.props.handleShowBody}>
                            {sender}
                        </span>
                        <span className='display-inline-flex width-50pct'>
                            {attachment}
                            <span className={dateClass}>{DateConverter(this.props.email.date)}</span>
                            <img src={this.props.icon_arrow02} alt='' className='display-inline-block max-w-5px padding-left-5px'/>
                        </span>
                    </p>
                    <p className='display-flex margin-0'>
                        <span className={receiverClass}>
                            {receiver}
                        </span>
                        {extraCount}
                    </p>
                </div>    
            </div>
            <div className='padding-left-5px'>
                <span className={subjectClass}>{this.props.email.subject}</span>
            </div>
        </div>
        )
    }
}
export default EmailRowMobile