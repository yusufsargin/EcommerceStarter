import React from "react";
import styled from "styled-components";

const ImageSliderImg = styled.img`
  border-radius: 10px;
`;

export default function ImageSlider() {
  return (
    <div>
      <ImageSliderImg width='100%' src={require("../../../public/assets/furniture.jpg")} alt='furniture' />
    </div>
  );
}
