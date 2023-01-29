import { useState } from "react";
function App() {
  const [value, setValue] = useState(0)
  return (
    <div>
      <h1>Simple React Counter</h1>
      <h2>{value}</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>Increament</button>
      <button className="btn" onClick={() => setValue(value - 1)} disabled={value === 0} >Decreament</button>
      <button className="btn" onClick={() => setValue(0)}>Reset</button>
    </div>
  )
  
}

export default App;
