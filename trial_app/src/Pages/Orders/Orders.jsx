import "./Orders.css";

function Orders() {
  const activeOrders = [
    {
      id: "ORD-001",
      date: "11/16/2025",
      time: "10:30 AM",
      progress: 50,
      status: "Preparing",
      items: [
        { name: "2x Margherita Pizza", price: "29.98" },
        { name: "1x Chocolate Lava Cake", price: "9.99" },
      ],
      total: "39.97",
      table: "5",
    },
    {
      id: "ORD-002",
      date: "11/16/2025",
      time: "11:15 AM",
      progress: 75,
      status: "Ready",
      items: [
        { name: "1x Truffle Pasta", price: "22.99" },
        { name: "1x Caesar Salad", price: "11.99" },
      ],
      total: "34.98",
      table: "12",
    },
    {
      id: "ORD-003",
      date: "11/16/2025",
      time: "11:45 AM",
      progress: 20,
      status: "Pending",
      items: [
        { name: "1x Veg Burger", price: "9.99" },
        { name: "1x Fries", price: "4.99" },
      ],
      total: "14.98",
      table: "7",
    },
  ];

  // Order History (Empty for now)
  const orderHistory = [];

  return (
    <div className="orders-container">

      <h2 className="orders-title">My Orders</h2>
      <p className="orders-subtitle">
        Track your current and past orders
      </p>

      {/* ACTIVE ORDERS */}
      <h3 className="section-heading">Active Orders</h3>

      <div className="orders-grid">
        {activeOrders.map((order, index) => (
          <OrderCard order={order} key={index} />
        ))}
      </div>

      {/* ORDER HISTORY SECTION */}
      <h3 className="section-heading" style={{ marginTop: "50px" }}>
        Order History
      </h3>

      <div className="history-box">
        {orderHistory.length === 0 ? (
          <p className="empty-history">No order history yet</p>
        ) : (
          orderHistory.map((hist, i) => (
            <p key={i}>{hist.id}</p>
          ))
        )}
      </div>
    </div>
  );
}

function OrderCard({ order }) {
  return (
    <div className="order-card">
      <div className="order-header">
        <h2 className="order-id">Order #{order.id}</h2>

        <span className={`status-badge ${order.status.toLowerCase()}`}>
          {order.status}
        </span>
      </div>

      <p className="order-date">
        {order.date} at {order.time}
      </p>

      {/* PROGRESS */}
      <div className="progress-container">
        <p className="progress-label">Order Progress</p>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${order.progress}%` }}
          ></div>
        </div>

        <p className="progress-percent">{order.progress}%</p>
      </div>

      {/* ITEMS */}
      <div className="items-section">
        <p className="items-title">Items:</p>

        <ul className="items-list">
          {order.items.map((item, i) => (
            <li key={i} className="item-row">
              <span>{item.name}</span>
              <span>Rs {item.price}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* TOTAL */}
      <div className="total-row">
        <span>Total</span>
        <span className="total-amount">Rs {order.total}</span>
      </div>

      <p className="table-number">Table: #{order.table}</p>
    </div>
  );
}

export default Orders;
