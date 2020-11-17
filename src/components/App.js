import "./App.css";
import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default class App extends Component {
counter = 6;

  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać wreszcie w Wiedźmina 3",
        date: "2020-12-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "pozmywać naczynia",
        date: "2020-11-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "pojsc do sklepu",
        date: "2020-11-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "pomalować paznokcie",
        date: "2020-11-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "odkurzyć mieszkanie",
        date: "2020-11-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: "pograć na kompie",
        date: "2020-11-15",
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    console.log("delete elementu o id " + id);
    let tasks = [...this.state.tasks];
    // const index = tasks.findIndex((task) => task.id === id);
    // console.log(index);
    // const deleteTask = tasks.splice(index, 1);
    // console.log(deleteTask);
    // this.setState({
    //   tasks,
    // });
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks: tasks,
    });
  };

  changeTaskStatus = (id) => {
    console.log("change elementu o id " + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
      this.setState({
        tasks,
      });
    });
  };

  addTask = (text, date, important) => {
  console.log("dodany task");
  const task = {
    id: this.counter,
    text: text, //tekst z inputa
    date: date, // tekst z inputa
    important: important, // wartosc z inputa
    active: true, 
    finishDate: null,
  }
  this.counter++;
    return true
  }


  render() {
    return (
      <div>
        <AddTask add={this.addTask}/>
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}
