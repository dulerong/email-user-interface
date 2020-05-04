import React from 'react';

class TopRowMobile extends React.Component {
    render(){
        let topRowClass = this.props.emails.length === 0 ?
                'display-none' : 'width-100pct padding-left-10px padding-y-10px border-y-gray-1px box-sizing bg-lightgray font-size-small on-hover-pointer'
        let senderArrow = this.props.clicked === 'from'? 
                !this.props.sortAsc? 'max-w-10px display-inline-block' : 'max-w-10px display-inline-block rotate'
                : 'display-none'
        let receiverArrow = this.props.clicked === 'to'? 
                !this.props.sortAsc? 'max-w-10px display-inline-block' : 'max-w-10px display-inline-block rotate'
                : 'display-none'
        let subjectArrow = this.props.clicked === 'subject'? 
                !this.props.sortAsc? 'max-w-10px display-inline-block' : 'max-w-10px display-inline-block rotate'
                : 'display-none'
        let dateArrow = this.props.clicked === 'date'? 
                !this.props.sortAsc? 'max-w-10px display-inline-block' : 'max-w-10px display-inline-block rotate'
                : 'display-none'
        let senderClass = this.props.clicked === 'from' ? 'font-weight-bold' : ' '
        let receiverClass = this.props.clicked === 'to' ? 'font-weight-bold' : ''
        let subjectClass = this.props.clicked === 'subject' ? 'font-weight-bold' : ''
        let dateClass = this.props.clicked === 'date' ? 'font-weight-bold' : ''
        return(
            <div className={topRowClass}>
                <span className='display-inline-block padding-right-5px width-15pct'>
                    <span className={senderClass} id='from' onClick={this.props.handleSort}>From </span>
                    <img className={senderArrow} src={this.props.arrow01} alt='' />
                </span> 
                <span className='border-left-1px padding-left-5px display-inline-block width-10pct'>
                    <span className={receiverClass} id='to' onClick={this.props.handleSort}>To </span>
                    <img className={receiverArrow} src={this.props.arrow01} alt='' />
                </span> 
                <span className='border-left-1px padding-left-5px display-inline-block width-20pct'>
                    <span className={subjectClass} id='subject' onClick={this.props.handleSort}>Subject </span>
                    <img className={subjectArrow} src={this.props.arrow01} alt='' />
                </span> 
                <span className='border-left-1px padding-left-5px display-inline-block width-15pct'>
                    <span className={dateClass} id='date' onClick={this.props.handleSort}>Date </span>
                    <img className={dateArrow} src={this.props.arrow01} alt='' />
                </span>
            </div>
        )
    }
}

export default TopRowMobile