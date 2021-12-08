import React from "react";
import EventProfilePage from "./Components/EventProfilePage";
import EventsPage from "./Components/EventsPage";
// import EventsPage from "./Components/EventsPage";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>Hostel Life</h1>
      <EventProfilePage />
      <EventsPage />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/events/:category" element={<EventsPage />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
};

export default App;
