import React, { Component } from 'react'

 class Button extends Component {
    render() {
        return (
            <div>
                <button className="text-center text-xl border-yellow-500 border-2 pl-4 pr-4 pt-2 pb-2 text-white rounded-md hover:bg-yellow-500">
                    En savoir plus
                </button>
            </div>
        )
    }
}

export default Button