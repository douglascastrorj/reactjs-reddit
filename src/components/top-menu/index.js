import React, { Component } from 'react';

import './menu.css';

class TopMenu extends Component {

  renderButtons(buttons){
    return buttons.map( button => (
      <div key={button.title} 
           className={"menu-button " + (this.props.selected.title === button.title ? 'selected' : null)}  
           onClick={() => this.props.select(button)}
      >
        <p  className="text" >
          { button.title } 
        </p>
      </div>
    ))
  }

  render() {
    return (
      <div className="container">
        {this.renderButtons(this.props.buttons)}
      </div>
    );
  }
}

export default TopMenu;
