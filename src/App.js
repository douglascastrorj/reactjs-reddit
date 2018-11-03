import React, { Component } from 'react';
import './App.css';

import TopMenu from './components/top-menu';
import List from './components/list';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        {
          title: 'HOT',
          type: 'hot'
        },
        {
          title: 'NEWS',
          type: 'new'
        },
        {
          title: 'RISING',
          type: 'rising'
        }
      ],

      selected: {
        title: 'HOT',
        type: 'hot'
      },

      isLoading: true,
      list: [],
      exibirAte: 10
    }
  }

  select = (button) => {
    this.setState({
      selected: button
    });

    this.fetchPosts(this.state.selected.type);
  }


  fetchPosts = (filter) => {

    // ?limit=1000
    this.setState({
      list: [],
      isLoading: true
    })

    // https://www.reddit.com/r/reactjs/new.json
    fetch(`https://www.reddit.com/r/reactjs/${filter}.json?limit=1000`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          list: json.data.children,
          isLoading: false
        })

      }).catch(() => {
        this.setState({
          isLoading: false
        })
        alert('erro')
      })

  }

  componentDidMount() {
    this.fetchPosts(this.state.selected.type);
  }


  renderLoading = () => (
    <div className="loader">
      <div className="inner one"></div>
      <div className="inner two"></div>
      <div className="inner three"></div>
    </div>
  )

  renderList = () => (
    this.state.isLoading ?
      this.renderLoading()
      :
      <div>
        <List
          items={this.state.list.slice(0, this.state.exibirAte)}
        />
        <div
          className="ver-mais"
          onClick={this.loadMore}
        >
          <p> +  Ver mais </p>
        </div>
      </div>


  )

  loadMore = () => {
    this.setState({
      exibirAte: this.state.exibirAte + 10
    })
  }


  render() {
    return (
      <div className="App">

        <div className="header">
          <h3>
            REACT<span className="js-title">JS</span>
          </h3>
        </div>

        <div className="app-wrapper">

          <TopMenu
            buttons={this.state.buttons}
            selected={this.state.selected}
            select={this.select}
          />

          {this.renderList()}



        </div>


      </div>
    );
  }
}

export default App;
