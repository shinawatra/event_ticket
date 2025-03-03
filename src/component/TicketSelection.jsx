import { Link } from 'react-router';
import { useState, useContext } from 'react';
import { ContextData } from '../DataProvider';

function TicketSelection() {
  const [activebuton, setActiveButton] = useState(null);
  const { handleBtns, handleChange, selectedValue } = useContext(ContextData);

  const handClick = (i) => setActiveButton(i);
  const activeBtn = {
    backgroundColor: '#12464e',
  };

  return (
    <section className="form-div">
      <header className="ticket-title-box">
        <p>Tickets Selection</p>

        <p>
          Step <span>1/3</span>
        </p>
      </header>

      <div className="ticket-progress-box">
        <div className="ticket-progress"></div>
      </div>

      <div className="conf-info">
        <h1>Techember Fest ”25</h1>
        <p>
          Join us for an unforgettable experience at Techember Fest Secure your
          spot now.
        </p>
        <p>📍 Lagos | September 20th, 2025 | 7:00 PM</p>
      </div>

      <hr className="form-hr" />

      <div className="tickets-box">
        <p>Select Ticket Type:</p>

        <div className="btn-box" onClick={handleBtns}>
          <button
            className="second-btn"
            style={activebuton === 0 ? activeBtn : null}
            onClick={() => handClick(0)}
          >
            <span className="free-span">Free</span>
            <span className="reg-span">REGULAR ACCESS</span>
            <span className="free-num-span">20/52</span>
          </button>

          <button
            className="second-btn"
            style={activebuton === 1 ? activeBtn : null}
            onClick={() => handClick(1)}
          >
            <span className="vip-amount-span">$150</span>
            <span className="vip-access">VIP ACCESS</span>
            <span className="vip-num">20/52</span>
          </button>

          <button
            className="second-btn"
            style={activebuton === 2 ? activeBtn : null}
            onClick={() => handClick(2)}
          >
            <span className="last-vip-span">$250</span>
            <span className="last-access">VVIP ACCESS</span>
            <span className="last-num">20/52</span>
          </button>
        </div>
      </div>

      <div className="num-ticket-box">
        <label htmlFor="number">Number of Tickets</label>
        <select id="number" value={selectedValue} onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div className="cal-next-box">
        <Link to="#" className="cancel-btn">
          Cancel
        </Link>
        <Link to="attendee" className="next-btn">
          Next
        </Link>
      </div>
    </section>
  );
}

export default TicketSelection;
