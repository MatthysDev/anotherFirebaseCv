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

            <div className="flex justify-evenly pt-32">
                <div>
                <img className="w-16" src={js}/>
                <p className='text-white text-center mt-2'>JavaScript</p>
                </div>

                <div>
                <img className="w-24" src={vsc}/>
                <p className='text-white text-center mt-2'>Visual Studio Code</p>
                </div>

                <div>
                <img className="w-24" src={php}/>
                <p className='text-white text-center mt-2'>PHP</p>
                </div>

                <div>
                <img className="w-24" src={react}/>
                <p className='text-white text-center mt-2'>ReactJS</p>
                </div>
            </div>

            <div>
                <p> Projects </p>
            </div>
            </Layout>
            
            </>
        )
    }
}
