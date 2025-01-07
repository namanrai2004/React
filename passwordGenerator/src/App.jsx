import { useEffect, useRef } from "react"
import { useCallback, useState } from "react"

function App() {
  const [length, setLength] = useState(1)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [charAllowed, setCharAllowed] = useState(true)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  //Password generator function
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      string += "0123456789"
    }
    if (charAllowed) {
      string += "!@#$%^&*"
    }

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1)
      // console.log(char);
      pass += string.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed])

  // for copy to clipboard

  const copyToClipBoard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (

    <div className="w-full max-w-xl mx-auto rounded-2xl px-4 py-3 my-8 bg-gray-200 text-gray-800 flex flex-col justify-center items-center shadow-2xl shadow-white /80 border-2 ">
      <h1 className='text-gray-800 text-center my-3 text-4xl font-bold'>Password generator</h1>
      <div className="flex shadow rounded-xl overflow-hidden mb-4 text-3xl border ">
        <input
          type="text"
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          value={password}
          ref={passwordRef}

        />
        <button
          onClick={copyToClipBoard}
          className='font-semibold flex justify-center items-center outline-none text-white px-3 py-0.5 shrink-0 ml-1 rounded-xl bg-blue-700 shadow-lg shadow-blue-700/50 ... '
        >Copy
        </button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1 text-xl text-gray-800 font-bold'>
          <input
            type="range"
            min={1}
            max={10}
            value={length}
            onChange={(e) => setLength(e.target.value)
            }
          />
          <label>Length: {length} </label>
        </div>
        <div className="flex items-center gap-x-1 text-xl font-bold">
          <input
            type="checkbox"

            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1 text-xl font-bold">
          <input
            type="checkbox"
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="characterInput">Character</label>
        </div>
      </div>
    </div>

  )
}

export default App


