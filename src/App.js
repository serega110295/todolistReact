import React from "react";
import Tasks from './component/tasks'
import Header from './component/header/header'
import style from './App.module.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        { id: 0, todo: '1', isDone: true },
        { id: 1, todo: '2', isDone: false },
        { id: 2, todo: '3', isDone: false }
      ]
    }
  }
  
  doneTask = id => {
    const index = this.state.tasks.map(tasks => tasks.id).indexOf(id)
    this.setState(state => {
      let {tasks} = state;
      tasks[index].isDone = true
      return tasks
    })
    }

    notDoneTask = id => {
      const index = this.state.tasks.map(tasks => tasks.id).indexOf(id)
      this.setState(state => {
        let {tasks} = state;
        tasks[index].isDone = false
        return tasks
      })  
    }

  deleteTask = id => {
    const index = this.state.tasks.map(tasks => tasks.id).indexOf(id)
    this.setState(state => {
      let {tasks} = state;
       delete tasks[index]
      return tasks
    })
    
  }

  render() {

    let { tasks } = this.state
    return (

      <div className={style.wrapper}>
        <Header tasks={tasks.length} />
        {tasks.map(tasks => {
          return(
            <Tasks 
            key = {tasks.id} 
            tasks = {tasks} 
            deleteTask = {() => this.deleteTask(tasks.id)}
            doneTask = {() => this.doneTask(tasks.id)}
            notDoneTask = {() => this.notDoneTask(tasks.id)}
            />
          )
          
        })}
      </div>

    )
  }
}

export default App;
