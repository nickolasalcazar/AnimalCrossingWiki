import React from "react";

import "./Modal.css";

/**
 * A wrapper component that renders children in a modal.
 *
 * @param {Object}    children
 * @param {Object}    style
 * @param {Boolean}   open      If true, the modal is displayed.
 * @param {Function}  setOpen   Function for setting value of open.
 */
function Modal({ children, style, open, setOpen }) {
  if (!open) return null;

  return (
    <div className="modal-wrapper" onClick={() => setOpen(false)}>
      <div className="modal" style={style} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setOpen(false)}>
          &times;
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
