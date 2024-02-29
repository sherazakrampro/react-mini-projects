import React, { useState } from "react";
import data from "./data.js";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    let copyMultiple = [...multiple];
    let findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(copyMultiple);
  };

  return (
    <div className="wrapper flex flex-col h-full w-full justify-center items-center">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className={`px-4 py-3 text-white rounded-full mb-5 ${
          enableMultiSelection ? "bg-slate-700 font-bold" : "bg-slate-700"
        }`}
      >
        Enable Multi-Selection
      </button>
      <div className="accordian w-[500px]">
        {data && data.length > 0 ? (
          data.map((dataitem, index) => (
            <div
              className="item bg-orange-500 mb-5 p-10 rounded-xl"
              key={index}
            >
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataitem.id)
                    : () => handleSingleSelection(dataitem.id)
                }
                className="title font-bold text-lg flex justify-between items-center cursor-pointer"
              >
                <h3>{dataitem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataitem.id) !== -1 && (
                    <div className="content h-auto mt-5">
                      <p>{dataitem.answer}</p>
                    </div>
                  )
                : selected === dataitem.id && (
                    <div className="content h-auto mt-5">
                      <p>{dataitem.answer}</p>
                    </div>
                  )}
            </div>
          ))
        ) : (
          <div>No Data Found!</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
