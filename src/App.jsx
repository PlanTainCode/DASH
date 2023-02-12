import React from "react";
import { Header, SideBar } from "./components";

function App() {
  return (
    <div>
      <Header />
      <main>
        <SideBar />
        <div>какой-то контент</div>
      </main>
    </div>
  );
}

export default App;
