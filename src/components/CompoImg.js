import React, {Component} from 'react';
import Gravatar from 'react-gravatar';
class CompoImg extends Component{
    render(){
        return(
            <>
            
            <Gravatar email="corentyn.masset@gmail.com" size={250} rating="pg" default="monsterid" className="CustomAvatar-image m-auto rounded-full border-2 border-yellow-500" 
            
            />
            </>
        )
    }
}

export default CompoImg;