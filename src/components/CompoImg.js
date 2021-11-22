import React, {Component} from 'react';
import Gravatar from 'react-gravatar';
class CompoImg extends Component{
    render(){
        return(
            <>
            
            <Gravatar email="corentyn.masset@gmail.com" size={300} rating="pg" default="monsterid" className="CustomAvatar-image" 
            style={{borderRadius:'50%'}}
            />
            </>
        )
    }
}

export default CompoImg;