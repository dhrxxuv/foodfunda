import React from "react";
import "@testing-library/jest-dom";
import { act } from "react";
import { fireEvent, render, screen,waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";  // ✅ Import MemoryRouter
import Body from "../Body.js";
import data from "../mock/mockRestData.json";
import { ThemeProvider } from "../../utils/useContextTheme.js";

// Mock fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(data),
  })
);

it("should render the Body component with search button and seach the restaurant by name", async () => {
  await act(async () => {
    render(
      <MemoryRouter>  
        <ThemeProvider>
          <Body />
        </ThemeProvider>
      </MemoryRouter>
    );
  });

  await screen.findByText(/Filter by Rating/i); // Wait for the filter dropdown to ensure rendering
  const searchbtn = await screen.findByRole("button", { name: /search/i }); 
  const cartbefsearch = screen.getAllByTestId("rescart")
  expect(cartbefsearch.length).toBe(20);
  const searchInp = screen.getByTestId("search-input")
  //console.log(searchInp)
  fireEvent.change(searchInp,{target:{value:"KFC"}})
  fireEvent.click(searchbtn)
  const carts = screen.getAllByTestId("rescart")
  expect(carts.length).toBe(1)
  expect(searchbtn).toBeInTheDocument();
  const cartaftsearch = screen.getAllByTestId("rescart")
  expect(cartaftsearch.length).toBe(1);
});


it("should filter res",async ()=>{
    await act(()=>render(<MemoryRouter>
        <ThemeProvider>
            <Body />
        </ThemeProvider>
    </MemoryRouter>))

    const filter = screen.getByTestId("filter")
    //console.log(filter)
    expect(filter).toBeInTheDocument()
    fireEvent.change(filter,{target:{value:5}})

    await waitFor(() => {
        const filteredRestaurants = screen.queryAllByTestId("rescart"); 
        if (filteredRestaurants.length === 0) {
            const noResultsMessage = screen.getByText(/No restaurants found/i); 
            expect(noResultsMessage).toBeInTheDocument(); 
          } else {
            expect(filteredRestaurants.length).toBeGreaterThan(0); 
          }
    });
})