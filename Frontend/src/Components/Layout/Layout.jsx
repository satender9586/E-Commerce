import React from 'react'
import Navbaar from '../Header/Navbaar'
import Footer from '../Footer/Footer'

const Layout = (props) => {
    return (
        <div>
            <Navbaar />
            <div style={{ padding: "0 5%" }} >
                {
                    props.children
                }
            </div>


            <Footer />
        </div >
    )
}

export default Layout
