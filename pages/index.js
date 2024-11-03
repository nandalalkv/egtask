import { useState } from 'react';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [clearMessage, setClearMessage] = useState('');
  const handleAddTask = (taskText) => {
    if (taskText.trim()) {
      setTasks([...tasks, { text: taskText, completed: false, isEditing: false }]);
    }
  };
  const handleCompleteTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };
  const handleEditTask = (index, newText) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };
  const handleEditToggle = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isEditing: !task.isEditing } : task
    );
    setTasks(updatedTasks);
  };
  const handleClearTasks = () => {
    const remainingTasks = tasks.filter(task => !task.completed);
    setTasks(remainingTasks);
    setClearMessage('Completed,task(s) cleared!');
    setTimeout(() => {
      setClearMessage('');
    }, 3000);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-2xl w-full p-8 bg-white rounded-2xl shadow-lg mx-4">
        <h1 className="text-4xl font-bold pl-0 mb-6 text-black">Daily To Do List</h1>
        <AddTask onAdd={handleAddTask} />
        <TaskList 
          tasks={tasks} 
          onComplete={handleCompleteTask} 
          onEdit={handleEditTask} 
          onEditToggle={handleEditToggle} 
        />
        <hr className="my-4 border-gray-200" />
        <div className="flex justify-between items-center">
          <span className="text-gray-500">
            {tasks.filter(task => task.completed).length} item(s) selected
          </span>
          <button
            onClick={handleClearTasks}
            className="text-gray-500 hover:text-red-500"
          >
            Clear All
          </button>
        </div>
        {clearMessage && (
          <div className="text-green-600 text-lg mt-4">{clearMessage}</div>
        )}
      </div>
    </div>
  );
}