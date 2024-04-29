import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { MdToggleOff } from "react-icons/md";
import { MdToggleOn } from "react-icons/md";
const NavBar = ({ bgColor, color, toggleButton,toggle }) => {
    const bgcolor=color==='black'?'#cbc5c5':'black';
    return (
        <div className='sticky-top fixed-top'>
            <div className="nav_bar"
            style={{
                backgroundColor:`${bgcolor}`
            }}>
                <div className="logo"
                    style={{
                        backgroundColor: `${bgColor}`,
                        color: `${color}`,
                    }}>
                    WDM
                    <div onClick={toggleButton}>
                        {toggle?
                            (
                                <MdToggleOn />
                            )
                            :
                            (
                                <MdToggleOff />
                            )
                        }

                    </div>
                </div>
                <div className="search"
                    style={{
                        backgroundColor: `${bgColor}`,
                        color: `${color}`,
                    }}>
                    <div className="left">
                        <FaSearch />
                        Search here....
                    </div>
                    <div className="right">
                        <IoFilterSharp />
                        Filters
                    </div>
                </div>
                <div className="seller"
                    style={{
                        backgroundColor: `${bgColor}`,
                        color: `${color}`,
                    }}>
                    Become Seller</div>
            </div>
        </div>
    )
}

export default NavBar