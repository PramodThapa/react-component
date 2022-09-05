import React, { Fragment } from "react";

import Portal from "../portal";

import "./Modal.style.css";

export default function Modal({ opened, children, handleOpen }) {
  const backdrop = opened ? "modal-backdrop" : "modal-close";

  const ModalContainer = (
    <div className={` ${backdrop} `}>
      {opened && (
        <div className="modal-wrapper">
          <Fragment>{children}</Fragment>
        </div>
      )}
    </div>
  );

  return <Portal>{ModalContainer}</Portal>;
}
