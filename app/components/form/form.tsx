import React from 'react';

const Form = ({ inputs }: { inputs: string[] }) => {
  return (
    <form className="space-y-6">
      {inputs.map((field, index) => (
        field === 'Message' ? (
          <div className="flex flex-col space-y-2" key={index}>
            <label htmlFor={field.toLowerCase()} className="font-medium text-gray-700">
              {field}
            </label>
            <textarea
              id={field.toLowerCase()}
              rows={5}
              placeholder={`Enter your ${field.toLowerCase()}`}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ) : (
          <div className="flex flex-col space-y-2" key={index}>
            <label htmlFor={field.toLowerCase()} className="font-medium text-gray-700">
              {field}
            </label>
            <input
              type="text"
              id={field.toLowerCase()}
              placeholder={`Enter your ${field.toLowerCase()}`}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )
      ))}
      <div className="flex justify-center">
        <button className="px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition duration-300">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
