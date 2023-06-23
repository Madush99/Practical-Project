import React, { useState, useEffect } from 'react'
import AddtaskScreen from '../AddTaskScreen/addtaskScreen';
import { v4 as uuidv4 } from 'uuid';
import Header from '../../components/taskHeader';
import TaskScreen from './taskScreen';
import NavBar from '../../components/Nav';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';


const TaskHome = () => {
    const [tasks, setTasks] = useState([]); 
    const [showAddTask, setShowAddTask] = useState(false); 


    const getTasks = JSON.parse(localStorage.getItem("taskAdded"));

    useEffect(() => {
        if (getTasks == null) {
            setTasks([])
        } else {
            setTasks(getTasks);
        }

    }, [])

    //Add task
    const addTask = (task) => {
        const id = uuidv4();
        const newTask = { id, ...task }

        setTasks([...tasks, newTask]);

        localStorage.setItem("taskAdded", JSON.stringify([...tasks, newTask]));
    }
    // Delete Task
    const deleteTask = (id) => {
        const deleteTask = tasks.filter((task) => task.id !== id);

        setTasks(deleteTask);

        localStorage.setItem("taskAdded", JSON.stringify(deleteTask));
    }
    // Edit Task
    const editTask = (id) => {

        const title = prompt("Task Name");
        const description = prompt("Description")
        const date = prompt("Date");
        let data = JSON.parse(localStorage.getItem('taskAdded'));

        const taskData = data.map(tsk => {
            if (tsk.id === id) {
                return {
                    ...tsk,
                    title: title,
                    description: description,
                    date: date,
                    id: uuidv4()
                }
            }
            return tsk;
        })

        localStorage.setItem("taskAdded", JSON.stringify(taskData));
        window.location.reload();
    }

    const completeTask = (id) => {

        const compTsk = prompt("Complete Task");
       
        let data = JSON.parse(localStorage.getItem('taskAdded'));

        const taskData = data.map(tsk => {
            if (tsk.id === id) {
                return {
                    ...tsk,
                    compTsk: compTsk,
                    id: uuidv4()
                }
            }
            return tsk;
        })

        localStorage.setItem("taskAdded", JSON.stringify(taskData));
        window.location.reload();
    }
    return (
        <>
            <NavBar />
            <br></br>
            <Header showForm={() => setShowAddTask(!showAddTask)} changeTextAndColor={showAddTask} />
            <br></br>
            <Divider />
            <div>
                <br></br>
                {/* <Box
                    sx={{
                        width: 400,
                        height: 50,
                        backgroundColor: 'primary.main'
                    }}
                > */}
         
                <h3 style={{paddingLeft:90}}>Number of Tasks: {tasks.length}</h3>
            
                {/* </Box> */}
            </div>
            <br></br>
            <Divider />
            <br></br>
            {showAddTask && <AddtaskScreen onSave={addTask} />}

            {
                tasks.length > 0
                    ?
                    (<TaskScreen tasks={tasks} onDelete={deleteTask} onEdit={editTask} completeTask={completeTask}/>)
                    :
                    ('No Task Found!')
            }
        </>

    )
}

export default TaskHome