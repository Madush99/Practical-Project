import React from 'react'
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const TaskScreen = ({ tasks, onDelete, onEdit, completeTask }) => {
    return (
        <>
        <center>
            {tasks.map((task) => (
                <div>
                    <div >
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={('https://static.vecteezy.com/system/resources/previews/001/879/507/original/fill-out-surveys-and-examinations-choose-answers-and-questions-choice-application-checkbox-list-of-tasks-illustration-concept-for-landing-page-web-ui-banner-poster-template-background-free-vector.jpg')}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Task Title: {task.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Task Description: {task.description}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" >
                                    Task Due Date: {task.date}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" >
                                    Task Complete Status: {task.compTsk}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => onDelete(task.id)}><FaTimes className="delIcon" /> Delete</Button>
                                <Button size="small" onClick={() => onEdit(task.id)}><FaPencilAlt className="editIcon" /> Update</Button>
                                <Button size="small" onClick={() => completeTask(task.id)}><FaPencilAlt className="editIcon" /> Change Status</Button>
                            </CardActions>
                        </Card>
                        <br></br>
                    </div>
                </div>

            ))}
            </center>
        </>
    )
}

export default TaskScreen