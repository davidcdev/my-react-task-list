export function TaskForm({
    title,
    onTitleChange, 
    description,
    onDescriptionChange,
    formValidation,
    handleKeyDown,
    handleAddClick, }) {

    const handleSubmit = (event) => { 
        event.preventDefault();
        console.log("Send data to register");
    }

    const isFormValid = Object.keys(formValidation).every(
        (key) => formValidation[key] === ""
      );

    return (
        <section className="form-container">
            <form className="add-new-task" onSubmit={handleSubmit}>
                <div className="title-and-error">
                    <input 
                        type="text"
                        className="new-task"
                        value={title}
                        onChange={(e) => { onTitleChange(e.target.value) }} 
                        onKeyDown={ handleKeyDown }
                        placeholder="Enter a title for your task"
                        autoFocus/>
                        
                    {formValidation.title && (
                        <span className="error">{formValidation.title}</span>
                    )}
                </div>

                <input 
                    type="text"
                    className="new-task"
                    value={description}
                    onChange={(e) => { onDescriptionChange(e.target.value) }}
                    onKeyDown={ handleKeyDown }  
                    placeholder="Enter a description for your task"
                    autoFocus/>

                <button 
                    type="submit"
                    className="add-button" 
                    onClick={ handleAddClick }
                    disabled={!isFormValid}
                >
                    +
                </button>
            </form>
        </section>
    )
}