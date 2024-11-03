import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
const TaskList = ({ tasks, onComplete, onEdit, onEditToggle }) => {
  const [editSuccessMessage, setEditSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleEditToggle = (index) => {
    if (tasks[index].text.trim() !== '') {
      onEditToggle(index);
      setEditSuccessMessage('Task edited successfully!');
      setErrorMessage('');
      setTimeout(() => {
        setEditSuccessMessage('');
      }, 2000);
    } else {
      setErrorMessage('Task cannot be empty');
    }
  };
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center mb-3">
            {task.isEditing ? (
              <>
                <input
                  type="text"
                  value={task.text}
                  onChange={(e) => onEdit(index, e.target.value)}
                  className="border border-gray-200 rounded p-1 mr-3 text-red-500"
                />
                <button
                  onClick={() => handleEditToggle(index)}
                  className="ml-3 text-blue-500"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => onComplete(index)}
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    task.completed ? 'bg-green-400 border-green-500' : 'border-gray-400'
                  } mr-3`}
                >
                  {task.completed && <span className="text-white text-sm">✓</span>}
                </button>
                <span
                  className={`text-lg hover:text-blue-600 transition-colors duration-200 ${
                    task.completed ? 'line-through text-gray-500' : 'text-gray-700'
                  }`}
                >
                  {task.text}
                </span>
                <button
                  onClick={() => onEditToggle(index)}
                  className="ml-3 text-gray-400"
                >
                  <FontAwesomeIcon icon={faPen} />
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      {editSuccessMessage && (
        <div className="text-green-600 text-lg">{editSuccessMessage}</div>
      )}
      {errorMessage && (
        <div className="text-red-600 text-lg">{errorMessage}</div>
      )}
    </div>
  );
};
export default TaskList;