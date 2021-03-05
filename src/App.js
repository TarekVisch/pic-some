import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Gallery from "./pages/gallery/gallery.component";
import Cart from "./pages/cart/cart.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <Gallery />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
