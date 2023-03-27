import React from 'react';

const Modal = ({ show, message, onConfirm, onCancel }) => {
  const modalStyle = {
    display: show ? 'block' : 'none',
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  };

  const contentStyle = {
    backgroundColor: '#fefefe',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #888',
    width: 'fit-content',
    textAlign: 'center'
  };

  return (
    <div style={modalStyle}>
      <div style={contentStyle}>
        <p>{message}</p>
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel}>No</button>
      </div>
    </div>
  );
};

export default Modal;