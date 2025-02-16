import TextInput from './components/TextInput';
import DropdownInput from './components/DropdownInput';

function App() {
  const textData = [
    {
      name: 'title',
      label: 'Title',
      sample: 'Study React Hooks',
    },
    {
      name: 'description',
      label: 'Description',
      sample: 'build and application with hooks',
    },
  ];

  const dropdownData = [
    {
      name: 'category',
      label: 'Category',
      default: 'personal',
      options: [
        { value: 'business', label: 'Business' },
        { value: 'personal', label: 'Personal' },
        { value: 'miscellaneous', label: 'Miscellaneous' },
      ],
    },
    {
      name: 'priority',
      label: 'Priority',
      default: 'medium',
      options: [
        { value: 'low', label: 'Low' },
        { value: 'medium', label: 'Medium' },
        { value: 'high', label: 'High' },
      ],
    },
  ];

  return (
    <div>
      <TextInput inputs={textData} />
      <DropdownInput dropdowns={dropdownData} />
    </div>
  );
}

export default App;
