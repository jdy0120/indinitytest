import React, { useState } from "react";
import CalculatorMain from "./components/Calculator/CalculatorMain";
import ResultMain from "./components/Result/ResultMain";

function App() {
  const [calcPage, setCalcPage] = useState(true);
  return (
    <>
      {calcPage ? (
        <CalculatorMain titleName={`Calculator`} setCalcPage={setCalcPage} />
      ) : (
        <ResultMain setCalcPage={setCalcPage} />
      )}
    </>
  );
}

export default App;
