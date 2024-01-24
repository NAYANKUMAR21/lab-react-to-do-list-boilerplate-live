import { useState } from 'react';
import Read from './Components/Read';
import Button from './Components/Button';
function App() {
  const [inputValue, setInputValue] = useState('');
  const [storeArray, setStoreArray] = useState([]);

  const handlerChange = (e) => {
    // console.log(e.target.value);

    setInputValue(e.target.value);
  }; // setValue e.target.value
  const filterFunction = (id) => {
    console.log('this is id that needs to filtered out', id);
    let filteredArray = storeArray.filter((element, index) => {
      return index !== id;
    });

    console.log(filteredArray);

    setStoreArray(filteredArray);
  }; // filter method and setArray

  const handleCreateInput = () => {
    let spreadData = [...storeArray, inputValue];

    setStoreArray(spreadData);
  }; // spread operater

  const handleUpdate = (id) => {
    let entredSentence = prompt('Entere the text that you want to update!..');
    console.log(entredSentence);

    let updatedArray = storeArray.map((element, index) => {
      if (id == index) {
        return entredSentence;
      } else {
        return element;
      }
    });
    console.log(updatedArray);

    setStoreArray(updatedArray);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your todo..."
        onChange={handlerChange}
      />

      <Button fnCreate={handleCreateInput} />

      <Read
        Data={storeArray}
        updateFN={handleUpdate}
        deleteFN={filterFunction}
      />
    </div>
  );
}

export default App;
