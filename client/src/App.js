import React from "react";
import ActivitiesPage from "./Components/ActivitiesPage";
import SpecificActivity from "./Components/SpecificActivity";

const App = () => {
  return (
    <>
      <h1>Hostel Life</h1>
      <SpecificActivity />
      <ActivitiesPage />
    </>
  );
};

export default App;
