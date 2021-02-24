import React from "react";
import DatePicker from "react-date-picker";
import InputMask from "react-input-mask";
import TimePicker, { TimePickerValue } from "react-time-picker";
import { EC_CAR_ID_FORMAT, KEYS } from "../../common/constants";
import { PICO_PLACA_COMPONENT } from "../../common/texts";
import {
  DatePickerContainer,
  InputBox,
  InputContainer,
  InputField,
  SubmitButton,
  TimePickerContainer,
} from "./styles";

export interface PicoPlacaComponentProps {
  carId: string;
  date: Date;
  time: string;
  onCarIdChange: (value: string) => void;
  onDateChange: (value: Date) => void;
  onTimeChange: (value: string) => void;

  onSubmit: () => void;
}

export class PicoPlacaComponent extends React.Component<PicoPlacaComponentProps> {
  handleCarIdChange = (e: any) => {
    if (e && e.target && e.target.value) {
      this.props.onCarIdChange(e.target.value.toUpperCase());
    } else {
      this.props.onCarIdChange("");
    }
  };

  handleTimePickerChange = (time: TimePickerValue) => {
    this.props.onTimeChange(time?.toString());
  };

  handleDateChange = (date: Date | Date[]) => {
    if (Array.isArray(date)) {
      this.props.onDateChange(date[0]);
    } else {
      this.props.onDateChange(date);
    }
  };

  onKeyPress = (event: any) => {
    if (event && event.key) {
      switch (event.key) {
        case KEYS.ENTER:
          this.props.onSubmit();
          break;
      }
    }
  };

  render() {
    return (
      <InputField onKeyDown={this.onKeyPress}>
        <InputContainer>
          <InputBox>
            <InputMask
              placeholder={PICO_PLACA_COMPONENT.CAR_ID_PLACEHOLDER}
              mask={EC_CAR_ID_FORMAT}
              value={this.props.carId}
              onChange={this.handleCarIdChange}
            />
          </InputBox>
        </InputContainer>
        <InputContainer></InputContainer>
        <InputContainer>
          <DatePickerContainer>
            <DatePicker
              onChange={this.handleDateChange}
              value={this.props.date}
              locale="es-EC"
            />
          </DatePickerContainer>
        </InputContainer>
        <InputContainer>
          <TimePickerContainer>
            <TimePicker
              onChange={this.handleTimePickerChange}
              value={this.props.time}
              locale="es-EC"
              disableClock={true}
            />
          </TimePickerContainer>
        </InputContainer>
        <SubmitButton onClick={() => this.props.onSubmit()}>
          {PICO_PLACA_COMPONENT.SEND_FORM}
        </SubmitButton>
      </InputField>
    );
  }
}

export default PicoPlacaComponent;
