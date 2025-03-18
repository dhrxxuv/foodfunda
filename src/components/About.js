import React, { Component } from 'react';
import UserClass from './UserClass';
import { useTheme } from '../utils/useContextTheme';

const About = () => {
  const { theme } = useTheme(); // Access theme using the useTheme hook

  return (
    <div className={theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}>
      <h1>About Page</h1>
      <UserClass theme={theme} name="Dhruv" location="DABRA" />
    </div>
  );
};

export default About;
