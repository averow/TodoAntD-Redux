import "./App.css";
import React from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoForm />
      <Todos/>
    </div>
  );
}

export default App;
