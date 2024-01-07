import Header from "./components/Header.jsx"
import { useState } from "react";
import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx";

function App() {
  function handleChange(identifier, newValue) {
    setInvestment(prevValue => {
      return ({
        ...prevValue,
        [identifier]: +newValue,
      }
      );
    });
  };
  const [inputInvestment, setInvestment] = useState({
    initialInvestment: 1000,
    annualInvestment: 1000,
    expectedReturn: 50,
    duration: 10,
 });
 const isInputValid = inputInvestment.duration>0;
  return (<>
  <Header />
  <UserInput investment={inputInvestment} onhandleChange={handleChange}/>
  {isInputValid ? <Results input={inputInvestment}/> : <h1 className="center">Please enter a valid duration</h1>}
  </>
  )
}

export default App
