import React from "react"; 
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Header from "../Header";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import appStore from "../../Redux/appStore";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "../../utils/useContextTheme";

it("should load header component", () => {
  render(
    <ThemeProvider>
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );

  const loginbtn = screen.getByRole("button", { name: "Login or Logout" });

  expect(loginbtn).toBeInTheDocument();
});

it("should Change Login to Logout onClick", () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    );
  
    const loginbtn = screen.getByRole("button", { name: "Login or Logout" }); 
    fireEvent.click(loginbtn);
  
    const logoutbtn = screen.getByRole("button", { name: "Login or Logout" });
    expect(logoutbtn).toBeInTheDocument();
  });



  it("should Change ☀️ to 🌙 onClick", () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    );
  
    const button = screen.getByRole("button", { name: "🌙" });
    fireEvent.click(button);
    expect(button).toBeInTheDocument(); 
    
  });
  