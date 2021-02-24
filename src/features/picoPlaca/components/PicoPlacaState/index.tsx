import * as React from "react";
import { PICO_PLACA_STATUS } from "../../../../common/texts";
import { TEST_IDS } from "../../../../__testsUtils__/test_ids";
import { StatusInfo } from "./styles";

export enum IsPicoPlacaState {
  TRUE,
  FALSE,
  UNDEFINED,
}

export interface PicoPlacaStateProps {
  isPicoPlaca: IsPicoPlacaState;
}

function PicoPlacaState({ isPicoPlaca }: PicoPlacaStateProps) {
  switch (isPicoPlaca) {
    case IsPicoPlacaState.TRUE:
      return (
        <StatusInfo isPicoPlaca={isPicoPlaca}>
          <h1>{PICO_PLACA_STATUS.negative.h1}</h1>
          <h2 data-testid={TEST_IDS.PICO_PLACA_STATUS_MESSAGE}>
            {PICO_PLACA_STATUS.negative.h2}
          </h2>
        </StatusInfo>
      );
    case IsPicoPlacaState.FALSE:
      return (
        <StatusInfo
          isPicoPlaca={isPicoPlaca}
          data-testid={TEST_IDS.PICO_PLACA_STATUS}
        >
          <h1>{PICO_PLACA_STATUS.positive.h1}</h1>
          <h2 data-testid={TEST_IDS.PICO_PLACA_STATUS_MESSAGE}>
            {PICO_PLACA_STATUS.positive.h2}
          </h2>
        </StatusInfo>
      );
    default:
      return (
        <StatusInfo
          isPicoPlaca={isPicoPlaca}
          data-testid={TEST_IDS.PICO_PLACA_STATUS}
        >
          <h1>{PICO_PLACA_STATUS.undefined.h1}</h1>
          <h2 data-testid={TEST_IDS.PICO_PLACA_STATUS_MESSAGE}>
            {PICO_PLACA_STATUS.undefined.h2}
          </h2>
        </StatusInfo>
      );
  }
}

export default PicoPlacaState;
