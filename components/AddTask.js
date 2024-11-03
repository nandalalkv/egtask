import { useState } from 'react';
const AddTask = ({ onAdd }) => {
  const [inputText, setInputText] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const handleAdd = () => {
    if (inputText.trim()) {
      onAdd(inputText);
      setSuccessMessage('Task added successfully!');
      setInputText('');
      setTimeout(() => {
        setSuccessMessage('');
      }, 2000);
    }
  };
  return (
    <div className="relative flex flex-col mb-4">
      <div className="relative flex items-center mb-2">
        <input
          type="text"
          className="flex-grow border border-gray-300 rounded-lg px-4 py-3 pr-16 focus:outline-none
           focus:border-gray-400 text-lg text-gray-500 placeholder-gray-400"
          placeholder="Add new list item"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="absolute right-1.5 top-1.5 bottom-1.5 bg-blue-500 text-white rounded-md px-8 
          py-2.5 flex items-center justify-center hover:bg-blue-600 text-lg font-medium"
        >
          Add
        </button>
      </div>
      {successMessage && (
        <div className="text-green-600 text-lg">{successMessage}</div>
      )}
    </div>
  );
};
export default AddTask;