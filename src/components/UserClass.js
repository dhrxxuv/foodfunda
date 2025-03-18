import React, { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0, // Create a state variable
      count1: false,
      data: [], // Initialize data as an array
    };
    console.log("hi from constructor UserClass ");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate UserClass ");
  }

  async componentDidMount() {
    console.log("hi from componentDidMount UserClass ");
    try {
      const data = await fetch("https://api.github.com/users/dhrxxuv");
      const response = await data.json();
      console.log(response);
      this.setState({ data: response });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  render() {
    const { name, location, theme } = this.props; // Destructure theme, name, and location
    const { count1, count, data } = this.state; // Destructure state
    console.log("hi from render UserClass ");

    return (
      <div className={theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}>
        <h1>Hi from class component</h1>
        <h2>{name}</h2>
        <button
          onClick={() => {
            this.setState({
              count: count + 1, // Increment count
            });
          }}
        >
          {`INCREMENT ${count}`}
        </button>

        <button
          onClick={() => {
            this.setState({
              count1: !count1, // Toggle count1
            });
          }}
        >
          {`true false button`}
        </button>

        {count1 ? <h1>True</h1> : <h1>False</h1>}
        <h2>{location}</h2>

        {/* Display fetched data */}
        <div>
          <h1>{data.name}</h1>
        </div>
      </div>
    );
  }
}

export default UserClass;


// import {useEffect, useState} from 'react'
// const UserClass = ()=>{
//   const [data,setdata] = useState([])

//   useEffect(()=>{
//     const fetching = async()=>{
//       const DATA = await fetch('https://api.github.com/users/dhrxxuv')
//       const response = await DATA.json()

//       setdata(response)
//       console.log(DATA)
//     }
//     fetching()
//   },[])

//   return(
//     <div>
      
//         <h1>{data.name}</h1>

//     </div>
//   )
// }



// export default UserClass