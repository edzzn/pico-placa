// import { render, screen } from "@testing-library/react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import PicoPlaca from "../features/picoPlaca";
import { TEST_IDS } from "../__testsUtils__/test_ids";
import NavBarComponent from "../components/Navbar";
import PicoPlacaComponent from "../components/PicoPlacaComponent";
import App from "../App";
import { PICO_PLACA_STATUS } from "../common/texts";

const inputEvent = (value: string) => ({
  target: {
    value: value,
  },
});

describe("Pico y Placa component works as expected", () => {
  test("renders form", () => {
    render(<PicoPlaca />);
    const carIdInput = screen.getByTestId(TEST_IDS.CAR_ID_INPUT);
    const dateInputContainer = screen.getByTestId(
      TEST_IDS.DATE_PICKER_CONTAINER
    );
    const timeInputContainer = screen.getByTestId(
      TEST_IDS.TIME_PICKER_CONTAINER
    );
    const submitButton = screen.getByTestId(TEST_IDS.GO_BUTTON);

    const message = screen.getByTestId(TEST_IDS.PICO_PLACA_STATUS_MESSAGE);
    expect(message.textContent).toBe(PICO_PLACA_STATUS.undefined.h2);

    expect(carIdInput).toBeInTheDocument();
    expect(dateInputContainer).toBeInTheDocument();
    expect(timeInputContainer).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("Placa validates input", () => {
    render(<PicoPlaca />);

    const carIdInput = screen.getByTestId(
      TEST_IDS.CAR_ID_INPUT
    ) as HTMLInputElement;

    fireEvent.change(carIdInput, inputEvent("ABC"));

    expect(carIdInput.value).toBe("ABC-____");

    fireEvent.change(carIdInput, inputEvent("ABC123"));
    expect(carIdInput.value).toBe("ABC-123_");

    fireEvent.change(carIdInput, inputEvent("123CBA"));
    expect(carIdInput.value).toBe("CBA-____");

    fireEvent.change(carIdInput, inputEvent("123CBA543210"));
    expect(carIdInput.value).toBe("CBA-5432");
  });

  test("Validates PicoPlaca", () => {
    render(<PicoPlaca />);

    const carIdInput = screen.getByTestId(
      TEST_IDS.CAR_ID_INPUT
    ) as HTMLInputElement;

    /**
     * 4 -> Restricted on tuesday
     */
    // Set Placa
    fireEvent.change(carIdInput, inputEvent("ABC1234"));
    expect(carIdInput.value).toBe("ABC-1234");

    // Set Date
    const dateInputContainer = screen.getByTestId(
      TEST_IDS.DATE_PICKER_CONTAINER
    );
    const dateInput = dateInputContainer.getElementsByTagName("input")[0];
    fireEvent.change(dateInput, inputEvent("2021-02-23"));
    expect(dateInput.value).toBe("2021-02-23");

    // Set Time
    const timeInputContainer = screen.getByTestId(
      TEST_IDS.TIME_PICKER_CONTAINER
    );
    const timeInput = timeInputContainer.getElementsByTagName("input")[0];
    fireEvent.change(timeInput, inputEvent("08:00"));
    expect(timeInput.value).toBe("08:00");

    // Check status before submit
    let message = screen.getByTestId(TEST_IDS.PICO_PLACA_STATUS_MESSAGE);
    expect(message.textContent).toBe(PICO_PLACA_STATUS.undefined.h2);

    // SubmitButton
    const submitButton = screen.getByTestId(TEST_IDS.GO_BUTTON);
    fireEvent.click(submitButton);

    // Check message:
    message = screen.getByTestId(TEST_IDS.PICO_PLACA_STATUS_MESSAGE);
    expect(message.textContent).toBe(PICO_PLACA_STATUS.negative.h2);

    // Change time to a good time// Set Time
    fireEvent.change(timeInput, inputEvent("09:32"));
    expect(timeInput.value).toBe("09:32");

    // SubmitButton
    fireEvent.click(submitButton);

    // Check message:
    message = screen.getByTestId(TEST_IDS.PICO_PLACA_STATUS_MESSAGE);
    expect(message.textContent).toBe(PICO_PLACA_STATUS.positive.h2);
  });
});
