import { useState, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const textRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  const handlechange = (e) => {
    let temp;
    temp = Number(e.target.value);
    if (temp) {
      setLength(temp);
    }
  };
  const passwordGenerate = useEffect(() => {
    let pass = "";
    let str1 = "abcdefghijklmnopqrstuvwxyz";
    let str2 = "0123456789";
    let str3 = "!@#$%&*";

    if (numberAllowed) str1 += str2;
    if (charAllowed) str1 += str3;

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str1.length + 1);

      pass += str1.charAt(char);
      setPassword(pass);
    }
  }, [length, numberAllowed, charAllowed]);

  const handleCopyClick = () => {
    textRef.current.select();

    try {
      document.execCommand("copy");
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    } catch (err) {
      alert("Unable to copy text to clipboard", err);
    }
    window.getSelection().removeAllRanges();
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div>
          <input
            className="input-box"
            type="text"
            value={password}
            ref={textRef}
            readOnly
          />
          <button onClick={handleCopyClick}>copy</button>
          
        </div>
        <div>
          <input
            type="range"
            name=""
            id=""
            min={8}
            max={20}
            value={length}
            onChange={handlechange}
          />
          <label htmlFor="">Password Lenght : {length}</label>
        </div>
        <div>
          <input
            type="checkbox"
            name=""
            id=""
            value={numberAllowed}
            onClick={() => setNumberAllowed(!numberAllowed)}
          />
          <label htmlFor="">Numbers</label>

          <input
            type="checkbox"
            name=""
            id=""
            value={charAllowed}
            onClick={() => setCharAllowed(!charAllowed)}
          />
          <label htmlFor="">Special Characters</label>
        </div>
        {isCopied && (
            <div
              style={{
                color: "#2ea44f",
                marginTop: "10px",
                border: "1px solid green",
              padding: "10px",
              zIndex:"10"
              }}
            >
              Text copied to clipboard!
            </div>
          )}
      </div>
    </>
  );
}

export default App;
