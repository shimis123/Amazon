import React, { useEffect } from "react";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from './Components/Checkout';
import Login from "./Components/Login";
import { useStateValue } from './Components/StateProvider';

// now when account is created/signin we want to show the user in homepage
import { auth } from './Components/firebase';

function App() {

  const [{ basket }, dispatch] = useStateValue();

  // acting as listener to get the login and logout
  useEffect(() => {
    // if page refreshed
    auth.onAuthStateChanged(userAuth => {
      console.warn("USER IS >>>>> ", userAuth);


      if (userAuth) {
        dispatch({
          type: "SET_USER",
          user: userAuth
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }

    })

  }, [])


  return (
    // all children inside this will follow router
    <BrowserRouter>

      {/* client side rendering */}
      <Routes>
        {/* checkout */}

        {/* taking multiple element in Route */}

        <Route path="/checkout" element={<>
          <Header />
          <Checkout />
        </>}>
        </Route>


        {/* login */}
        <Route path="/login" element={<Login />}>
        </Route>


        {/* default router due to "/" HomePage */}
        <Route path="/" element={<>
          <Header />
          <Home />
        </>}>
        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
