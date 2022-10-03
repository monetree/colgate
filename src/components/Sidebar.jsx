//Global imports
import React from 'react'
import styled from 'styled-components'
import { FaFilter } from "react-icons/fa"

//File imports
import Logo from "../images/Logo.png"
import { SidebarMenu } from '../constants/DATA';

//Component imports
import SideBarMenuItem from './SideBarMenuItem'

const Container = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`

const LogoSection = styled.div`
    height: 150px;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`

const MainLogo = styled.img`
    object-fit: contain;
    height: 90%;
    width: 90%;
    position: relative;
`

const FilterSection = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 0px 5px;
`

const FilterContainer = styled.button`
    height: 35px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background-color: white;
`

const FilterText = styled.h4`
    font-weight: normal;
    font-weight: 18px;
    margin-left: 10px;
`

const MenuContainer = styled.div`
    width: 93%;
    position: relative;
    padding: 0px 1.5%;
    align-self: center;
`

const Sidebar = (props) => {

    const { toggleDrawer = () => { }, drawerOpen } = props;

    return (
        <Container>
            <LogoSection>
                <MainLogo src={Logo} />
            </LogoSection>

            <FilterSection>
                <FilterContainer onClick={() => toggleDrawer()}>
                    <FaFilter size={18} color={"blue"} />
                </FilterContainer>
                <FilterText>
                    Filters
                </FilterText>
            </FilterSection>
            {
                drawerOpen
                    ?
                    <MenuContainer>
                        {
                            SidebarMenu.map((item, i) => {
                                return <SideBarMenuItem
                                    key={`item=${item.id}`}
                                    data={item}
                                />
                            })
                        }
                    </MenuContainer>
                    :
                    null
            }
        </Container>
    )
}

export default Sidebar
