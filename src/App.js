import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './utils/useContextTheme';
import Header from './components/Header';
import Body from './components/Body';
import appStore from './Redux/appStore';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Cart from './components/Cart';
import Footer from './components/Footer';
import RestaurantMenu from './components/RestaurantMenu';

// Layout Component to wrap header, body, and footer
const AppLayout = () => {
  return (
    <div className="applayout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: 1 }}>
        <Outlet /> {/* This renders the content for each route */}
      </div>
      <Footer />
    </div>
  );
};

// Define the router
const AppProvider = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/",
        element: <Body />
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <NotFound />
  }
]);

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appStore}>
      <ThemeProvider>
        <RouterProvider router={AppProvider} />
    </ThemeProvider>
  </Provider>
  
);
