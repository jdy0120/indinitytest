import React from "react";
import styled from "styled-components";
import C from "../../img/C.png";
import division from "../../img/icon_divide.png";
import multiple from "../../img/icon_mulitple.png";
import percent from "../../img/icon_percentage.png";
import zero from "../../img/0.png";
import one from "../../img/1.png";
import two from "../../img/2.png";
import three from "../../img/3.png";
import four from "../../img/4.png";
import five from "../../img/5.png";
import six from "../../img/6.png";
import seven from "../../img/7.png";
import eight from "../../img/8.png";
import nine from "../../img/9.png";
import minus from "../../img/icon_minus.png";
import cancel from "../../img/icon_cancle.png";
import plus from "../../img/Artboard – 9.png";
import dot from "../../img/png.png";
import equal from "../../img/icon_equal.png";

const ButtonComponent = styled.div``;

const ButtonLine = styled.div`
  border: 1px solid blue;
  display: flex;
  justify-content: space-around;
`;

const ButtonLineElse = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid green;
`;

const PlusButton = styled.button`
  width: 70px;
  height: 156px;
  border: none;
  border-radius: 16px;
  background-color: #f54f61;
`;

const ButtonCell = styled.button`
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 16px;

  ${({ color }: ButtonCellProps) => {
    return `
      background-color: #${color};
    `;
  }}
`;
interface ButtonCellProps {
  color: "FFC6CC" | "D2D2D2" | "F4F4F4" | "F54F61";
}

interface Props {
  calc: string;
  setCalc: React.Dispatch<React.SetStateAction<string>>;
}

const Buttons = ({ calc, setCalc }: Props) => {
  return (
    <>
      <ButtonLine>
        <ButtonCell
          onClick={() => {
            setCalc("");
          }}
          color={"D2D2D2"}
        >
          <img src={C} alt="" />
        </ButtonCell>
        <ButtonCell
          onClick={() => {
            setCalc(calc + "*100");
          }}
          color={"D2D2D2"}
        >
          <img src={percent} alt="" />
        </ButtonCell>
        <ButtonCell
          onClick={() => {
            setCalc(calc + "/");
          }}
          color={"D2D2D2"}
        >
          <img src={division} alt="" />
        </ButtonCell>
        <ButtonCell
          onClick={() => {
            setCalc(calc + "*");
          }}
          color={"FFC6CC"}
        >
          <img src={multiple} alt="" />
        </ButtonCell>
      </ButtonLine>
      <ButtonLine>
        <ButtonCell
          onClick={() => {
            setCalc(calc + "7");
          }}
          color={"F4F4F4"}
        >
          <img src={seven} alt="" />
        </ButtonCell>
        <ButtonCell
          onClick={() => {
            setCalc(calc + "8");
          }}
          color={"F4F4F4"}
        >
          <img src={eight} alt="" />
        </ButtonCell>
        <ButtonCell
          onClick={() => {
            setCalc(calc + "9");
          }}
          color={"F4F4F4"}
        >
          <img src={nine} alt="" />
        </ButtonCell>
        <ButtonCell
          onClick={() => {
            setCalc(calc + "-");
          }}
          color={"FFC6CC"}
        >
          <img src={minus} alt="" />
        </ButtonCell>
      </ButtonLine>
      <ButtonLine>
        <ButtonCell
          onClick={() => {
            setCalc(calc + "4");
          }}
          color={"F4F4F4"}
        >
          <img src={four} alt="" />
        </ButtonCell>
        <ButtonCell
          onClick={() => {
            setCalc(calc + "5");
          }}
          color={"F4F4F4"}
        >
          <img src={five} alt="" />
        </ButtonCell>
        <ButtonCell
          onClick={() => {
            setCalc(calc + "6");
          }}
          color={"F4F4F4"}
        >
          <img src={six} alt="" />
        </ButtonCell>
        <ButtonCell
          onClick={() => {
            setCalc(calc + "+");
          }}
          color={"FFC6CC"}
        >
          <img src={plus} alt="" />
        </ButtonCell>
      </ButtonLine>
      <ButtonLineElse>
        <div>
          <ButtonLine>
            <ButtonCell
              onClick={() => {
                setCalc(calc + "1");
              }}
              color={"F4F4F4"}
            >
              <img src={one} alt="" />
            </ButtonCell>
            <ButtonCell
              onClick={() => {
                setCalc(calc + "2");
              }}
              color={"F4F4F4"}
            >
              <img src={two} alt="" />
            </ButtonCell>
            <ButtonCell
              onClick={() => {
                setCalc(calc + "3");
              }}
              color={"F4F4F4"}
            >
              <img src={three} alt="" />
            </ButtonCell>
          </ButtonLine>
          <ButtonLine>
            <ButtonCell
              onClick={() => {
                setCalc(calc.slice(0, -1));
              }}
              color={"D2D2D2"}
            >
              <img src={cancel} alt="" />
            </ButtonCell>
            <ButtonCell
              onClick={() => {
                setCalc(calc + "0");
              }}
              color={"F4F4F4"}
            >
              <img src={zero} alt="" />
            </ButtonCell>
            <ButtonCell
              onClick={() => {
                setCalc(calc + ".");
              }}
              color={"F4F4F4"}
            >
              <img src={dot} alt="" />
            </ButtonCell>
          </ButtonLine>
        </div>
        <PlusButton>
          <img src={equal} alt="" />
        </PlusButton>
      </ButtonLineElse>
    </>
  );
};

export default Buttons;
