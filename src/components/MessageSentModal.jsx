import React from 'react';


export default function Modal({ message, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-sm p-5 text-center bg-white rounded shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800">{message}</h2>
        <button 
          onClick={onClose} 
          className="px-4 py-2 mt-4 text-white bg-gray-400 rounded hover:bg-gray-950"
        >
          Close
        </button>
      </div>
    </div>
  );
}
