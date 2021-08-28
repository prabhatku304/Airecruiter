import React from "react";
import { RouterContent } from "./container/routes";
import { Provider } from "react-redux";
import { rootStore } from "./redux";

import { NavBar } from "./container/NavBar/Navbar";
import { Footer } from "./container/Footer/Footer";
import PersonalityTest from "./component/PersonalityTest";
const store = rootStore();

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <RouterContent />
      <Footer />
    </Provider>
  );
}

export default App;
