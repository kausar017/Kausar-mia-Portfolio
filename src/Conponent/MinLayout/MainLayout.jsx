import React from 'react'
import Header from '../shear/Header/Header'
import Footer from '../shear/Footer/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <>
            <div>
                {/* navbar */}
                <Header></Header>
                <div className='min-h-[calc(100vh-100px)]'>
                    <Outlet></Outlet>
                </div>
                {/* Footer */}
                <Footer></Footer>
            </div>
        </>
    )
}

export default MainLayout