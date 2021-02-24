import React, { useState } from "react";
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
  WarningMessage,
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
function PicoPlacaComponent(props: PicoPlacaComponentProps) {
  const [isFormComplete, setFormComplete] = useState<boolean | null>(null);

  const handleCarIdChange = (e: any) => {
    if (e && e.target && e.target.value) {
      props.onCarIdChange(e.target.value.toUpperCase());
    } else {
      props.onCarIdChange("");
    }
  };

  const handleTimePickerChange = (time: TimePickerValue) => {
    props.onTimeChange(time?.toString());
  };

  const handleDateChange = (date: Date | Date[]) => {
    if (Array.isArray(date)) {
      props.onDateChange(date[0]);
    } else {
      props.onDateChange(date);
    }
  };

  const onKeyPress = (event: any) => {
    if (event && event.key) {
      switch (event.key) {
        case KEYS.ENTER:
          onHandleSubmit();
          break;
      }
    }
  };

  const onHandleSubmit = () => {
    if (
      props.carId &&
      !props.carId.split("").includes("_") &&
      props.time &&
      props.date
    ) {
      setFormComplete(true);
      props.onSubmit();
    } else {
      setFormComplete(false);
    }
  };

  return (
    <>
      {isFormComplete === false && (
        <WarningMessage>{PICO_PLACA_COMPONENT.WARNING_MESSAGE}</WarningMessage>
      )}
      <InputField onKeyDown={onKeyPress}>
        <InputContainer>
          <InputBox>
            <InputMask
              placeholder={PICO_PLACA_COMPONENT.CAR_ID_PLACEHOLDER}
              mask={EC_CAR_ID_FORMAT}
              value={props.carId}
              onChange={handleCarIdChange}
            />
          </InputBox>
        </InputContainer>
        <InputContainer></InputContainer>
        <InputContainer>
          <DatePickerContainer>
            <DatePicker
              onChange={handleDateChange}
              value={props.date}
              locale="es-EC"
            />
          </DatePickerContainer>
        </InputContainer>
        <InputContainer>
          <TimePickerContainer>
            <TimePicker
              onChange={handleTimePickerChange}
              value={props.time}
              locale="es-EC"
              disableClock={true}
            />
          </TimePickerContainer>
        </InputContainer>
        <SubmitButton onClick={() => onHandleSubmit()}>
          {PICO_PLACA_COMPONENT.SEND_FORM}
        </SubmitButton>
      </InputField>
    </>
  );
}

export default PicoPlacaComponent;
