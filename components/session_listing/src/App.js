import React, { Component } from 'react';
import 'pretty-checkbox/dist/pretty-checkbox.min.css';
import logo from './logo.svg';
import './App.css';
import design from './icons/design.svg';

const trackIcons = {
  beginner: require('./icons/design.svg'),
};

const Icon = (props) =>
  <img src={require(`./icons/${props.track}.svg`)} />;

const Difficulty = (props) =>
  <img src={require(`./icons/${props.difficulty}.svg`)} />;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      trackFilter: {
        design: false,
      },
      difficultyFilter: ''
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({trackFilter: {design:value}})
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="block__header">
          <h2 className="App-title">Proposed Sessions</h2>
        </header>
        <div className="filter__block">
          <div className="pretty p-svg p-toggle p-plain">
            <input name="design"
                   type="checkbox"
                   checked={this.state.trackFilter.design}
                   onChange={this.handleToggle} />
            <div className="state p-on">
              <img className="svg toggled" src={require(`./icons/design.svg`)} />
                <label></label>
            </div>
            <div className="state p-off">
              <img className="svg" src={require(`./icons/design.svg`)} />
              <label></label>
            </div>
          </div>
          {/*<ul className="track__filters filters">*/}
            {/*<li key="design" className="filter"><button value="design" onClick={this.handleToggle}><img src={require(`./icons/design.svg`)} /></button></li>*/}
            {/*/!*<li key="modules" className="filter"><button onClick={this.applyFilter}><img src={require(`./icons/modules.svg`)} /></button></li>*!/*/}
            {/*/!*<li key="theming" className="filter"><button onClick={this.applyFilter}><img src={require(`./icons/theming.svg`)} /></button></li>*!/*/}
            {/*/!*<li key="design2" className="filter"><button onClick={this.applyFilter}><img src={require(`./icons/design.svg`)} /></button></li>*!/*/}
            {/*/!*<li key="modules2" className="filter"><button onClick={this.applyFilter}><img src={require(`./icons/modules.svg`)} /></button></li>*!/*/}
          {/*</ul>*/}
          <ul className="difficulty__filters filters">
            <li className="filter"><a ><img src={require(`./icons/beginner.svg`)} /></a></li>
            <li className="filter"><a ><img src={require(`./icons/intermediate.svg`)} /></a></li>
            <li className="filter"><a ><img src={require(`./icons/expert.svg`)} /></a></li>
          </ul>
        </div>
        <div className="list">
          <ul className="list-items">
            <li className="list-item">
              <Icon track="design" />
              <Difficulty difficulty="intermediate" />
              <h3>Suspendisse eleifend, leo eget.</h3>
            </li>
            <li className="list-item">
              <Icon track="modules" />
              <Difficulty difficulty="beginner" />
              <h3>Nunc at scelerisque nulla. Morbi vel.</h3>
            </li>
            <li className="list-item">
              <Icon track="theming" />
              <Difficulty difficulty="expert" />
              <h3>Nunc at scelerisque nulla. Morbi vel.</h3>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
