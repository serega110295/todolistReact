import React from 'react';
import style from './tasks.module.css'

const Tasks = (props) => {

    let className =  props.tasks.isDone === true ? style.done : style.wrapper

    return (
        <div>
            <div className= {className}>
                <p onDoubleClick = {props.notDoneTask} onClick={props.doneTask}>{props.tasks.todo}  </p>
                <button onClick={props.deleteTask}>❌</button>
            </div>
        </div>
    )
}

export default Tasks;