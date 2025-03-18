import {fireEvent, render ,screen,waitFor} from "@testing-library/react"
import React, { act } from "react"
import { BrowserRouter, MemoryRouter } from "react-router"
import { ThemeProvider } from "../../utils/useContextTheme"
import RestaurantMenu from "../RestaurantMenu"
import appStore from "../../Redux/appStore";
import Mock_data from "../mock/mockresMenu.json"
import { Provider } from "react-redux"
import Header from "../Header"
import "@testing-library/jest-dom"
import Cart from "../Cart"
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => Promise.resolve(Mock_data),
    })
})

it("should load restaurant menu component", async()=>{
    await act(async()=>render(
    <MemoryRouter>
        <Provider store={appStore}>
            
                <ThemeProvider>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                </ThemeProvider>

        </Provider>
    </MemoryRouter>))

    const accordianHeader = screen.getByText("Recommended (20)")
    fireEvent.click(accordianHeader)

    expect(screen.getAllByTestId("itemsID").length).toBe(20)

    
    const addbtn = await screen.getAllByRole("button", { name:/Add Margherita to cart/i });
    fireEvent.click(addbtn[0]);  

    expect(screen.getByText("🛒 1")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("clearbtn"))

   
    expect(screen.getByText(/Your cart is empty./)).toBeInTheDocument();
    
    

})