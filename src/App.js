import React, { createContext, useState } from "react";
import "./App.css";
import { MealStall } from "./Components/Mealstall/MealStall";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import image from "./vintage-old-rustic-cutlery-dark.jpg";

// export const imgContext = createContext();

function App() {
  const [img, setImage] = useState();
  return (
    <div className="App">
      <img src={img || image} className="back-img" />
      {/* <imgContext.Provider value={{ img, setImage }}> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MealStall type={"category"} />} />
            <Route
              path="/meal_details/:name"
              element={<MealStall type={"details"} />}
            />
          </Routes>
        </BrowserRouter>
      {/* </imgContext.Provider> */}
    </div>
  );
}

export default App;
