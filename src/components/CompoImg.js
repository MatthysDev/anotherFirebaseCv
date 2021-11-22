import React, {Component} from 'react';
import Gravatar from 'react-gravatar';
class CompoImg extends Component{
    render(){
        return(
            <>
            
            <Gravatar email="corentyn.masset@gmail.com" size={300} rating="pg" default="monsterid" className="CustomAvatar-image m-auto rounded-full" 
            
            />
            </>
        )
    }
}

export default CompoImg;