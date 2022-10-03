//Global imports
import React, { useState } from 'react'
import styled from 'styled-components';

//Component imports
import { HeaderMenu } from '../constants/DATA'

const LinkContainer = styled.button`
    height: 50px;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: none;
    background-color: transparent;
    cursor: pointer;
`

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 10px;
`

const LinkText = styled.h3`
    font-weight: 400;
    color: #333;
    font-size: 16px;
`

const BottomContainer = styled.div`
    height: 5px;
    width: 100px;
    position: relative;
    background-color: blue;
    border-radius: 2.5px;
    position: absolute;
    bottom: 0;
`

const CustomHeader = (props) => {
  const { data, onClickTab = () => { } } = props ;

  return (
    <NavContainer>
      {
        data.map((item, i) => {
          return <LinkContainer onClick={() => onClickTab(item.id)} key={`item=${item.id}`}>
            <LinkText>
              {item.title}
            </LinkText>
            {
              item.isActive
                ?
                <BottomContainer />
                :
                null
            }
          </LinkContainer>
        })
      }
    </NavContainer>
  )
}

export default CustomHeader
