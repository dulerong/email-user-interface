import React from 'react';

class SearchBox extends React.Component {
    render(){
        return(
            <form 
                className='box-sizing border-1px border-radius-5px width-300px display-flex overflow-hidden' 
                onSubmit={this.props.handleSubmit}>
                <img 
                    className='display-inline-block max-w-20px padding-x-10px padding-y-5px' 
                    src={this.props.calender} alt='' />
                <input 
                    className='width-30pct border-none text-align-center' 
                    type='text' 
                    placeholder='YYYY/MM/DD' 
                    onChange={this.props.handleDateStart}/>
                <span className='display-inline-flex '>-</span>
                <input 
                    className='width-30pct border-none text-align-center' 
                    type='text' 
                    placeholder='YYYY/MM/DD' 
                    onChange={this.props.handleDateEnd}/>
                <input 
                    type='image' 
                    src={this.props.search} alt='submit'
                    className='display-inline-block max-w-20px border-left-1px border-radius-right bg-lightgray padding-x-10px padding-y-5px'/>
            </form>
        )
    }
}

export default SearchBox 