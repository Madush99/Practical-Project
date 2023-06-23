import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


const status = [
    {
      value: 'Completed',
    },
    {
      value: 'Not Complete',
    },
  ];
  

const AddtaskScreen = ({ onSave }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [compTsk, setCompTsk] = useState('');
    const [date, setDate] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onSave({ title, description, date, compTsk });
        setTitle('');
        setDate('');
        setDescription('');
        setCompTsk('');
    }

    return (
        <>
            <center>

                <div class="col-lg-10 col-xl-7 mx-auto" style={{ backgroundColor: '#90b6f0', width: 700, height: 500 }}>
                    <h1 style={{ color: 'white' }}>Add A Task</h1>
                    <form onSubmit={onSubmit} >
                        <div class="form-group mb-3">
                            <label>Task</label>
                            <input type="text" placeholder="Add task" value={title} onChange={(e) => setTitle(e.target.value)} class="form-control rounded-pill border-0 shadow-sm px-4" style={{ width: 500 }} />
                        </div>
                        <div class="form-group mb-3">
                            <label>Description</label>
                            <input type="text" placeholder="Add Description" value={description} onChange={(e) => setDescription(e.target.value)} class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" style={{ width: 500 }} />
                        </div>
                        <div class="form-group mb-3">
                            <label>Date</label>
                            <input type="date" placeholder="add date & time" value={date} onChange={(e) => setDate(e.target.value)} class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" style={{ width: 500 }} />
                        </div>
                        <div class="form-group mb-3">
                            <label>Select Your Task Status</label>
                            {/* <input type="text" placeholder="Add Task Status" value={compTsk} onChange={(e) => setCompTsk(e.target.value)} class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" style={{ width: 500 }} /> */}
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div>
                                    <TextField
                                        id="filled-select-currency"
                                        select
                                        label="Select"
                                        defaultValue="Not Completed"
                                        variant="filled"
                                        style={{width:500}}
                                        value={compTsk}
                                        onChange={(e) => setCompTsk(e.target.value)}
                                    >
                                        {status.map((option) => (
                                            <MenuItem key={option.value}   value={option.value} onChange={(e) => setCompTsk(e.target.value)} >
                                                {option.value}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                            </Box>
                        </div>
                        <button type="submit" class="btn btn-outline-warning btn-block text-uppercase mb-2 rounded-pill shadow-sm" style={{ width: 500 }}>Save</button>

                    </form>
                </div>
            </center>
            <br></br>
        </>

    )
}

export default AddtaskScreen