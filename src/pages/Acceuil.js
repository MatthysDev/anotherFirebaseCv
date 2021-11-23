import React, { Component } from 'react'
import CompoImg from '../components/CompoImg';
import Typical from 'react-typical';
import Layout from '../components/Layout'
import Navigation from '../components/Navigation';
import Presentation from './Presentation';
import Tools from './Tools';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class Acceuil extends Component {
    render() {
        return (
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
            
        
        
      </div>
      
      </Layout>
      
      </>
        )
    }
}
