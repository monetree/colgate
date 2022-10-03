//Global imports
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    padding-top: 2%;
`
const TopSection = styled.div`
    width: 94%;
    height: 300px;
    border: 1px solid lightgray;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 5px gray;
    padding-top : 1.5%;
    margin-left: 2%;
    padding-left: 2%;
`

const Heading = styled.span`
    font-weight: 700;
    color: #333;
    font-size: 16px;
`

const BottomSection = styled.div`
     width: 96%;
    height: 300px;
    display: flex;
    padding: 20px 0px;
    align-items: center;
    flex-direction: row;
    margin-top: 20px;
    margin-left: 2%;
`

const BottomLeft = styled.div`
    width:70%;
    height: 300px;
    position: relative;
    border: 1px solid lightgray;
    border-radius: 8px;
    display: flex;
    background-color: white;
    box-shadow: 5px gray;
    padding: 20px;
`


const BottomRight = styled.div`
    width: 30%;
    height: 300px;
    position: relative;
    border: 1px solid lightgray;
    border-radius: 8px;
    display: flex;
    background-color: white;
    box-shadow: 5px gray;
    padding: 20px;
    margin-left: 20px;
`

const Locate = () => {
    return (
        <Container>
            <TopSection>
                <Heading>
                    Intelligence as of 20th January 2022
                </Heading>
            </TopSection>

            <BottomSection>
                <BottomLeft>
                    <Heading>
                        Intelligence as of 20th January 2022
                    </Heading>
                </BottomLeft>

                <BottomRight>
                    <Heading>
                        Intelligence as of 20th January 2022
                    </Heading>
                </BottomRight>
            </BottomSection>
        </Container>
    )
}

export default Locate
