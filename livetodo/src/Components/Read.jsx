function Read(props) {
  console.log(props);
  let storeArray = props.Data;
  let filterFunction = props.deleteFN;
  let handleUpdate = props.updateFN;
  return (
    <div>
      {storeArray.map((element, index) => {
        return (
          <div style={{ display: 'flex' }} key={index}>
            <h1>{element}</h1>
            <button
              onClick={() => {
                filterFunction(index);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                handleUpdate(index);
              }}
            >
              Update
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Read;
