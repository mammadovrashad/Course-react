import './style.css';
import '../../Page/style.css';
import styles from './style.module.css';
import {useState} from 'react';
import { FaHome,FaUsers,FaPhoneAlt,FaRegNewspaper,FaShoppingCart } from "react-icons/fa";


const Nav = () => {
const [menu,setMenu]=useState(["BAŞ SƏHİFƏ","HAQQIMIZDA","ƏLAQƏ","XƏBƏRLƏR","MAĞAZA"]);
  return (
      <nav>
            <div className={`${styles.justfyBtwn} menu`}>
                <div className="logo">
                    <img src={window.location.origin+'/img/logo/logo.png'} alt="" />
                </div>
                <div className="menu-list">
                    <ul>
                      <li><span className='icon'><FaHome/></span> <p>BAŞ SƏHİFƏ</p> </li>
                      <li><span className='icon'><FaUsers/></span> <p> HAQQIMIZDA</p> </li>
                      <li><span className='icon'><FaPhoneAlt/></span><p> ƏLAQƏ </p></li>
                      <li><span className='icon'><FaRegNewspaper/></span> <p>XƏBƏRLƏR</p> </li>
                      <li><span className='icon'><FaShoppingCart/></span> <p>MAĞAZA</p> </li>
                        <div className="animation" id="start-home"></div>
                    </ul>
                </div>
                <div className="sign-in">
                    <button className="sign-in-btn">DAXİL OL</button>
                    <button className="sign-in-btn">QEYDİYYAT</button>
                </div>
            </div>
        </nav>
  )
}

export default Nav;