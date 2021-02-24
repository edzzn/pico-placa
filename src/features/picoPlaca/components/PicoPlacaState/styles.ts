import styled from "styled-components";
import { COLOR_PALETTE } from "../../../../common/colors";

export interface StatusInfoProps {
  isPicoPlaca: boolean;
}
export const StatusInfo = styled.span`
  width: 100%;
  height: 500px;

  background: ${(props: StatusInfoProps) =>
    props.isPicoPlaca ? COLOR_PALETTE.RED : COLOR_PALETTE.RED};

  box-shadow: 0px 2px 40px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 8px;

  color: ${COLOR_PALETTE.LIGHT_GREY};

  h1 {
    font-size: 60px;
    padding-bottom: 40px;
  }
`;
