import React from 'react'

class ResultsPanelMobile extends React.Component {
    render(){
        return(
            <div className='margin-10px'>
                <p className='margin-0 font-size-small'>Results: <span className='font-weight-bold'>{this.props.emails.length} </span>email(s)</p>
                <p className='margin-0 font-size-small'>Email Selected: <span className='font-weight-bold'>{this.props.countSelected}</span> (click sender email to select)</p>
                <button onClick={this.props.handleSlide}>Show Email Selected</button>
            </div>
        )
    }
}

export default ResultsPanelMobile