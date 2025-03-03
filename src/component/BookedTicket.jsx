import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router';
import { ContextData } from '../DataProvider';

function BookedTicket() {
  const { displayOption, selectedValue, formData } = useContext(ContextData);
  const location = useLocation().state;

  return (
    <section className="booked-box">
      <header className="booked-title-box">
        <p>Ready</p>

        <p>
          Step <span>3/3</span>
        </p>
      </header>
      <div className="booked-progress-box">
        <div className="booked-progress"></div>
      </div>

      <div className="ticket-booked">
        <h1>Your Ticket is Booked!</h1>
        <p>Check your email for a copy or you can download</p>
      </div>

      <div className="display-ticket">
        <div className="img-ticket-box">
          <div className="first-ticket-img">
            <img src="ticket.png" alt="Ticket" />
            <img src="Barcode.png" alt="Barcode" className="bar" />

            {/* Image and text info insertion */}
            <section className="bk-gen-display">
              <div className="bk-heading">
                <h1>Techember Fest ”25</h1>
                <p>📍 04 Rumen road Ikoyi, Lagos</p>
                <p>📅 September 20th, 2025 | 7:00 PM</p>
              </div>

              {/* image display box */}
              <div className="bk-img-section">
                <ul>
                  {location.map((file) => (
                    <li key={file.public_id}>
                      <img
                        src={file.secure_url}
                        alt={file.public_id}
                        className="bk-uploaded-img"
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {/* display Info */}
              <div className=" booked-info">
                <div className="top">
                  <aside className="name-aside">
                    <span>Enter your name</span>
                    <p>{formData.name}</p>
                  </aside>
                  <aside className="email-aside">
                    <span>Enter your email</span>
                    <p>{formData.email}</p>
                  </aside>
                </div>
                {/* bottom Info */}
                <div className="bottom">
                  <aside className="bottom-aside-1">
                    <span className="aside-span-1">Ticket Type</span>
                    <p className="aside-p-1">{displayOption}</p>
                  </aside>
                  <aside className="bottom-aside-2">
                    <span className="aside-span-2">Ticket for</span>
                    <p className="aside-p-2">{selectedValue}</p>
                  </aside>
                </div>
                {/* special req */}
                <div className="req-box">
                  <aside className="req-aside">
                    <span className="req-span">Special request?</span>
                    <p className="req-p">{formData.specialRequest}</p>
                  </aside>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="booked-form-btn">
          <Link to="/">Book Another Ticket</Link>
          <Link to="#">Download Ticket</Link>
        </div>
      </div>
    </section>
  );
}

export default BookedTicket;
