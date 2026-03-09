import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import config from "./config";
import { AudioContext } from "../context/AudioContext";

function Passcode() {

  const [passcode, setPasscode] = useState([]);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const { playHomeMusic } = useContext(AudioContext);

  const handleNumberClick = (number) => {

    if (passcode.length < 4) {

      const newPasscode = [...passcode, number];
      setPasscode(newPasscode);

      if (newPasscode.length === 4) {

        const enteredPasscode = newPasscode.join("");

        if (enteredPasscode === config.correctPasscode) {

          setMessage(config.successMessage);

          // 🔊 PLAY HOME MUSIC
          playHomeMusic();

          setTimeout(() => {

            setMessage(config.redirectMessage);
            navigate(config.redirectPath);

          }, 700);

        } else {

          setMessage(config.incorrectPasscodeMessage);

          setTimeout(() => {
            setPasscode([]);
            setMessage("");
          }, 3000);

        }

      }

    }

  };

  const handleCancel = () => {
    setPasscode([]);
    setMessage("");
  };

  return (

    <div className="min-h-screen w-full bg-black/60 text-white flex items-center justify-center">

      <div className="flex flex-col items-center">

        <h1 className="text-2xl mb-8">
          {config.passcodeTitle}
        </h1>

        <div className="flex gap-4 mb-10">

          {[...Array(4)].map((_, i) => (

            <div
              key={i}
              className={`w-3.5 h-3.5 rounded-full ${
                i < passcode.length
                  ? "bg-white"
                  : "border-2 border-zinc-500"
              }`}
            />

          ))}

        </div>

        {message && (

          <div className="mb-6 text-sm font-bold">
            {message}
          </div>

        )}

        <div className="grid grid-cols-3 gap-4 mb-8">

          {[1,2,3,4,5,6,7,8,9].map(num => (

            <button
              key={num}
              onClick={() => handleNumberClick(num)}
              className="w-16 h-16 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center"
            >

              {num}

            </button>

          ))}

          <div className="col-start-2">

            <button
              onClick={() => handleNumberClick(0)}
              className="w-16 h-16 rounded-full bg-zinc-800 hover:bg-zinc-700"
            >
              0
            </button>

          </div>

        </div>

        <button onClick={handleCancel}>
          {config.cancelButtonText}
        </button>

      </div>

    </div>

  );

}

export default Passcode;