import React from "react"
import Contact from "../Contact"
import { render,screen} from "@testing-library/react"
import "@testing-library/jest-dom"
//we can have multiple describe or nested describe
describe("contact us test case",()=>{
    test("should load contact component",()=>{

        render(<Contact/>)
    
        const heading = screen.getByText(/Send Message/); // Target by text
       // console.log(heading)
        expect(heading).toBeInTheDocument();
        
    })
    
    test("should load button component",()=>{
    
        render(<Contact/>)
    
        const button = screen.getByRole("button"); 
       // console.log(button)
        expect(button).toBeInTheDocument();
        
    })
    
    test("should load input component",()=>{
    
        render(<Contact/>)
    
        const input = screen.getAllByRole("textbox"); 
        //console.log(input)
        expect(input.length).toBeGreaterThan(0); 
    
        
    })
})
