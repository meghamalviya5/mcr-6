import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import RestaurantDetails from "./pages/RestaurantDetails/RestaurantDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/restaurant-details/:restaurantID"
          element={<RestaurantDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
