import React from "react";
import "./DialPad.css";

function DialPad({ sendDTMF }) {

  const handleButtonClick = (digit) => {
    sendDTMF(digit.toString()); // Call the sendDTMF function with the digit
  };

  return (
    <div className="dial-pad">
      <div className="buttons">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"].map((digit) => (
          <button key={digit} onClick={() => handleButtonClick(digit)}>
            {digit}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DialPad;
