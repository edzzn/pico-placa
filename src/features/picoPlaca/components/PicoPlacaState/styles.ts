import styled from "styled-components";
import { IsPicoPlacaState } from "./index";
import { COLOR_PALETTE } from "../../../../common/colors";

export interface StatusInfoProps {
  isPicoPlaca: IsPicoPlacaState;
}

export const StatusInfo = styled.span`
  width: 100%;
  height: 500px;

  background: ${(props: StatusInfoProps) =>
    props.isPicoPlaca === IsPicoPlacaState.TRUE
      ? COLOR_PALETTE.RED
      : props.isPicoPlaca === IsPicoPlacaState.FALSE
      ? COLOR_PALETTE.GREEN
      : COLOR_PALETTE.WHITE_BACKGROUND};

  box-shadow: 0px 2px 40px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 0 16px;

  color: ${(props: StatusInfoProps) =>
    props.isPicoPlaca === IsPicoPlacaState.UNDEFINED
      ? COLOR_PALETTE.LIGHT_GREEN
      : COLOR_PALETTE.LIGHT_GREY};
  h1 {
    font-size: 60px;
    padding-bottom: 40px;
  }
`;
