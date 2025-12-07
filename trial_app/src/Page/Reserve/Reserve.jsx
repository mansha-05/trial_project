import React from "react";
import "./Reserve.css";

function Reserve() {
  return (
    <div className="reserve-container">
      {/* Title */}
      <div className="reserve-header">
        <h1>Reserve a Table</h1>
        <p>Book your table for an unforgettable dining experience</p>
      </div>

      <div className="reserve-content">
        {/* LEFT SIDE — FORM */}
        <div className="reservation-form">
          <h2>Reservation Details</h2>

          <label>Full Name</label>
          <input type="text" placeholder="John Doe" />

          <label>Email</label>
          <input type="email" placeholder="john@example.com" />

          <label>Phone</label>
          <input type="text" placeholder="+1 (555) 123-4567" />

          <label>Date</label>
          <input type="date" />

          <label>Time</label>
          <select>
            <option>Select time</option>
            <option>6:00 PM</option>
            <option>7:00 PM</option>
            <option>8:00 PM</option>
          </select>

          <label>Number of Guests</label>
          <select>
            <option>Select guests</option>
            <option>1–2 Guests</option>
            <option>3–4 Guests</option>
            <option>5–6 Guests</option>
          </select>

          <label>Special Requests (Optional)</label>
          <textarea placeholder="Any special requirements or preferences..."></textarea>

          <button className="reserve-btn">Confirm Reservation</button>
        </div>

        {/* RIGHT SIDE — TABLE CARDS + POLICY */}
        <div className="reservation-right">
          <h2>Available Tables</h2>

          <div className="table-grid">
            {[
              { id: "Table 1", guests: "Up to 2 guests", type: "Window" },
              { id: "Table 2", guests: "Up to 2 guests", type: "Window" },
              { id: "Table 4", guests: "Up to 4 guests", type: "Center" },
              { id: "Table 6", guests: "Up to 6 guests", type: "Private" },
              { id: "Table 7", guests: "Up to 6 guests", type: "Private" },
              { id: "Table 9", guests: "Up to 2 guests", type: "Bar" }
            ].map((table) => (
              <div className="table-card" key={table.id}>
                <h3>{table.id}</h3>
                <p>{table.guests}</p>
                <small>📍 {table.type}</small>
              </div>
            ))}
          </div>

          <div className="policy-box">
            <h3>Reservation Policy</h3>
            <ul>
              <li>Reservations must be made at least 2 hours in advance</li>
              <li>Table will be held for 15 minutes past reservation time</li>
              <li>Please call us for groups larger than 8 people</li>
              <li>Cancellations must be made 24 hours in advance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reserve;
