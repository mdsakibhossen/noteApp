import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <form action="">
        <div className="form-field">
          <input type="text" placeholder="Note Title" />
        </div>
        <div className="form-field">
          <textarea placeholder="Note Description" cols="30" rows="10"></textarea>
        </div>
      </form>
    </div>
  );
}

export default Form