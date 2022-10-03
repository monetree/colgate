//Global imports
import React from 'react'
import styled from 'styled-components'
import ComplainVolumeBarChart from '../components/charts/home/complain-volume-bar-chart'
import ComplainVolumeUpsidedownBarChart from '../components/charts/home/complain-volume-upside-down-bar-chart'

const Container = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`

const CardSection = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-top: 2%;
    padding-left: 2%;
    align-items: center;
`

const CardContainer = styled.div`
    height: 250px;
    width: 22.5%;
    position: relative;
    border: 1px solid lightgray;
    border-radius: 8px;
    display: flex;
    margin-right: 2%;
    flex-direction: column;
    background-color: white;
    box-shadow: 5px gray;
`

const Heading = styled.h2`
    font-weight: 700;
    color: #333;
    font-size: 24px;
    margin-left: 2%;
`

const IssueContainer = styled.div`
    width: 96%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    box-shadow: 5px gray;
    border: 1px solid lightgray;
    border-radius: 8px;
    margin-left: 2%;
`

const IssueSection = styled.div`
    width: 50%;
    position: relative;
    padding : 20px;
`

const SubHeading = styled.span`
        font-size: 16px;
        color: gray;
        font-weight: 500;
`

const DescriptionContainer = styled.div`
        border: 1px solid lightgray;
        border-left: 5px solid ${props => props.borderColor };
        border-radius: 4px;
        font-size: 14px;
        padding: 10px;
        margin-top: 10px;
        line-height: 20px;
`

const Description = styled.span`
    
`

const Home = () => {
    return (
        <Container>
            <CardSection>
                <CardContainer>
                    <ComplainVolumeBarChart id="complain-volume-bar-chart" />
                </CardContainer>
                <CardContainer>
                    <ComplainVolumeUpsidedownBarChart id="complain-volume-extremly-low-bar-chart" />
                </CardContainer>
                <CardContainer>
                    <ComplainVolumeUpsidedownBarChart id="complain-per-million-bar-chart" />
                </CardContainer>
                <CardContainer>
                    <ComplainVolumeUpsidedownBarChart id="project-value-lost-bar-chart" />
                </CardContainer>
            </CardSection>

            <Heading>
                Intelligence as of 20th January 2022
            </Heading>

            <IssueContainer>
                <IssueSection>
                    <SubHeading>Issues</SubHeading>

                    <DescriptionContainer borderColor="red">
                        <Description>
                            "Branded Cards"  has increased over the previous day by 135 complaints with cumulative increase of 396 complaints of 5 days of past 7 days.
                        </Description>
                    </DescriptionContainer>

                    <DescriptionContainer borderColor="red">
                        <Description>
                            "Branded Cards"  has increased over the previous day by 135 complaints with cumulative increase of 396 complaints of 5 days of past 7 days.
                        </Description>
                    </DescriptionContainer>

                    <DescriptionContainer borderColor="red">
                        <Description>
                            "Branded Cards"  has increased over the previous day by 135 complaints with cumulative increase of 396 complaints of 5 days of past 7 days.
                        </Description>
                    </DescriptionContainer>
                </IssueSection>

                <IssueSection>
                    <SubHeading>Positive Trends</SubHeading>

                    <DescriptionContainer borderColor="green">
                        <Description>
                            "Branded Cards"  has increased over the previous day by 135 complaints with cumulative increase of 396 complaints of 5 days of past 7 days.
                        </Description>
                    </DescriptionContainer>

                    <DescriptionContainer borderColor="green">
                        <Description>
                            "Branded Cards"  has increased over the previous day by 135 complaints with cumulative increase of 396 complaints of 5 days of past 7 days.
                        </Description>
                    </DescriptionContainer>

                    <DescriptionContainer borderColor="green">
                        <Description>
                            "Branded Cards"  has increased over the previous day by 135 complaints with cumulative increase of 396 complaints of 5 days of past 7 days.
                        </Description>
                    </DescriptionContainer>
                    
                </IssueSection>
            </IssueContainer>
        </Container>
    )
}

export default Home
