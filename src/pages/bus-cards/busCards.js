import  "./busCards.css";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { BusListApi } from "../../services/bus-list-api";
import { Item } from "../../component/item"
import image2 from "../../images/image-2.png";

const BusCards = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useSearchParams();

  const searchQuery = {
    src: query.get("source"),
    dest: query.get("destination")
  };
  

  useEffect(() => {
    const fetchBuses = async () => {
      setLoading(true);
      const buses =
        searchQuery.src && searchQuery.dest
          ? await BusListApi.fetchBusBySearchQuery(searchQuery)
          : await BusListApi.fetchAllBuses();
      setData(buses);
      setLoading(false);
    };
    fetchBuses().catch(console.error);
  }, [searchQuery.src, searchQuery.dest]);

  const sortByDepartureTime  = () => {
       const sortedData = [...data].sort((a,b) => {
        return a.departureTime > b.departureTime ? 1 : -1
       })
       setData(sortedData)
  }
  const sortByArrivalTime = () => {
    const sortedData = [...data].sort((a,b) => {
      return a.arrivalTime > b.arrivalTime ? 1 : -1
     })
     setData(sortedData)
  }
 const sortByPrice = () =>{
  const sortedData = [...data].sort((a,b) => {
    return a.ticketPrice > b.ticketPrice ? 1 : -1
   })
   setData(sortedData)
 }

  if (!loading && searchQuery.src && searchQuery.dest && !data.length) {
    return (
      <div>
        
        <div>
          <div className="error">No buses found matching your query.</div>
        </div>
        
      </div>
    );
  }

  return (
    <>
      <div>
        <img id="img2" src={image2}></img>
        <div className="busData">
          {loading ? (
            // <div>lodder...</div>
            <span className="loader"></span>
          ) : ( 
            <div>
              
              <div className="sorting" >
              <h4>SORT BY:</h4> 
              <button onClick={sortByDepartureTime}>Departure</button>
              <button onClick={sortByArrivalTime}>Arrival</button>
              <button onClick={sortByPrice}>Price</button>
              </div>
              {
                data.map((bus) => <Item key={bus.busName} data={bus} />)
              }
            </div>
          )}
        </div>
      </div>
      
    </>
  );
};

export { BusCards };
