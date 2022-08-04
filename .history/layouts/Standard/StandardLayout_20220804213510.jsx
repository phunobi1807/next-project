import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const StandardLayout = ({children}) => {
  return (
    <div className="trang__chu">
        <Header />
            {children}
        <Footer />
    </div>
  )
}

export default StandardLayout