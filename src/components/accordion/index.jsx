//single selection
//multiple selection
import data from "./data";
import { useState } from "react";
import "./style.css";

export default function Accordion() {
  function handleSelection(id) {
    setSelected(id === Selected ? null : id);
  }
  function handleMultiSelection(id) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(id);

    if (findIndexOfCurrentId == -1) cpyMultiple.push(id);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  }
  const [Selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.title}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.content}</div>
                  )
                : Selected == dataItem.id && (
                    <div className="content">{dataItem.content}</div>
                  )}
              {/* {Selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.content}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No Data Present</div>
        )}
      </div>
    </div>
  );
}
