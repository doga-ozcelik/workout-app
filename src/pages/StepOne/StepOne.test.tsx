import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import StepOne from "./index";
import { UserDataProvider } from "../../context/UserDataContext";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { NavigationProvider } from "../../context/NavigationContext";
import i18n from "../../i18nForTests";
import mockApi from "../../api/mockApi";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("StepOne Component", () => {
  beforeEach(() => {
    mockApi.reset();
    mockNavigate.mockReset();
  });

  const setup = () => {
    render(
      <I18nextProvider i18n={i18n}>
        <UserDataProvider>
          <NavigationProvider>
            <BrowserRouter>
              <StepOne />
            </BrowserRouter>
          </NavigationProvider>
        </UserDataProvider>
      </I18nextProvider>
    );
  };

  it("submits form with correct data", async () => {
    setup();

    const heightInput = screen.getByPlaceholderText(
      "Height"
    ) as HTMLInputElement;
    const weightInput = screen.getByPlaceholderText(
      "Weight"
    ) as HTMLInputElement;
    const submitButton = screen.getByText("Next");

    fireEvent.change(heightInput, { target: { value: "170" } });
    fireEvent.change(weightInput, { target: { value: "70" } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(JSON.parse(mockApi.history.post[0].data)).toEqual({
        weight: 70,
        height: 170,
      });
    });
  });

  it("does not submit when inputs are empty", () => {
    setup();
    const submitButton = screen.getByText("Next");

    fireEvent.click(submitButton);

    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
