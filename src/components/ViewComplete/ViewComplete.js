import './ViewComplete.css';

const ViewComplete = ({ completed }) => {
  return (
    <ul className="ViewComplete">
      {completed.map(chore => 
        <li  
          className="completed-item"
          key={chore.id}
          >
          <p>${chore.price.toFixed(2)}</p>
          <p>{chore.title}</p>
        </li>)}

    </ul>
  );
}

export default ViewComplete;