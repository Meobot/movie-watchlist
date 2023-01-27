import Header from "./components/Header";
import Card from "./components/Card";
import Input from "./components/Input";
// import data from "./data"

// render "exploring" on startup, then conditionally render out cards after search.
// if nothing is found, render error message

export default function App() {

  return (
    <div className="App">
      <Header />
      <Input />
      <Card />
    </div>
  )
}
