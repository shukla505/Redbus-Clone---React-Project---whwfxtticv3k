import { useNavigate, createSearchParams } from "react-router-dom";
import "./item.css";


const Item = ({ data }) => {
  
  const { busName, departureTime, arrivalTime, ticketPrice } = data;

  const navigate = useNavigate();
  const handleQuery = () => {
    navigate(
      `/busName/?${createSearchParams({ busName: busName})}`
    );  
  }

  return (
    <div className="card" onClick={handleQuery}>
      <div className="bus-name cardItem" >
        {/* <Link to={`/bus/${id}`}>{busName}</Link> */}
        {busName}
        
      </div>
      <div className="departure-time cardItem"><div className="itemName">DEPARATURE</div>{departureTime}</div>
      <div className="arrival-time cardItem"><div className="itemName">ARRIVAL</div>{arrivalTime}</div>
      {/* <div className="rating">{}</div> */}
      <div className="price cardItem">{`${ticketPrice}/-`}</div>
    </div>
  );
};

export { Item };
