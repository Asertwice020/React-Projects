import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqsrtuvwxyz';
    
    if(numberAllowed) str += '0123456789';
    if(symbolAllowed) str += `!@#$%^&*()_+~{}[]'`

    for(let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPassword(pass)
  },
  [length, numberAllowed, symbolAllowed])

  // USE: useRef HOOK
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },
  [password])

  useEffect(() => {
    passwordGenerator()
  },
  [length, numberAllowed, symbolAllowed])

  return (
    <main className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        {/* AREA TO DISPLAY THE PASSWORD */}
        <input className='outline-none w-full py-1 px-3' 
        value={password}
        type='text'
        ref={passwordRef}
        readOnly/>

        {/* BUTTON TO COPY THE PASSWORD */}
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyPasswordToClipboard}
        >Copy</button>
      </div>

      <div className='flex text-sm gap-x-2' >
        <div className='flex items-center gap-x-1' >
          {/* RANGE INPUT WITH LABEL: TO SELECT THE LENGTH OF PASSWORD. */}
          <input className='cursor-pointer'
          min={5}
          max={30}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          type="range" />
          <label>Length: {length}</label>

          {/* CHECKBOX INPUT WITH LABEL: TO DECIDE WHETHER YOU WANT 'numbers' IN YOUR PASSWORD OR NOT. */}
          <input 
          id='number'
          defaultChecked={numberAllowed}
          onChange={() => setNumberAllowed((prev) => !prev)}
          type="checkbox" />
          <label htmlFor="number">Number</label>

          {/* CHECKBOX INPUT WITH LABEL: TO DECIDE WHETHER YOU WANT 'symbols' IN YOUR PASSWORD OR NOT. */}
          <input 
          id='symbol'
          defaultChecked={symbolAllowed}
          onChange={() => setSymbolAllowed((prev) => !prev)}
          type="checkbox" />
          <label htmlFor="symbol">Symbol</label>

        </div>
      </div>
    </main>
  )
}

export default App