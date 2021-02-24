import React, { useState } from "react";
import PicoPlacaComponent from "../../components/PicoPlacaComponent";
import PicoPlacaState, { IsPicoPlacaState } from "./components/PicoPlacaState";
import { PageContainer, PicoPlacaContainer } from "./styles";

interface Restriction {
  dayNumber: number;
  restrictedNumbers: number[];
}
interface TimeRestriction {
  hours: number;
  minutes: number;
}

function PicoPlaca() {
  const [carId, setCarId] = useState<string>("");
  const currentDate = new Date();
  const [date, setDate] = useState<Date>(currentDate);
  const [time, setTime] = useState<string>(
    `${currentDate.getHours()}:${currentDate.getMinutes()}`
  );
  const [isPicoPlaca, setIsPicoPlaca] = useState<IsPicoPlacaState>(
    IsPicoPlacaState.UNDEFINED
  );

  const handleFormSubmit: () => void = () => {
    /*
     * Restriction
     * Lunes: 1 y 2
     * Martes: 3 y 4
     * Miércoles: 5 y 6
     * Jueves: 7 y 8
     * Viernes: 9 y 0
     * Sábado, Domingo: None
     *
     * En la mañana de  7:00 a las 9:30
     * En la tarde de 16:00 a 19:30
     * */

    const restrictions: Restriction[] = [
      {
        // Lunes
        dayNumber: 1,
        restrictedNumbers: [1, 2],
      },
      {
        // Martes
        dayNumber: 2,
        restrictedNumbers: [3, 4],
      },
      {
        // Miercoles
        dayNumber: 3,
        restrictedNumbers: [5, 6],
      },
      {
        // Jueves
        dayNumber: 4,
        restrictedNumbers: [7, 8],
      },
      {
        // Viernes
        dayNumber: 5,
        restrictedNumbers: [9, 0],
      },
    ];

    const lastDigitOfId = parseInt(carId[carId.length - 1]);
    const dayOfTheWeek = date.getDay();
    const restrictedNumbers = restrictions.filter(
      (r) => r.dayNumber === dayOfTheWeek
    )[0]?.restrictedNumbers;

    const hours = parseInt(time.split(":")[0]);
    const minutes = parseInt(time.split(":")[1]);
    const timeValue: TimeRestriction = { hours: hours, minutes: minutes };

    const morningRestriction: TimeRestriction[] = [
      { hours: 7, minutes: 0 },
      { hours: 9, minutes: 30 },
    ];
    const afternoonRestriction: TimeRestriction[] = [
      { hours: 16, minutes: 0 },
      { hours: 19, minutes: 30 },
    ];

    const isInRestrictedTime =
      isTimeInRange(timeValue, morningRestriction) ||
      isTimeInRange(timeValue, afternoonRestriction);
    const carIsInRestrictedList = restrictedNumbers.includes(lastDigitOfId);

    if (restrictedNumbers && isInRestrictedTime && carIsInRestrictedList) {
      setIsPicoPlaca(IsPicoPlacaState.TRUE);
      return;
    }
    setIsPicoPlaca(IsPicoPlacaState.FALSE);
    return;
  };

  const isTimeInRange = (
    value: TimeRestriction,
    restrictions: TimeRestriction[]
  ): boolean => {
    const startMinutes = restrictions[0].minutes + 60 * restrictions[0].hours;
    const endMinutes = restrictions[1].minutes + 60 * restrictions[1].hours;
    const valueMinutes = value.minutes + 60 * value.hours;

    return valueMinutes >= startMinutes && valueMinutes <= endMinutes;
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

        <PicoPlacaState isPicoPlaca={isPicoPlaca} />
      </PicoPlacaContainer>
    </PageContainer>
  );
}

export default PicoPlaca;
