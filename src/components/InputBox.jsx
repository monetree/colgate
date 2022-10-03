//Global imports
import React from "react";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import { ImKey } from "react-icons/im";

const Container = styled.div`
  width: 350px;
`;

const LabelText = styled.h2`
  font-weight: normal;
  font-size: 16px;
  color: black;
`;

const InputContainer = styled.div`
  height: 45px;
  width: 350px;
  display: flex;
  flex: 5;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
`;

const InputBoxComp = styled.input`
  height: 45px;
  width: 300px;
  flex: 4;
  position: relative;
  &:focus {
    outline: none;
  }
  padding: 0px 15px;
  background-color: #fff;
  border: 1px solid #b7d6ff;

  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

const IconSection = styled.div`
  height: 45px;
  flex: 1;
  display: flex;
  background-color: lightgray;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const renderIcon = (labelName) => {
  switch (labelName) {
    case "PASSWORD": {
      return <ImKey color="#333" size={18} />;
    }
    case "USERNAME": {
      return <FaUserAlt color="#333" size={18} />;
    }

    default: {
      return null
    }
  }
};

const InputBox = (props) => {
  const { label, icon } = props;

  return (
    <Container>
      <span>
        <LabelText>{label}</LabelText>
      </span>
      <InputContainer>
        <InputBoxComp type={label === "USERNAME" ? "email" : "password"} />
        {
          renderIcon(label) ? (
            <IconSection>{renderIcon(label)}</IconSection>
          ):""
        }
   
      </InputContainer>
    </Container>
  );
};

export default InputBox;
