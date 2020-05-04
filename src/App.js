import React from 'react';
import './App.css';
import emails from './sampleEmail.js'
import icon_calender from './images/icon_calender.svg'
import icon_search from './images/icon_search.svg'
import icon_clip from './images/icon_clip.svg'
import icon_arrow01 from './images/icon_arrow01.svg'
import icon_arrow02 from './images/icon_arrow02.svg'
import icon_mail from './images/icon_mail_sp.svg'
import logo from './images/logo.png'
import TopRow from './components/TopRow.js'
import SearchBox from './components/SearchBox.js'
import TopRowMobile from './components/TopRowMobile.js'
import SearchBoxMobile from './components/SearchBoxMobile.js'
import EmailBody from './components/EmailBody.js'
import EmailBodyMobile from './components/EmailBodyMobile.js'
import ZeroImageIcon from './components/ZeroImageIcon.js'
import ResultsPanel from './components/ResultsPanel.js'
import ResultsPanelMobile from './components/ResultsPanelMobile.js'
import EmailRow from './components/EmailRow.js'
import EmailRowMobile from './components/EmailRowMobile.js'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      emails: emails,
      sortAsc: true,
      clicked: '',
      dateStart: '',
      dateEnd: '',
      slide: false,
      emailChecked: ['','','','']
    }
    this.countSelected = this.countSelected.bind(this)
    this.handleSort = this.handleSort.bind(this)
    this.handleDateStart = this.handleDateStart.bind(this)
    this.handleDateEnd = this.handleDateEnd.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSlide = this.handleSlide.bind(this)
    this.handleShowBody = this.handleShowBody.bind(this)
  }
  countSelected(){ // counts number of emails selected
    let count = 0
    for(let i=0; i<this.state.emailChecked.length; i++){
      if(this.state.emailChecked[i] !== ''){count++}
    }
    return count
  }
  handleDateStart(event){ // handles starting date for filtering emails
    this.setState({dateStart: event.target.value})
  }
  handleDateEnd(event){ // handles ending date for filtering emails
    this.setState({dateEnd: event.target.value})
  }
  handleShowBody(event){ // selects maximum 4 emails' body for view, will alert if more than 4 selected, or duplicate selection
    let emptyIndex = this.state.emailChecked.indexOf('')
    let tempArr = this.state.emailChecked
    
    if(emptyIndex === -1){alert('Maximum four emails selected already!')}
    if(emptyIndex >= 0){
      for(let i=0; i<this.state.emails.length; i++){
        if(this.state.emails[i].id === event.target.id){
          tempArr.indexOf(this.state.emails[i]) === -1 ?
          tempArr[emptyIndex] = this.state.emails[i] : alert('Email already selected!')
          break
        }
      }
      this.setState({emailChecked: tempArr})
    }
  }
  handleSlide(){ // handles showing or hiding the email body view panel
    this.state.slide === false ?
      this.setState({slide: !this.state.slide}) : this.setState({slide: !this.state.slide, emailChecked: ['','','','']})
    
  }
  handleSubmit(e){ // checks starting & ending dates entered, to see if they match YYYY/MM/DD format
    let regEx = /^(19[5-9][0-9]|20[0-4][0-9]|2050)[-/](0?[1-9]|1[0-2])[-/](0?[1-9]|[12][0-9]|3[01])$/
    if(!this.state.dateStart.match(regEx) || !this.state.dateEnd.match(regEx)){
      alert('Start/End date must be in YYYY/MM/DD format!')
    }
    else{
      this.setState({
        emails: emails.filter((email) => {
          return email.date >= this.state.dateStart && email.date <= this.state.dateEnd})
      })
    }
    e.preventDefault();
  }
  handleSort(event){ // sorts email alphabetically or numerically
    let compare1 = (a, b) => { // compare 1 and compare 2 sorts in opposite direction
      if(a[event.target.id] > b[event.target.id]){return -1}
      if(a[event.target.id] < b[event.target.id]){return 1}
      return 0
    }
    let compare2 = (a, b) => {
      if(a[event.target.id] < b[event.target.id]){return -1}
      if(a[event.target.id] > b[event.target.id]){return 1}
      return 0
    }
    if(!this.state.sortAsc){
      this.setState({
        emails: this.state.emails.sort(compare1),
        sortAsc: !this.state.sortAsc
      })
    }
    else{
      this.setState({
        emails: this.state.emails.sort(compare2),
        sortAsc: !this.state.sortAsc
      })
    }
    this.setState({clicked: event.target.id})
  }

  render(){

    // DeskTop view switches to Mobile view at 950px screen width
    return (
      <div className="App">
        <div className='desktop'>
          <SearchBox 
            calender={icon_calender} 
            search={icon_search}
            handleSubmit={this.handleSubmit}
            handleDateStart={this.handleDateStart}
            handleDateEnd={this.handleDateEnd}/>
          <ResultsPanel 
            emails={this.state.emails} 
            handleSlide={this.handleSlide} 
            countSelected={this.countSelected()}/>
          <ZeroImageIcon 
            emails={this.state.emails} 
            logo={logo}/>
          <TopRow 
            handleSort={this.handleSort}
            arrow01={icon_arrow01}
            clicked={this.state.clicked}
            sortAsc={this.state.sortAsc}
            emails={this.state.emails}/>
          {this.state.emails.map((email, index) => {
            return (
            <EmailRow 
              key={index} 
              icon_clip={icon_clip}
              email={email}
              clicked={this.state.clicked} 
              handleShowBody={this.handleShowBody}/>
            )
          })}
          <EmailBody 
            slide={this.state.slide} 
            emailChecked={this.state.emailChecked}/>
        </div>
        <div className='mobile'>
          <SearchBoxMobile 
            calender={icon_calender} 
            search={icon_search} 
            handleSubmit={this.handleSubmit}
            handleDateStart={this.handleDateStart} 
            handleDateEnd={this.handleDateEnd}/>
          <ResultsPanelMobile 
            emails={this.state.emails}
            handleSlide={this.handleSlide}
            countSelected={this.countSelected()}/>
          <ZeroImageIcon 
            emails={this.state.emails} 
            logo={logo}/>
          <TopRowMobile
            emails={this.state.emails}
            handleSort={this.handleSort} 
            arrow01={icon_arrow01} 
            clicked={this.state.clicked}
            sortAsc={this.state.sortAsc}/>
          {this.state.emails.map((email, index) => {
            return(
            <EmailRowMobile 
                key={index}
                email={email}
                clicked={this.state.clicked}
                icon_arrow02={icon_arrow02}
                icon_clip={icon_clip}
                icon_mail={icon_mail}
                handleShowBody={this.handleShowBody}/>
            )
          })}
          <EmailBodyMobile 
            slide={this.state.slide} 
            emailChecked={this.state.emailChecked} 
            handleSlide={this.handleSlide}/>
        </div>
      </div>
    );
  }
}

export default App;