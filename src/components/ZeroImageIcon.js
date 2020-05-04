import React from 'react';

class ZeroImageIcon extends React.Component {
    render(){
        let imgClass = this.props.emails.length === 0 ? 'max-w-250px position-absolute left-50 top-50 translate' : 'display-none'

        return(
            <img className={imgClass} src={this.props.logo} alt='' />
        )
    }
}

export default ZeroImageIcon