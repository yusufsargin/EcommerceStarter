import { Button } from "antd";
import { ButtonType } from "antd/lib/button";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import React from "react";
import styled from "styled-components";

export interface StyledComponentProp {
  color?: string;
  roundSize?: number;
  size?: SizeType;
  children?: any;
  type?: ButtonType;
  textColor?: string;
}

export default function StyledButton({ color, roundSize, size, children, type, textColor }: StyledComponentProp) {
  // const ButtonContainer = styled.div`
  //   [class*="ant-btn"] {
  //     background-color: ${color};
  //     border-radius: ${(roundSize || 10) + "px"};
  //     border-color: ${color};
  //     color: ${textColor};
  //   }
  // `;

  return (
    // <ButtonContainer>
    <Button size={size} type={type}>
      {children}
    </Button>
    // </ButtonContainer>
  );
}
