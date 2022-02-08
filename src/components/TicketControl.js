import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: 0
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: prevState.formVisibleOnPage + 1
    }));
  }
  handleClickBack = () => {
    this.setState(prevState => ({
      formVisibleOnPage: prevState.formVisibleOnPage - 1
    }));
  }
  handleClickReset = () => {
    this.setState(prevState => ({
      formVisibleOnPage: 0
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    let buttonBackText = null;
    let currentText = null;
    let buttonResetText = null;

    if (this.state.formVisibleOnPage === 0) {
      currentlyVisibleState = <TicketList />
      buttonText = "Next";
      buttonBackText = "New Ticket Form";
      buttonResetText = "I like turtles"
    } else if (this.state.formVisibleOnPage === 1) {
      currentlyVisibleState = <Page1 />
      buttonText = "next page";
      buttonBackText = "Back to Ticket List";
      buttonResetText = "Back to Ticket List";
    } else if (this.state.formVisibleOnPage === 2) {
      currentlyVisibleState = <Page2 />
      buttonText = "next page";
      buttonBackText = "back";
      buttonResetText = "Back to Ticket List";
    } else if ( this.state.formVisibleOnPage === 3) {
      currentlyVisibleState = <Page3 />
      buttonText = "next page";
      buttonBackText = "back";
      buttonResetText = "Back to Ticket List";
    } else {
      currentlyVisibleState = <NewTicketForm />
      buttonText= "Return to Ticket List"
      buttonBackText = "back"
      buttonResetText = "Return to Ticket List";
    } 
    const showNextButton = this.state.formVisibleOnPage === 0 || this.state.formVisibleOnPage === 1 || this.state.formVisibleOnPage === 2 || this.state.formVisibleOnPage === 3
    const showPrevButton = this.state.formVisibleOnPage === 1 || this.state.formVisibleOnPage === 2 || this.state.formVisibleOnPage === 3 || this.state.formVisibleOnPage === 4
    const showResetButton = this.state.formVisibleOnPage === 4
    
    return (
      <React.Fragment>
        {currentlyVisibleState}
          {showNextButton && <button onClick={this.handleClick}>{buttonText}</button>}
          {showPrevButton && <button onClick={this.handleClickBack}>{buttonBackText}</button>}
          {showResetButton && <button onClick={this.handleClickReset}>{buttonResetText}</button>}
      </React.Fragment>
    );
  }
}

export default TicketControl;