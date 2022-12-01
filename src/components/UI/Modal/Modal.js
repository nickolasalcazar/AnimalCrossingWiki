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
    <div className="outside-modal" onClick={() => setOpen(false)}>
      <div className="modal-wrapper">
        <button className="modal-close" onClick={() => setOpen(false)}>
          &times;
        </button>
        <div
          className="modal"
          style={style}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
