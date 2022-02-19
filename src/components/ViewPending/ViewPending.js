import './ViewPending.css';

const ViewPending = ({chores}) => {
  return (
    <div className="ViewPending">
      { chores ?
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
      : <div 
      className="button-container">
        <h1>No Pending Chores</h1>
        </div>
      }
    </div>
  );
}

export default ViewPending;