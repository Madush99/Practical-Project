import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const AddtaskScreen = ({ onSave }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [day, setDay] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onSave({title,description, day});
        setTitle('');
        setDay('')
        setDescription('')
    }

  return (
<>    
<center>
<div class="col-lg-10 col-xl-7 mx-auto" style={{backgroundColor: '#90b6f0', width: 700, height: 300}}>
    <form  onSubmit={onSubmit} >
          <div class="form-group mb-3">
          <label>Task</label>
                <input type="text" placeholder="add task" value={title} onChange={(e) => setTitle(e.target.value)} class="form-control rounded-pill border-0 shadow-sm px-4" style={{width: 500}}/>
          </div>
          <div class="form-group mb-3">
          <label>Description</label>
                <input type="text" placeholder="add task" value={description} onChange={(e) => setDescription(e.target.value)} class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" style={{width: 500}}/>
          </div>
          <div class="form-group mb-3">
          <label>Day & Time</label>
            <input type="text" placeholder="add day & time" value={day} onChange={(e) => setDay(e.target.value)} class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" style={{width: 500}}/>
          </div>
          <button type="submit" class="btn btn-outline-warning btn-block text-uppercase mb-2 rounded-pill shadow-sm" style={{width: 500}}>Save</button>

    </form>
    </div>
    </center>
    <br></br>
</>
    // <form className="add-form" onSubmit={onSubmit}>
    //         <div className="form-control">
    //             <label>Task</label>
    //             <input type="text" placeholder="add task" value={title} onChange={(e) => setTitle(e.target.value)} />
    //         </div>
    //         <div className="form-control">
    //             <label>Task</label>
    //             <input type="text" placeholder="add task" value={description} onChange={(e) => setDescription(e.target.value)} />
    //         </div>
    //         <div className="form-control">
    //             <label>Day & Time</label>
    //             <input type="text" placeholder="add day & time" value={day} onChange={(e) => setDay(e.target.value)} />
    //         </div>

    //         <input type="submit" className="btn btn-block" value="Save Task" />
    //     </form>
  )
}

export default AddtaskScreen