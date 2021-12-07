import React from "react";
import EventsPage from "./Components/EventsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>Hostel Life</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/events/:category" element={<EventsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
