import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CompoImg from '../src/components/CompoImg'
import MEF from '../src/components/MEF'
import Typical from 'react-typical';



class App extends React.Component{
  render(){
    return(
      <>
      
      <div className="App" style={{color: 'white', textAlign:'center',margin:'50px',fontFamily:'PT Sans'}}>
      <CompoImg/>
        <h1>Hi, I'm Corentyn.</h1>
        <p> I'm a{' '}

          <Typical 
            loop={Infinity}
            wrapper="b"
            steps = {[
              'Student 📚',
              1000,
              'Web Developper 💻',
              1000,
            ]}          
          
          
          
          />

        </p>
      </div>
      
      
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

