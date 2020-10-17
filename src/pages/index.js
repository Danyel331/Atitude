import React from 'react'
import {Helmet} from "react-helmet"
import './styles.css'

import Header from '../components/header'
import Body from '../components/body'
import Footer from '../components/footer'

const Index = () => {
    

    
    return (
        
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Atitude Ilha</title>
                <link rel="shortcut icon"  href="./assets/" type="image/png"/>
            </Helmet>
            <Header />
            <div>
                <Body />
            </div>
            <Footer />
        </div>
    )
}

export default Index;