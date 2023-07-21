import React from 'react';
import './Calculator.css';
import OneLine from './components/AddsectionOne';
import Addsection from './components/AddsectionTwu.js';
import SectionThree from './components/SectionThree.js';
import Final from './components/UltimoComponent.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      changed: false,
    };
  }

  handleButtonClick = (num) => {
  this.setState((prevState) => ({
    text: prevState.text + num,
    changed: true,
  }));
};


  handleCleanClick = () => {
    this.setState({
      text: "",
      changed: false
    });
  }

  handleCalculateClick = () => {
    const { text } = this.state;

    if (text) {
      try {
        const result = eval(text); 
        this.setState({
          text: result,
          changed: true
        });
      } catch (error) {
        console.error("Erro ao calcular:", error);
      }
    }
  }

  handleInputChange = (event) => {
    this.setState({
      text: event.target.value,
      changed: false
    });
  }
  
  render() {
    const { text, changed } = this.state;

    return (
      <div className="calc">
        <div>
          <h1>Calculator - React</h1>
            <div className='numbers'>
              <div className='resultado'>
                {changed && <p>{text}</p>}
                <input type="text" value={text} 
                onChange={this.handleInputChange} />

                  <button className='ac' onClick={() => this.handleCleanClick()}>AC</button>
              </div>

              <OneLine handleButtonClick={this.handleButtonClick} />            
              <Addsection handleButtonClick={this.handleButtonClick} />

              <SectionThree handleButtonClick={this.handleButtonClick} />
              <Final handleButtonClick={this.handleButtonClick} handleCalculateClick={this.handleCalculateClick}/>

            </div>
        </div>
      </div>
    );
  }
}

export default App;
