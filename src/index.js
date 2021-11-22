import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CompoImg from '../src/components/CompoImg'
import Typical from 'react-typical';
import Button from '../src/components/Button'
import Layout from '../src/components/Layout';



class App extends React.Component{
  render(){
    return(
      <>
      <Layout>
      <div className="App" style={{color: 'black', textAlign:'center',fontFamily:'PT Sans'}}>
      
      <CompoImg/>
        <h1 className = "text-white">Hi, I'm Corentyn.</h1>
        <p className ="text-white"> I'm a{' '}

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
        <Button/>
        
      </div>
      </Layout>
      
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

