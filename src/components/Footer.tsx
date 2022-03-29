import React from "react";
import styled from "styled-components";
import group6 from "../img/Group 6.png";
import group7 from "../img/Group 7.png";

const FooterComponent = styled.footer`
  height: 56px;
  border: 1px solid red;
  display: flex;
  justify-content: space-around;
`;

interface Props {
  setCalcPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer = ({ setCalcPage }: Props) => {
  const clickCalcPage = () => {
    setCalcPage(true);
  };
  const clickResultPage = () => {
    setCalcPage(false);
  };
  return (
    <FooterComponent>
      <img onClick={clickCalcPage} src={group7} alt="" />
      <img onClick={clickResultPage} src={group6} alt="" />
    </FooterComponent>
  );
};

export default Footer;
