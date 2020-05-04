import React from 'react';

class SearchBoxMobile extends React.Component {
    render(){
        return(
        <form className='border-1px border-radius-5px width-90pct margin-10px display-flex' onSubmit={this.props.handleSubmit}>
            <img 
                className='display-inline-block max-w-20px padding-left-10px padding-y-5px' 
                src={this.props.calender} alt='' />
            <input 
                className='width-30pct border-none text-align-center' type='text' 
                placeholder='YYYY/MM/DD' onChange={this.props.handleDateStart}/>
            <span className='display-inline-flex'>-</span>
            <input 
                className='width-30pct border-none text-align-center' type='text' 
                placeholder='YYYY/MM/DD' onChange={this.props.handleDateEnd}/>
            <input 
                type='image' src={this.props.search} alt='submit'
                className='display-inline-block max-w-20px border-left-1px border-radius-right padding-x-10px padding-y-5px bg-lightgray' />
        </form>
        )
    }
}

export default SearchBoxMobile