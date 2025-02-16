/* eslint-disable react/prop-types */
export default function TextInput({ inputs }) {
  return (
    <div className="flex flex-wrap gap-4">
      {inputs.map((input, index) => (
        <div key={`${input.name}-${index}`} className="flex flex-col">
          <label htmlFor={input.name}>{input.label}</label>
          <input
            type="text"
            name={input.name}
            placeholder={input.sample}
            className="w-65 h-10 border-2 border-gray-300 rounded-lg p-2"
          />
        </div>
      ))}
    </div>
  );
}
