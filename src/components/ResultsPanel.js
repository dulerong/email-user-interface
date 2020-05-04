import React from 'react'

class ResultsPanel extends React.Component {
    render(){
        return(
            <div>
                <p>Results: <span className='font-weight-bold'>{this.props.emails.length}</span> email(s)  <button onClick={this.props.handleSlide}>Show/Hide selected email</button></p>
                <p>Email Selected: <span className='font-weight-bold'>{this.props.countSelected}</span> (click sender email to select)</p>
            </div>
        )
    }
}

export default ResultsPanel