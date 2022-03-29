import React from "react";
import styled from "styled-components";

const TitleComponent = styled.header`
  height: 58px;
  border: 1px solid red;
  text-align: center;
`;

interface Props {
  titleName: string;
}

const Title = ({ titleName }: Props) => {
  return (
    <>
      <TitleComponent>{titleName}</TitleComponent>
    </>
  );
};

export default Title;
