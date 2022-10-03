//Global imports
import React from 'react'
import styled from 'styled-components';

//Component import
import Dropdown from './DrowDown/DrowDown';

const Container = styled.div`
    width: 100%;
    position: relative;
    padding: 5px;
    background-color: white;
    border: 1px solid blue;
    border-width: 1px;
    border-radius: 8px;
    box-shadow: 1px 1px lightgray;
    margin-bottom: 5px;
`

const Heading = styled.span`
    font-size: 12px;
    font-weight: 600;
    color: black;
`

const DropDownSection = styled.div`
    margin-top: 10px;
`

const SideBarMenuItem = (props) => {

    const { data } = props;

    return (
        <Container>
            <Heading>
                {data.title}
            </Heading>

            <DropDownSection>
                <Dropdown
                    placeHolder="Overall"
                    options={data.options}
                    onChange={(value) => console.log(value)}
                />
            </DropDownSection>
        </Container>
    )
}

export default SideBarMenuItem
