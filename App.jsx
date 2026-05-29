import { useEffect, useState } from "react";
import "./index.css";

const API = "https://paytm-backend-1-ob75.onrender.com";

function App() {

  // Recharge API

  const [mobileNumber, setMobileNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [amount, setAmount] = useState("");

  // Booking API

  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [ticketType, setTicketType] = useState("");

  // API Lists

  const [recharges, setRecharges] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchRechargeHistory();
    fetchBookings();
  }, []);

  // Recharge APIs

  const fetchRechargeHistory = async () => {
    const res = await fetch(`${API}/api/recharge`);
    const data = await res.json();
    setRecharges(data);
  };

  const rechargeNow = async () => {

    if (!mobileNumber || !operator || !amount) {
      alert("Fill all fields");
      return;
    }

    await fetch(`${API}/api/recharge`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mobileNumber,
        operator,
        amount
      })
    });

    alert("Recharge Successful");

    setMobileNumber("");
    setOperator("");
    setAmount("");

    fetchRechargeHistory();
  };

  // Booking APIs

  const fetchBookings = async () => {
    const res = await fetch(`${API}/api/booking`);
    const data = await res.json();
    setBookings(data);
  };

  const bookTicket = async () => {

    if (!name || !from || !to || !date || !ticketType) {
      alert("Fill all fields");
      return;
    }

    await fetch(`${API}/api/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        from,
        to,
        date,
        ticketType
      })
    });

    alert("Booking Successful");

    setName("");
    setFrom("");
    setTo("");
    setDate("");
    setTicketType("");

    fetchBookings();
  };

  return (
    <div className="app">

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo">
          <img
            src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo_new.svg"
            alt=""
          />
        </div>

        <ul className="nav-links">
          <li>Recharge & Bills</li>
          <li>Ticket Booking</li>
          <li>Payments & Services</li>
          <li>Paytm For Business</li>
          <li>Company</li>
        </ul>

        <div className="nav-right">
          <p>⬇ Download App</p>

          <button>Sign In</button>
        </div>

      </nav>

      {/* RECHARGE SECTION */}

      <section className="recharge-container">

        <div className="recharge-left">

          <h2>Recharges & Bill Payments</h2>

          <div className="services">

            <div className="service-box">
              📱
              <p>Mobile Recharge</p>
            </div>

            <div className="service-box">
              📺
              <p>DTH Recharge</p>
            </div>

            <div className="service-box">
              🚗
              <p>FASTag Recharge</p>
            </div>

            <div className="service-box">
              💡
              <p>Electricity Bill</p>
            </div>

            <div className="service-box">
              💳
              <p>Loan EMI</p>
            </div>

            <div className="service-box">
              ➕
              <p>View All</p>
            </div>

          </div>

        </div>

        <div className="recharge-ad">

          <img
            src="https://assetscdn1.paytm.com/images/catalog/view/1726051527180.png"
            alt=""
          />

        </div>

      </section>

      {/* API FORM */}

      <section className="api-section">

        <div className="api-card">

          <h2>Mobile Recharge API</h2>

          <input
            type="text"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />

          <input
            type="text"
            placeholder="Operator"
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
          />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <button onClick={rechargeNow}>
            Recharge Now
          </button>

          <div className="history">

            <h3>Recharge History</h3>

            {
              recharges.map((item) => (
                <div className="history-box" key={item._id}>
                  <p>{item.mobileNumber}</p>
                  <p>{item.operator}</p>
                  <p>₹{item.amount}</p>
                </div>
              ))
            }

          </div>

        </div>

        {/* BOOKING */}

        <div className="api-card">

          <h2>Travel Booking API</h2>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />

          <input
            type="text"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <input
            type="text"
            placeholder="Ticket Type"
            value={ticketType}
            onChange={(e) => setTicketType(e.target.value)}
          />

          <button onClick={bookTicket}>
            Book Ticket
          </button>

          <div className="history">

            <h3>Booking History</h3>

            {
              bookings.map((item) => (
                <div className="history-box" key={item._id}>
                  <p>{item.name}</p>
                  <p>{item.from} ➜ {item.to}</p>
                  <p>{item.ticketType}</p>
                </div>
              ))
            }

          </div>

        </div>

      </section>

      {/* PAY SECTION */}

      <section className="pay-section">

        <div className="pay-left">

          <img
            className="upi"
            src="https://assetscdn1.paytm.com/images/catalog/view/310944/1697527183231.png"
            alt=""
          />

          <h1>
            Pay anyone directly <br />
            from your bank account
          </h1>

          <p>
            Pay anyone, everywhere. Make secure
            payments online using Paytm UPI.
          </p>

        </div>

        <div className="pay-right">

          <img
            src="https://assetscdn1.paytm.com/images/catalog/view_item/728701/1618576143299.png"
            alt=""
          />

        </div>

      </section>

      {/* INSURANCE */}

      <section className="cards">

        <div className="big-card">

          <h1>
            One destination for <br />
            Credit Cards
          </h1>

          <p>
            Credit cards with cashback
            and incredible offers.
          </p>

          <button>Apply Now</button>

        </div>

        <div className="big-card">

          <h1>
            Insurance ka <br />
            Super Market
          </h1>

          <p>
            Explore and purchase insurance
            easily.
          </p>

          <button>Get It Now</button>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-row">
          <p>Investor Relations</p>
          <p>Company</p>
          <p>Recharge & Pay Bills</p>
          <p>Loans and Credit Cards</p>
        </div>

        <h3>© 2025 Paytm Clone</h3>

      </footer>

    </div>
  );
}

export default App;