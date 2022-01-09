import React, { Component } from 'react'
import Layout from '../components/Layout'
import vsc from '../img/vsc.png'
import react from '../img/react.png'
import php from '../img/php.png'
import js from '../img/js.png'

export default class Tools extends Component {
    render() {
        return (
            <>
            <Layout>
            <div >
                <h1 className="text-white text-xl text-center pt-8">TOOLS</h1>
            </div>

            <div className="pl-60 content-center">
                <img className="w-16 pt-8" src={js}/>
                <p className="ml-24 text-white"> JavaScript </p>
                <img className="w-24 pt-8" src={php}/>
                <p className="ml-24 text-white"> PHP </p>
                <img className="w-24 pt-8" src={react}/>
                <p className="ml-24 text-white"> ReactJS </p>
                <img className="w-24 pt-8" src={vsc}/>
                <p className="ml-24 text-white"> Visual Studio Code </p>
            </div>
            </Layout>
            
            </>
        )
    }
}
