import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Reviews from "./Components/Admin/Reviews/Reviews";
import AddRestaurant from "./Components/Admin/Add-restaurant/AddRestaurant";
import Restaurant from "./Components/User/Restaurants/Restaurant";
import Review from "./Components/User/Review/Review";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/admin" element={<Reviews></Reviews>}></Route>
      <Route path="/" element={<Restaurant></Restaurant>}></Route>
      <Route path="/add-restaurant" element={<AddRestaurant></AddRestaurant>}></Route>
      <Route path="/:id" element={<Review></Review>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
