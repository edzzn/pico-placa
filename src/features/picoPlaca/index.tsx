import React, { useState } from "react";
import { PicoPlacaComponent } from "../../components/PicoPlacaComponent";
import PicoPlacaState from "./components/PicoPlacaState";
import { PageContainer, PicoPlacaContainer } from "./styles";

function PicoPlaca() {
  const [carId, setCarId] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<string>(new Date().toTimeString());
  const [isPicoPlaca, setIsPicoPlaca] = useState<boolean | undefined>(
    undefined
  );

  const handleFormSubmit: () => void = () => {
    // TODO: Implement
    setIsPicoPlaca(true);
  };

  return (
    <PageContainer>
      <PicoPlacaContainer>
        <PicoPlacaComponent
          carId={carId}
          date={date}
          time={time}
          onCarIdChange={setCarId}
          onDateChange={setDate}
          onTimeChange={setTime}
          onSubmit={() => {
            handleFormSubmit();
          }}
        />

        {isPicoPlaca !== undefined && (
          <PicoPlacaState isPicoPlaca={isPicoPlaca} />
        )}
      </PicoPlacaContainer>
    </PageContainer>
  );
}

export default PicoPlaca;
