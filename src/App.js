import { useState } from "react";
import DateLeft from "./components/DateLeft";

function checkNumber(string) {
  return /^\d+$/.test(string);
}

function App() {
  const [playCount, setPlayCount] = useState(0);
  const [inactiveDays, setInactiveDays] = useState(0);
  const [isRestricted, setIsRestricted] = useState(false);

  const handleChange = (event) => {
    if (!checkNumber(event.target.value)) return;
    setPlayCount(event.target.value);
  }
  const handleInactiveDays = (event) => {
    if (!checkNumber(event.target.value)) return;
    setInactiveDays(event.target.value);
  }
  const handleIsRestricted = () => {
    setIsRestricted(!isRestricted)
  }

  return (
    <div className="App w-96 h-96 p-10 bg-black-800 rounded-md flex flex-col">
      <div id="inputs">
        <input className="p-2 w-full rounded-md bg-black-700" placeholder="Play Count" onChange={handleChange} />
        <input className="p-2 my-2 w-full rounded-md bg-black-700" placeholder="Inactive Days" onChange={handleInactiveDays} />

        <div id="checkboxes" className="flex items-center mt-2">
          <input 
            className="rounded w-5 h-5 border-0 bg-black-700 focus:ring-offset-0 focus:ring-0 text-blue-light"
            type="checkbox" name="isRestricted" defaultChecked={isRestricted} onChange={handleIsRestricted} />

          <span className="ml-2">is Restricted</span>
        </div>
      </div>

      <DateLeft playCount={playCount} isRestricted={isRestricted} inactiveDays={inactiveDays} />
    </div>
  );
}

export default App;
