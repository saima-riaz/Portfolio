import React, { useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import { changeTabActive } from '../redux/actions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const NavBar = ({activeTab}) => {
    const dispatch = useDispatch();
    const [linkNav] = useState(['home', 'about Me', 'projects', 'contacts']);
    const [statusNav, changeStatusNav] = useState(null);
    
    const toggleNav = () => {
        changeStatusNav(statusNav === null ? 'active' : null);
    };

    const changeTab = (value) => {
        dispatch(changeTabActive(value));
        
        // Find the corresponding section by ID and scroll to it
        const section = document.querySelector(`.${value.toLowerCase().replace(" ", "-")}`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    
        toggleNav();
    };
    
    return (
        <header>
            <div className="logo">Portfolio</div>
            <nav className={statusNav}>
                {linkNav.map(value => (
                <span 
                    key={value} 
                    className={activeTab === value ? 'active': ''}
                    onClick={()=>changeTab(value)}>{value}</span>
                ))}
            </nav>
            <div className="icon-bar" onClick={toggleNav}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </header>
    )
}
const mapStateToProps = (state) => ({
    activeTab: state.activeTab
  });
  
export default connect(mapStateToProps, { changeTabActive })(NavBar);