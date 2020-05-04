import React from 'react';

class TopRow extends React.Component {
    render(){
        let topRowClass = this.props.emails.length === 0 ? 'display-none' : 'width-100pct box-sizing padding-left-10px padding-y-10px border-y-gray-1px display-flex bg-lightgray'
        let senderArrow = this.props.clicked === 'from'? 
                !this.props.sortAsc? 'max-w-15px display-inline-block' : 'max-w-15px display-inline-block rotate'
                : 'display-none'
        let receiverArrow = this.props.clicked === 'to'? 
                !this.props.sortAsc? 'max-w-15px display-inline-block' : 'max-w-15px display-inline-block rotate'
                : 'display-none'
        let subjectArrow = this.props.clicked === 'subject'? 
                !this.props.sortAsc? 'max-w-15px display-inline-block' : 'max-w-15px display-inline-block rotate'
                : 'display-none'
        let dateArrow = this.props.clicked === 'date'? 
                !this.props.sortAsc? 'max-w-15px display-inline-block' : 'max-w-15px display-inline-block rotate'
                : 'display-none'
        let senderClass = this.props.clicked === 'from' ? 'font-weight-bold  on-hover-pointer' : ' on-hover-pointer'
        let receiverClass = this.props.clicked === 'to' ? 'font-weight-bold on-hover-pointer' : 'on-hover-pointer'
        let subjectClass = this.props.clicked === 'subject' ? 'font-weight-bold on-hover-pointer' : 'on-hover-pointer'
        let dateClass = this.props.clicked === 'date' ? 'font-weight-bold on-hover-pointer' : 'on-hover-pointer'
        return(
            <div className={topRowClass}>
                <span className='display-inline-block width-20pct'>
                    <span className={senderClass} id='from' onClick={this.props.handleSort}>From:</span>
                    <img className={senderArrow} src={this.props.arrow01} alt='' />
                </span> 
                <span className='display-inline-block width-30pct' >
                    <span className={receiverClass} id='to' onClick={this.props.handleSort}>To: </span>
                    <img className={receiverArrow} src={this.props.arrow01} alt='' />
                </span> 
                <span className='display-inline-block width-25pct'>
                    <span className={subjectClass} id='subject' onClick={this.props.handleSort}>Subject: </span> 
                    <img className={subjectArrow} src={this.props.arrow01} alt='' />
                </span> 
                <span className='display-inline-block width-10pct' >
                    <span className={dateClass} id='date' onClick={this.props.handleSort}>Date: </span>
                    <img className={dateArrow} src={this.props.arrow01} alt='' />
                </span>
            </div>
        )
    }
}

export default TopRow