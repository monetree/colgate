//Global imports
import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
    height: 45px;
    width: 230px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #007bff;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`

const ButtonText = styled.h4`
    font-size: 16px;
    font-weight: normal;
    color: #fff;

`

const CustomButton = (props) => {

    const { title } = props;

    return (
        <Container>
            <ButtonText>
                {title}
            </ButtonText>
        </Container>
    )
}

export default CustomButton
