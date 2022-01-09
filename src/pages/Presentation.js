import React, { Component } from 'react'
import Layout from '../components/Layout'
import iut from '../img/iut.png'

 class Presentation extends Component {
    render() {
        return (
            <>
            <Layout>
            <div >
                
                <p className="text-white text-xl text-center px-64 pt-8 ">
                    Hello, my name is Corentyn Masset. Currently I'm studying in Calais at the IUT for Web development and mobile development.
                    <img className="place-content-center" src={iut}/>
                </p>

                <p className="text-white text-l text-center px-64 pt-4">
                    For this year I'm in a work-study program for the Groupe Baron. During this year at the IUT, I did a lot of projet like a mobile APP in Flutter, or Blog in Symfony.
                </p>
            </div>
            </Layout>
            
            </>
        )
    }
}

export default Presentation