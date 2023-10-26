import React from 'react'

const Note = () => {
  return (
    <div className="note">
      <div className="note-header">
        <h3>My First Note</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore
          distinctio facere, suscipit similique illum! Accusantium consequuntur
          maiores explicabo corrupti!
        </p>
      </div>
      <div className="note-footer">
        <div className="date">16/07/2023</div>
        <div className="btn-box">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Note