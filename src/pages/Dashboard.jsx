//Global imports
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronLeft } from "react-icons/fa"

//File imports
import { HeaderMenu } from '../constants/DATA';

//Component imports
import Sidebar from '../components/Sidebar';
import CustomHeader from '../components/CustomHeader';
import Home from './Home';
import Detect from './Detect';
import Locate from './Locate';

const Container = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`

const SideBarContainer = styled.div`
    height: 100vh;
    width:  ${props => props.width};
    position: relative;
    background-color: lightblue;
    border : 2px solid skyblue;
    padding-bottom: 150px;
`

const DashBoardContainer = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    background-color: white;
    overflow: hidden;
`

const HeaderContainer = styled.div`
    width: 100%;
    position: relative;
    border-bottom: 2px solid blue;
    padding-top: 10px;
`

const BackContainer = styled.div`
    width: 90%;
    margin: auto;
`

const BackButton = styled.button`
    height: 35px;
    padding: 0px 10px;
    border-radius: 20px;
    border: 1px solid blue;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    cursor: pointer;
`

const BackText = styled.h4`
    margin-left: 5px;
    font-weight: 600;
`

const NavSection = styled.div`
    width: 95%;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const ProceedButton = styled.div`
    height: 40px;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: skyblue;
    border-radius : 8px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    cursor: pointer;
`

const BodyContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    /* padding:  30px; */
    background-color: #F3F3F3;
`

const Dashboard = () => {

    const [navMenu, setNavMenu] = useState(HeaderMenu);
    const [activeTab, setActiveTab] = useState("HOME")

    const setNavLink = (nav_id) => {
        const NewArray = navMenu.map((item, i) => {
            if (item.id === nav_id) {
                item.isActive = true
                setActiveTab(item.title)
                return item
            }
            else {
                item.isActive = false
                return item
            }
        })
        setNavMenu(NewArray)
    }

    const renderDashboardContent = (activeTab) => {
        switch(activeTab) {
            case "DETECT" : {
                return <Detect />
            }

            case "HOME" : {
                return <Home />
            }

            case "LOCATE" : {
                return <Locate />
            }

            default : {
                return null 
            }
        }
    }

    const [drawerOpen, setDrawerOpen] = useState(true);

    return (
        <Container>

            <SideBarContainer drawerOpen={drawerOpen} width={drawerOpen ? "20%" : "3%"}>
                <Sidebar 
                toggleDrawer={() => { setDrawerOpen(!drawerOpen) }} 
                drawerOpen={drawerOpen}
                />
            </SideBarContainer>

            <DashBoardContainer width={drawerOpen ? "80%" : "97%"}>
                <HeaderContainer>
                    <BackContainer>
                        <BackButton>
                            <FaChevronLeft size={16} color={"blue"} />
                            <BackText>
                                Back
                            </BackText>
                        </BackButton>
                    </BackContainer>

                    <NavSection>
                        <CustomHeader data={navMenu} onClickTab={(nav_id) => { setNavLink(nav_id) }} />
                        <ProceedButton>
                            Proceed
                        </ProceedButton>
                    </NavSection>
                </HeaderContainer>

                <BodyContainer>
                    {renderDashboardContent(activeTab)}
                </BodyContainer>
            </DashBoardContainer>

        </Container>
    )
}

export default Dashboard
