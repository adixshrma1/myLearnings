import { useState, useCallback, useEffect, useRef} from "react"

function App() {
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowd] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(charAllowed) str += "!@#$%^&*()_-+=";
    if(numberAllowed) str += "0123456789";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }
    setPassword(pass);  

  } , [length, charAllowed, numberAllowed, setPassword]);

  useEffect(()=>{
    passwordGenerator()
  }, [length, charAllowed, numberAllowed, passwordGenerator])

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  } , [password])
  return (
    <>
      <div className="bg-black w-screen h-screen flex justify-center items-center">
        <div className="bg-gray-800 py-3 px-5 rounded-md ">
          <h1 className="text-xl text-center mb-3 text-white">Password Generator</h1>
          <input 
            type="text" value={password} 
            placeholder="Password" readOnly 
            ref={passwordRef}
            className="py-2 px-5 rounded-s-md outline-none w-96"/>
          <button className="bg-blue-500 text-white py-2 px-5 rounded-e-md mb-3" onClick={copyPasswordToClipboard}>copy</button><br />
          <label>Length: {length}</label>
          <input 
            type="range" 
            min={6} max={20}  
            value={length}
            onChange={(e)=>{setLength(e.target.value)}}
            className="cursor-pointer ml-1"/>
          <input 
            type="checkbox" defaultChecked={numberAllowed} 
            onChange={()=>{setNumberAllowd((prev) => !prev)}}
            className="ml-3" />
          <label className="ml-1">Numbers</label>
          <input 
            type="checkbox" defaultChecked={charAllowed} 
            onChange={()=>{setCharAllowed((prev) => !prev)}}
            className="ml-3" />
          <label className="ml-1">Character</label>
        </div>
      </div>
    </>
  )
}

export default App
