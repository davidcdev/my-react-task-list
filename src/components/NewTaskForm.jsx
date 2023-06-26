import { Add } from "@mui/icons-material"
import { useState } from "react";

export function NewTaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [formValidation, setFormValidation] = useState({
        title: '',
        description: ''
    });

    const handleSubmit = () => {
        event.preventDefault();
        console.log('Send data to register');
    }

    const handleTitleChange = (event) => {
        const value = event.target.value;

        setFormValidation({
            ...formValidation,
            title: value.length === 0 || value.length < 3 ? "Title must be at least 3 characters" : "",
        })

        setTitle(value);
    }

    const handleDescriptionChange = (event) => {
        const value = event.target.value;
        setDescription(value);
    }

    const isFormValid = Object.keys(formValidation).every(
        (key) => formValidation[key] === ""
    );

    return(
        <div>
            <form 
                onSubmit={handleSubmit} 
                className="add-new-task" 
            >
                <div>
                    <input 
                        type="text"
                        value={title}
                        onChange={handleTitleChange} 
                        className="new-task" 
                        placeholder="Add a Title for your Task"
                    />
                    {formValidation.title && (
                        <span className="error" style={{color: "red"}}>
                            {formValidation.title}
                        </span>
                    )}
                </div>
                
                <div>
                    <input 
                        type="text"
                        value={description}
                        onChange={handleDescriptionChange} 
                        className="new-task" 
                        placeholder="Add a Description for your Task"
                    />
                </div>
                
                <button 
                    type="submit" 
                    className="add-button"
                    disabled={!isFormValid}
                >
                    <Add fontSize="small" />
                </button>
            </form>
        </div>
    )
}