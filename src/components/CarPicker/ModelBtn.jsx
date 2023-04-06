import { useState } from "react";

const ModelBtn = ({ model, index, coloringButton, btnID, onShowInfo }) => {
  const showInfoHandler = () => {
    onShowInfo(model);
  };

  return (
    <button
      className={`${coloringButton(index)} model-pick`}
      onClick={() => {
        btnID(index);
        showInfoHandler();
      }}
    >
      {model.mark + " " + model.model}
    </button>
  );
};

export default ModelBtn;
