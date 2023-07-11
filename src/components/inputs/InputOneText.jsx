import React, { useState } from "react";

const InputOneText = () => {
  const [oneText, setOneText] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setOneText(oneText + value);
  };

  const renderInputs = () => {
    const inputs = Array(12)
      .fill("")
      .map((value, index) => (
        <input
          key={`oneText-${index}`}
          type="text"
          className="w-full p-0 border-0 border-b text-center font-medium text-xl uppercase text-body bg-light border-gray-500"
          maxLength={1}
          value={oneText[index]}
          onChange={handleInputChange}
          onKeyUp={(event) => {
            if (event.keyCode === 13) {
              event.preventDefault();
              setOneText(oneText.slice(0, index + 1));
            }
          }}
        />
      ));
    return inputs;
  };

  return <div className="flex flex-1 gap-2 px-3 py-2">{renderInputs()}</div>;
};

export default InputOneText;
