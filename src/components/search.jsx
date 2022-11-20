import React from 'react';

export default function Search({ onSubmit, onChange }) {
  return (
    <form className="px-28" onSubmit={onSubmit}>
      <div className="flex space-x-4 items-end justify-between">
        <label className="flex flex-col flex-1">
          <span>Job Descriptions</span>
          <input
            type="text"
            placeholder="job description"
            className="form-input py-1 rounded-md"
            name="jobDesc"
            onChange={onChange}
          />
        </label>
        <label className="flex flex-col flex-1">
          Location
          <input
            type="text"
            placeholder="location"
            className="form-input py-1 rounded-md"
            name="location"
            onChange={onChange}
          />
        </label>
        <label className="flex flex-row-reverse items-center mb-2 gap-1">
          Full Time Only
          <input type="checkbox" className="rounded focus:ring-1" />
        </label>
        <button type="submit" className="px-4 py-2 bg-blue-800 text-white rounded">
          Search
        </button>

        <button
          className="px-4 py-2 bg-blue-300 text-white rounded"
          onClick={() => window.location.reload()}
        >
          Reset
        </button>
      </div>
    </form>
  );
}
