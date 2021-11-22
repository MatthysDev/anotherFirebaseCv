import React, { Component } from 'react'

const Layout = ({children}) => {
    return(
        <div className="bg-gray-800 h-screen">
            {children}
        </div>
    );
};

export default Layout;
