import React, { useState } from 'react'
import {NavLink, Link} from 'react-router-dom'


function Nav() {

    const [isMenu, setMenu] = useState(false)

    const closeMenu = () => setMenu(false)
    const[navScroll, setNavScroll] = useState(false) 

    const nav_on_scroll = ()=>{
        if(window.scrollY >= 50){
            setNavScroll(true)
        } else{
            setNavScroll(false)
        }
    }

    window.addEventListener('scroll', nav_on_scroll)

    return (
        <>
        
        <div className="nav">
            <div className="nav_inner">
            <div className="phone">
                <p><span><a href="tel:08167424880" alt="call Space Innovation Tech Hub">08025363537</a></span><span className="bar_line">|</span><span ><a href="mailto:okekesylvaline.com?subject=From Space Innovation Tech Hub websit" alt="Email Space Innovation Tech Hub">admin@spaceinnovationTH.com</a></span></p>
            </div>
            
            <div className={navScroll ? "main_nav open" : "main_nav"}>
                <div className="logo">
                    <h1><Link to="/">Space Innovation</Link></h1>
                </div>
                <div onClick={()=>setMenu(!isMenu)} className={isMenu ? "hamburger move_right" : "hamburger"}>
                    {
                        isMenu ?  
                        <i className="fas fa-times"></i> :
                        <div className="line"></div>
                    }
                </div>
                {
                    isMenu && <div className="menu">
                        <ul>
                    <li className="nav_dropdown">Resource

                    <ul className= "nav_dropdown_open">
                            <li><NavLink to="/learning-resource-centre">Learning Resource Centre</NavLink></li>
                            <li><NavLink to="/document-resource-centre">Document Resource Centre</NavLink></li>
                        </ul>
                    </li>
                    
                    <li>
                        <NavLink to="/co-working">Co-working</NavLink>
                    </li>
                    <li>
                        <NavLink to="/our-innovations">Our Innovations </NavLink>
                    </li>
                    <li className="">
                        <NavLink to="/events">Events</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About </NavLink>
                    </li>
                    <li className="contact">
                        <NavLink to="/contact">Contact us</NavLink>
                    </li>
                </ul>
                    </div>
                }
                
            </div>
            </div>

            <div className="nav_mobile">
            <div className="phone">
            <p><span><a href="tel:08167424880" alt="call Space Innovation Tech Hub"><i className="fas fa-phone"></i></a></span><span className="bar_line">|</span><span ><a href="mailto:okekesylvaline.com?subject=From Space Innovation Tech Hub websit" alt="Email Space Innovation Tech Hub"><i className="far fa-envelope"></i></a></span></p>
            </div>
            
            <div className={navScroll ? "main_nav open" : "main_nav"}>
                <div className="logo">
                <h1><Link to="/">Space Innovation</Link></h1>
                </div>
                <div onClick={()=>setMenu(!isMenu)} className={isMenu ? "hamburger move_right" : "hamburger"}>
                    {
                        isMenu ?  
                        <i className="fas fa-times"></i> :
                        <div className="line"></div>
                    }
                </div>
                {
                    isMenu && <div className="menu">
                    <ul className={navScroll ? "ul open" : " ul"}>
                    <li onClick={closeMenu}><NavLink to="/learning-resource-centre">Learning Resource Centre</NavLink></li>
                    <li onClick={closeMenu}><NavLink to="/document-resource-centre">Document Resource Centre</NavLink></li>
                    
                    <li onClick={closeMenu}>
                        <NavLink to="/co-working">Co-working</NavLink>
                    </li>
                    <li onClick={closeMenu}>
                        <NavLink to="/our-innovations">Our Innovations </NavLink>
                    </li>
                    <li onClick={closeMenu} className="">
                        <NavLink to="/events">Events</NavLink>
                    </li>
                    <li onClick={closeMenu}>
                        <NavLink to="/about">About </NavLink>
                    </li>
                    <li onClick={closeMenu} className="contact">
                        <NavLink to="/contact">Contact us</NavLink>
                    </li>
                </ul>
                    </div>
                }
                
            </div>
            </div>

        </div>

        
        </>
    )
}

export default Nav
