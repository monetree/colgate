//Global imports
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//File imports
import Logo from "../images/Logo.png";

//Component imports
import InputBox from "../components/InputBox";
import CustomButton from "../components/CustomButton";

const Container = styled.div`
  flex: 1;
  background-color: white;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
`;

const LoginContainer = styled.div`
  height: 75vh;
  width: 65vw;
  background-color: #f2f5f9;
  border-radius: 10px;
  border: 1px solid skyblue;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LogoImage = styled.img`
  height: 10vw;
  width: 12vw;
`;

const InputSection = styled.div`
  margin: 40px 0;
`;

const ButtonSection = styled.div``;

const LinkButton = styled.button`
  margin-top: 20px 0px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ForgotPasswordText = styled.h4`
  background-color: transparent;
  font-weight: 300;
  text-decoration: underline;
`;

const ForgotPasswordHeadingText = styled.h4`
  background-color: transparent;
  font-weight: 300;
  color:  #007bff;
  font-weight: 500;
  
`;

const ForgotPassword = () => {
  return (
    <Container>
      <LoginContainer>
        <LogoImage src={Logo} />

        <ForgotPasswordHeadingText>Forgot Password ?</ForgotPasswordHeadingText>

        <p>
          Kindly enter your email ID for us to send a password verification code
          to your mail
        </p>

        <InputSection>
          <InputBox label="EMAIL ID" />
        </InputSection>

        <Link style={{ textDecorationLine: "none" }} to={"/Dashboard"}>
          <CustomButton title="SEND OTP" />
        </Link>

        <LinkButton>
          <ForgotPasswordText>Go Back</ForgotPasswordText>
        </LinkButton>
      </LoginContainer>
    </Container>
  );
};

export default ForgotPassword;
