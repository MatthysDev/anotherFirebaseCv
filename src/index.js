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
      <div className="App pt-32" style={{color: 'black', textAlign:'center',fontFamily:'PT Sans'}}>
      
      <CompoImg/>
        <h1 className = "text-white pt-8 text-2xl">Hi, I'm Corentyn</h1>
        <p className ="text-yellow-500 mb-8 text-xl"> I'm {' '}
        
          <Typical 
            loop={Infinity}
            wrapper="b"
            steps = {[
              'a Student 📚',
              1000,
              'in a work-study program 💻',
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

