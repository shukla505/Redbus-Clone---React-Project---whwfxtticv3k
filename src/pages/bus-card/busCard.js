import "./busCard.css";
import React, { useEffect, useState } from "react";
import { BusListApi } from "../../services/bus-list-api";
import { useSearchParams } from "react-router-dom";
import SeatBook  from "../seat-booking-page/SeatBook";
const BusCard = () => {
const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useSearchParams();
  const searchQuery = query.get("busName");

  let price;

  useEffect(() => {
    const fetchBus = async () => {
      setLoading(true);
      const bus = await BusListApi.fetchBusByName(searchQuery)  
      setData(bus);
      setLoading(false);
    };
    fetchBus().catch(console.error);
  }, [searchQuery]);


for (var {ticketPrice: p}  of data) {
  price = p;
}
  if (!loading && !data) {
    return (<div className="error">bus not found. Please visit to see all available Buses</div>);
  }

  return (
    <div className="busData">
      {loading ? (
        // <div className="loader">loading...</div>
        <span className="loader"></span>
      ) : (
        <div>
            {
                data.map((item) => {
                  
                    return (
                        <div key={item.busName} className="card">
                            <div className="bus-name cardItem">{item.busName}</div>
                            <div className="departure-time cardItem"><div className="itemName">DEPARATURE</div>{item.departureTime}</div>
                            <div className="arrival-time cardItem"><div className="itemName">ARRIVAL</div>{item.arrivalTime}</div>
                             {/* <div className="rating">{}</div> */}
                             <div className="price cardItem">{`${item.ticketPrice}/-`}</div>
                             
                        </div>
                    )
                })
            }
            <div>
              <SeatBook priceValue = {price} data = {data}></SeatBook>
              
            </div>
            
           </div>
      )}
    </div>
  )
}

export { BusCard };
