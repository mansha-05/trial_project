import "./StatCard.css";

function StatCard({ title, value, icon }) {
  return (
    <div className="stat-card">
      <div className="stat-left">
        <h4>{title}</h4>
        <p>{value}</p>
      </div>

      <i className={icon}></i>
    </div>
  );
}

export default StatCard;
