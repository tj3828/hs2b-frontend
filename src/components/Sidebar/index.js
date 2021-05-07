import React from 'react';
import styled, {css} from 'styled-components';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import {CloseIcon} from "./SidebarElements";

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({isOpen}) => (isOpen ? '0' : '-250px')};
  transition: 350ms;
  z-index: 10;
  ${({isOpen}) => {
    if(isOpen) {
      return css `box-shadow: 5px 5px 5px 0px #000000, 20px 7px 21px -1px rgba(0,0,0,0.43)`;  
    }
  }};

  &:after {
    color: #4B59F7;
    opacity: 1;
    display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
    position: absolute;
    content: 'Side-Bar';
    cursor: pointer;    
    top: 50%;
    margin-top: -50px;
    border-top: 5px solid;
    border-bottom: 5px solid;
    border-right: 5px solid;
    border-color: #4B59F7;
    border-radius: 0 10px 10px 0;
    padding: 20px 10px 20px 5px;
    right: -2.5em;
    font-size: 1.2em;
    writing-mode: vertical-rl;
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <SidebarNav isOpen={isOpen} onClick={toggle}>
          <SidebarWrap>
            <CloseIcon onClick={toggle} >
              <AiIcons.AiOutlineClose/>
            </CloseIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;