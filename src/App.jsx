import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData, sendCartData } from "./store/cartAction";
import { useEffect } from "react";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    // thunk function
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    //first time block
    if (isInitial) {
      isInitial = false;
      return;
    }
    // thunk function
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
