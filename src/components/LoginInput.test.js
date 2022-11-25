/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle username typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginInput from "./LoginInput";

import "@testing-library/jest-dom";

describe("LoginInput component", () => {
  it("should handle username typing correctly", async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const usernameInput = await screen.getByPlaceholderText("Username");

    // Action
    await userEvent.type(usernameInput, "test-username");

    // Assert
    expect(usernameInput).toHaveValue("test-username");
  });

  it("should handle password typing correctly", async () => {
    // arrange
    render(<LoginInput login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText("Password");

    // action
    await userEvent.type(passwordInput, "testpassword");

    // assert
    expect(passwordInput).toHaveValue("testpassword");
  });

  it("should call login function when login button is clicked", async () => {
    // Arrange
    const mockLogin = jest.fn();
    render(<LoginInput login={mockLogin} />);
    const usernameInput = await screen.getByPlaceholderText("Username");
    await userEvent.type(usernameInput, "usernametest");
    const passwordInput = await screen.getByPlaceholderText("Password");
    await userEvent.type(passwordInput, "passwordtest");
    const loginButton = await screen.getByRole("button", { name: "Login" });

    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockLogin).toBeCalledWith({
      id: "usernametest",
      password: "passwordtest",
    });
  });
});
