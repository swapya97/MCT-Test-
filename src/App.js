import React, { useEffect, useState } from "react";
import "./App.css";
import ContestComponent from "./components/ContestComponent";
import contestapi from "./utils";
function App() {
  const [details, setDetails] = useState([]);

  useEffect((_) => {
    (async (_) => {
      const response = await contestapi.get("all");
      setDetails(response.data);
    })();
  }, []);

  
  return (
    <main>
      <h2>Coding Contest Calendar</h2>
      <hr/>
      <h1>Platforms</h1>
      {details.map((details, idx) => {
        return <ContestComponent key={idx} details={details} />;
      })}
    </main>
  );
}

export default App;
