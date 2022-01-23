import './SelectChore.css';

const SelectChore = ({ chores }) => {
  return (
    <div className="SelectChore">
      <div 
        className="button-container">
          {chores.map(chore => 
            <button  
              className="chore-button"
              key={chore.id}
              >
              <p>${chore.price.toFixed(2)}</p>
              <p>{chore.title}</p>
            </button>)}
      </div>

    </div>
  );
}

export default SelectChore;