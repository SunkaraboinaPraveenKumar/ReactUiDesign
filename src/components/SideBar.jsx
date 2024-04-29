import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { GiConversation } from "react-icons/gi";
import { MdSubscriptions } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
const SideBar = ({bgColor,color}) => {
  return (
    <>
    <div className="side_bar_content" style={{
      backgroundColor:`${bgColor}`,
      color:`${color}`
    }}>
        <div className="top_content">
            <div className="items"><FaHome className='icons' /> Home</div>
            <div className="items"><IoIosNotifications className='icons' /> Notification</div>
            <div className="items"><FaShoppingBag className='icons' /> Shop</div>
            <div className="items"><GiConversation className='icons' /> Conversation</div>
            <div className="items"><FaWallet className='icons' /> Wallet</div>
            <div className="items"><MdSubscriptions className='icons' /> Subscription</div>
            <div className="items"><CgProfile className='icons' /> My Profile</div>
        </div>
        <div className="bottom_content items">
        <IoIosLogOut className='icons' /> Log Out
        </div>
    </div>
    </>
  )
}

export default SideBar