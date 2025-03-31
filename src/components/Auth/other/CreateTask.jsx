import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/Authprovider';

const CreateTask = () => {
  const [UserData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    // Create a new task object
    const newTask = {
    title: taskTitle,
    date: taskDate,
    assignTo: assignTo,
    category: category,
    description: taskDescription,
      active: false,
      new_task: true,
      failed_task: false,
      completed_task: false
    };

    // Create a new UserData array with the updated tasks=
    const updatedUserData = UserData.map((user) => {
      if (user.firstname === assignTo) {
        return {
          ...user,
          task: [...user.task, newTask], // Add the new task
          task_count: {
            ...user.task_count,
            new_task: user.task_count.new_task + 1
          }
        };
      }
      return user;
    });

    // Update the state correctly
    setUserData(updatedUserData);

    // Clear form fields
    setTaskTitle('');
    setTaskDescription('');
    setAssignTo('');
    setTaskDate('');
    setCategory('');
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="bg-[#1c1c1c] flex flex-wrap w-full justify-between items-start"
      >
        <div className="w-1/2">
          <div>
            <h2 className="text-lg text-gray-300 mb-0.5">Task Title</h2>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Enter a task"
            />
          </div>
          <div>
            <h2 className="text-lg text-gray-300 mb-0.5">Date</h2>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h2 className="text-lg text-gray-300 mb-0.5">Assign To</h2>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h2 className="text-lg text-gray-300 mb-0.5">Category</h2>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Development, Design, etc."
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h2 className="text-2xl text-gray-400 mb-0.5">Description</h2>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm  px-4 py-2 rounded outline-none bg-transparent border-[1px] border-gray-400"
          ></textarea>
          <button className="bg-amber-500 px-4 py-2 hover:bg-amber-700 mt-4 w-full text-xl rounded-2xl">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
