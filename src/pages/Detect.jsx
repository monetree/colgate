//Global imports
import React from 'react'
import styled from 'styled-components'
import BrandCardsBubbleChart from '../components/charts/home/brand-cards-bubble-chart'
import BrandCardsLineChart from '../components/charts/home/brand-cards-line-chart'
import BrandCardsTreeMap from '../components/charts/home/brand-cards-tree.map'

const Container = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`

const RowContainer = styled.div`
    width: 96%;
    display: flex;
    padding-top: 2%;
    margin-left: 2%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`

const LeftContainer = styled.div`
    width: 50%;
`

const RightContainer = styled.div`
    width: 45%;
    height: 585px;
    background-color: white;
    box-shadow: 5px gray;
    border: 1px solid lightgray;
    border-radius: 8px;
    padding: 20px;
`

const ResultContainer = styled.div`
    width: 100%;
    height: 280px;
    position: relative;
    background-color: white;
    box-shadow: 5px gray;
    border: 1px solid lightgray;
    border-radius: 8px;
`

const Heading = styled.h4`
    font-weight: 600;
    color: #333;
    padding-left: 2%;
    margin-top: 2%;
`

const TopTab = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    margin-inline: 2%;
    
`
const TopTabItem = styled.div`
    width: 30%;
    height: 35px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightgray;
    border-radius: 20px;
`

const TabTitle = styled.span`
    font-size: 14px;
`

const LeftBottomContainer = styled.div`
     width: 100%;
    margin-top: 4%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const CardSection = styled.div`
    width: 100%;
    position: relative;
    height:280px;
    background-color: white;
    box-shadow: 5px gray;
    border: 1px solid lightgray;
    border-radius: 8px;
    padding: 20px;
    /* margin-left: ${props => props.left}px; */
`

const Detect = () => {
    return (
        <Container>
            <RowContainer width={"100%"}>
                <LeftContainer>
                    <ResultContainer>
                        <Heading>Call Reasons Deep-Dive</Heading>
                        {/* <TopTab>
                            <TopTabItem>
                                <TabTitle>
                                    Primary Reasons
                                </TabTitle>
                            </TopTabItem>

                            <TopTabItem>
                                <TabTitle>
                                    Secondary Reasons
                                </TabTitle>
                            </TopTabItem>

                            <TopTabItem>
                                <TabTitle>
                                    Tertiary Reasons
                                </TabTitle>
                            </TopTabItem>
                        </TopTab> */}

                        <BrandCardsLineChart id="brand-cards-line-chart" />

                    </ResultContainer>

                    <LeftBottomContainer>
                        <CardSection>
                            <BrandCardsBubbleChart id="brand-card-bubble-chart" />
                        </CardSection>

                  
                    </LeftBottomContainer>
                </LeftContainer>
                <RightContainer>
                    <Heading>Key themes for "Branded Cards" Segment</Heading>
                    <BrandCardsTreeMap id="brand-cards-treemap" />
                </RightContainer>
            </RowContainer>

        </Container>
    )
}

export default Detect
