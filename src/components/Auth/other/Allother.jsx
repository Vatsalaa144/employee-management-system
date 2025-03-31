import React, { useContext } from "react";
import { AuthContext } from "../../../context/Authprovider";

const Allother = () => {
  const [UserData,setUserData]= useContext(AuthContext);

  return (
    <div id="allother" className="bg-[#1C1C1C] p-5 mt-5 rounded ">
      <div className="bg-red-400 py-2 px-4 rounded mb-2 flex justify-between">
        <h2 className="w-1/5 text-lg font-medium ">Employee Name</h2>
        <h2 className="w-1/5 text-lg font-medium">Accept Task</h2>
        <h2 className="w-1/5 text-lg font-medium">New Task</h2>
        <h2 className="w-1/5 text-lg font-medium">Completed Task</h2>
        <h2 className="w-1/5 text-lg font-medium">Failed Task</h2>
      </div>
      <div className="">
        {UserData.map(function (elem, idx) {
          return (
            <div key={idx} className="bg-emerald-500 py-2 px-4 rounded mb-2 flex justify-between">
              <h2 className="text-lg font-medium w-1/5">{elem.firstname}</h2>
              <h3 className="text-lg font-medium w-1/5 ">{elem.task_count.active}</h3>
              <h5 className="text-lg font-medium w-1/5  ">{elem.task_count.new_task}</h5>
              <h5 className="text-lg font-medium w-1/5 ">{elem.task_count.completed_task}</h5>
              <h5 className="text-lg font-medium w-1/5  ">{elem.task_count.failed_task}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allother;
