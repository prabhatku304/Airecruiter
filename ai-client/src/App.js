import React from "react";
import { RouterContent } from "./container/routes";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { rootStore } from "./redux";

import { NavBar } from "./container/NavBar/Navbar";
import { Footer } from "./container/Footer/Footer";
const store = rootStore();

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <RouterContent />
      <Footer />
      <ToastContainer />
    </Provider>
  );
}

export default App;
