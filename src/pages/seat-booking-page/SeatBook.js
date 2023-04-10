import React, { useState } from 'react'
import "./seatBooking.css"

function SeatBook({priceValue}) {
  const [count, setCount] = useState(0);
    // const container = document.querySelectorAll('.container');
    const seats = document.querySelectorAll('.row .seat:not(.occupied)');
    let ticketPrice = priceValue;
    

    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }
    const updateSelectedSeatsCount = () => {
        const selectedSeats = document.querySelectorAll('.selected');
      
        const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
      
        localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
        setCount(selectedSeats.length);
        
      };
      
      const clickHandler = (e) => {
        if (
            e.target.classList.contains('seat') &&
            !e.target.classList.contains('occupied')
          ) {
            e.target.classList.toggle('selected');
        
            updateSelectedSeatsCount();
          }
        }
        const[msg, setMsg] = useState("");
        const buttonHandler = () => {
          
          if(count === 1){
            setMsg("Your Ticket Book Sucessfully")
          } else if(count > 1){
            setMsg("Your Tickets Book Sucessfully")
          }
           else {
            setMsg("Please Select Seats")
           }
           setTimeout(() => {
            setMsg("")
           }, 5000); 
           
          }

        


  return (
    <div>
       <div className="container" onClick={clickHandler}>

      <div className="row-1">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>

      <div className="row-1">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>

      <div className="row-2">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
      </div>
    </div>
    <div>
    <p className="text">
      Total Selected Seats: {count}
      <br/>
      Total Price: {ticketPrice * count}
    </p>
    </div>
    <div className="ticket"><button onClick={buttonHandler} >BOOK Ticket</button></div>
    <span id='msg'>{msg}</span>
    </div>
    
  )
}

export default SeatBook;
