import React, { useState } from 'react'

function Float() {

    const[isFloat, setIsFloat] = useState(false)

    const floating = ()=> {
        if(window.scrollY >= 100){
            setIsFloat(true)
        } else{
            setIsFloat(false)
        }
    }

    const scrollToTop = ()=> window.scrollTo({top:0, behavior:'smooth'})

    window.addEventListener('scroll', floating)

    return (
        <div onClick={scrollToTop} className={isFloat ? "float open" : "float"}>
      <i className="far fa-arrow-alt-circle-up"></i>
      </div>
    )
}

export default Float
