import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./component/Body";
import Layout from "./component/Layout";
import Header from "./component/Header";
import HomePage from "./component/HomePage";
import AboutUsPage from "./component/AboutUsPage";
import ContactPage from "./component/ContactPage";
import Cart from "./component/Cart";
import RestaurantMenu from "./component/RestaurantMenu";
import { lazy, Suspense } from "react";

function App() {
  const Grocery = lazy(() => import("./component/Grocery.jsx"));
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Body />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/restaurants/:restId" element={<RestaurantMenu />} />
            <Route
              path="/grocery"
              element={
                <Suspense fallback={<p>...loading</p>}>
                  <Grocery />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Header /> */}
    </>
  );
}

export default App;
