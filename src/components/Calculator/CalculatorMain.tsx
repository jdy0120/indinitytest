import React, { useEffect, useState } from "react";
import Title from "../Title";
import CalcResult from "./CalcResult";
import Buttons from "./Buttons";
import Footer from "../Footer";
import styled from "styled-components";

const Main = styled.main`
  height: 100vh;
`;

interface Props {
  titleName: string;
  setCalcPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalculatorMain = ({ titleName, setCalcPage }: Props) => {
  const [calc, setCalc] = useState("34*74");
  useEffect(() => {
    console.log(calc);
  }, [calc]);
  return (
    <Main>
      <Title titleName={titleName} />
      <CalcResult calc={calc} />
      <Buttons calc={calc} setCalc={setCalc} />
      <Footer setCalcPage={setCalcPage} />
    </Main>
  );
};

export default CalculatorMain;
