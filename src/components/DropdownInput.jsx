/* eslint-disable react/prop-types */
export default function DropdownInput({ dropdowns }) {
  return (
    <div className="flex flex-wrap gap-4">
      {dropdowns.map((dropdown, index) => (
        <div key={`${dropdown.name}-${index}`} className="flex flex-col">
          <label htmlFor={dropdown.name}>{dropdown.label}</label>
          <select
            name={dropdown.name}
            className="w-65 h-10 border-2 border-gray-300 rounded-lg p-2 bg-white"
            defaultValue={dropdown.default}
          >
            {dropdown.options.map((option, i) => (
              <option key={`${dropdown.name}-option-${i}`} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}
