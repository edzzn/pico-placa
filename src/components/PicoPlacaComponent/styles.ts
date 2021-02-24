import styled from "styled-components";
import { COLOR_PALETTE } from "../../common/colors";

export const InputField = styled.div`
  display: flex;
  margin: 16px;
  flex-wrap: wrap;
`;

export const InputContainer = styled.div`
  margin: 10px 0 10px 8px;
  display: flex;
  height: 40px;
  justify-content: center;
  flex-flow: column;
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  border-color: ${COLOR_PALETTE.LIGHT_GREY};
  background: white;
`;

export const SubmitButton = styled.span`
  color: ${COLOR_PALETTE.GREEN};
  height: 40px;
  margin: 10px 0 10px 8px;
  text-transform: uppercase;
  padding: 8px 22px;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
`;

export const InputBox = styled.div`
  input {
    width: 100px;
    font-size: 16px;
    height: 30px;
    margin-left: 5px;
    outline: none;
    border-style: none;
  }
`;

export const DatePickerContainer = styled.div`
  .react-date-picker__wrapper {
    border: none;
  }
`;
export const TimePickerContainer = styled.div`
  .react-time-picker__wrapper {
    border: none;
  }
`;

export const WarningMessage = styled.div`
  margin-top: 30px;
  padding: 0 16px;
  color: ${COLOR_PALETTE.RED};
`;
