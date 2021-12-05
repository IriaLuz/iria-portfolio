import React from "react";
import Header from './header';
import Footer from './footer';
import * as layoutStyles from './layout.module.scss';

const Layout =(props) => {
    return (
        <> 
            <Header/>
            <div className={layoutStyles.container}>
                <div className={layoutStyles.content}>
                    {props.children} 
                </div >
            </div>
            <Footer/>
        </>
        
    )
}
export default Layout;