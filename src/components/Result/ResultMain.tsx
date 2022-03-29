import React from "react";
import Footer from "../Footer";
import Title from "../Title";

interface Props {
  setCalcPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResultMain = ({ setCalcPage }: Props) => {
  return (
    <>
      <Title titleName="Result" />
      <Footer setCalcPage={setCalcPage} />
    </>
  );
};

export default ResultMain;
