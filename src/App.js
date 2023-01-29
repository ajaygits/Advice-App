import React from "react";
import './App.css';
import axios from 'axios';


class App extends React.Component {

  state = { advice: '' };

  componentDidMount() {
    // console.log("mount");
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;   //destructuring
        // console.log(advice);
        // console.log(response.data.slip.advice);

        this.setState({ advice });
        // this.setState({advice:advice});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {

    // console.log("render");
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}><span>Give Me A Advice!</span></button>
        </div>

      </div>

    );
  }
}

export default App;