import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

class SideBar extends Component{
    render(){
      return(
        <SideNav>
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
            <FontAwesomeIcon icon={faHome} size='sm'/>
            </NavIcon>
            <NavText>
                Home
            </NavText>          
          </NavItem>
          </SideNav.Nav>
        </SideNav>
      );
    }
}

export default SideBar;