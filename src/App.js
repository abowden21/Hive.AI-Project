import logo from './logo.svg';
import './App.css';
import Dropdown from './Dropdown';

function App() {

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const handleSelect = (selectedOptions) => {
      console.log('Selected:', selectedOptions);
  };

  return (
    <div className="App">
      <div className="dropdown-container">
        <h2>Single Select</h2>
        <Dropdown options={options} onSelect={handleSelect} />
      </div>

      <div className="dropdown-container">
        <h2>Multi Select</h2>
        <Dropdown options={options} multiSelect={true} onSelect={handleSelect} />
      </div>
    </div>
  );
}

export default App;
