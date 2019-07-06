import React from 'react';
import EditInput from './EditInput'

const ToDoList = ({toDoList, checkTask, showEdit, editTask, toggle}) => {
  return (
    <div>
      <ul>
        {
          toDoList.map((toDo, index) => {
            return (
              <li key={toDo} id={index}>
                {toDo}
                <span> <input type="submit" value="Check" onClick={checkTask}/> </span>
                <EditInput editTask={editTask} oldToDo={toDo} index={index} />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ToDoList
