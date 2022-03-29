import React from "react";
import styled from "styled-components";

const CalcResultComponent = styled.div`
  height: 300px;
  border: 1px solid red;
  text-align: right;
`;

const CalculatingNumber = styled.p`
  color: #7a7a7a;
  font-size: 18px;
  border: 1px solid green;
  margin: 0;
  padding: 0;
`;

const CalculatingResult = styled.p`
  color: #f54f61;
  font-size: 56px;
  border: 1px solid green;
  margin: 0;
  padding: 0;
`;

interface Props {
  calc: string;
}

const CalcResult = ({ calc }: Props) => {
  return (
    <>
      <CalcResultComponent>
        <CalculatingNumber>{calc}</CalculatingNumber>
        <CalculatingResult>{eval(calc)}</CalculatingResult>
      </CalcResultComponent>
    </>
  );
};

export default CalcResult;
