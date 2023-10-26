import React from 'react'

const Form = () => {
  return (
    <div className="form w-1/3">
      <form action="">
        <div className="form-field mb-3">
          <input
            type="text"
            className="p-2 rounded-md w-full outline-none bg-slate-600 placeholder:text-orange-600 tracking-wider"
            placeholder="Note Title..."
          />
        </div>
        <div className="form-field mb-3">
          <textarea
            className="p-2 rounded-md outline-none w-full resize-none bg-slate-600 placeholder:text-orange-600 tracking-wider"
            placeholder="Note Description..."
            rows="8"
          ></textarea>
        </div>
        <div className="btn-box text-center">
          <button className="text-orange-600 border border-1 border-orange-600 py-2 px-7 rounded-md hover:bg-orange-600 hover:text-white transition-all">
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form