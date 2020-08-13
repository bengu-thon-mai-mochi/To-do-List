import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './AddForm.css';

function AddForm(props){
    const {setDescription, selectedDate, handleAdd, selectDate} = props;
    return (
            <div className="todo-addform-wrapper" >
                <div className="todo-input-wrapper">
                    <label className="todo-label">
                        What to do?
                    </label>
                    <input className="todo-input" type="text" onChange={setDescription} />
                    
                    <label className="todo-label">
                        Set deadline:
                    </label>

                    <div>
                        <div className="date-picker-wrapper">
                            <DatePicker
                                className="date-picker-input"
                                selected={selectedDate}
                                onSelect={selectDate}
                            />
                        </div>
                    </div>
                </div>
                <div className="add-button-wrapper">
                    <input className="add-button" type="button" value="Add" onClick={handleAdd}  />
                </div>
            </div>
    )
};

export default AddForm;
