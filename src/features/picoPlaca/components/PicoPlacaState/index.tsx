import * as React from "react";
import { PICO_PLACA_STATUS } from "../../../../common/texts";
import { StatusInfo } from "./styles";

export interface PicoPlacaStateProps {
  isPicoPlaca: boolean;
}

function PicoPlacaState({ isPicoPlaca }: PicoPlacaStateProps) {
  if (isPicoPlaca) {
    return (
      <StatusInfo isPicoPlaca={isPicoPlaca}>
        <h1>{PICO_PLACA_STATUS.negative.h1}</h1>
        <h2>{PICO_PLACA_STATUS.negative.h2}</h2>
      </StatusInfo>
    );
  } else {
    return (
      <StatusInfo isPicoPlaca={isPicoPlaca}>
        <h1>{PICO_PLACA_STATUS.positive.h1}</h1>
        <h2>{PICO_PLACA_STATUS.positive.h2}</h2>
      </StatusInfo>
    );
  }
}

export default PicoPlacaState;
