
function StatCard({ label, value, icon: Icon, note }) {
  return (
    <div className="stat-card">

      <div className="stat-top">

        <span>{label}</span>

        {Icon && <Icon size={20} />}

      </div>

      <h2>{value}</h2>

      <span className="stat-note">
        {note || "Project overview"}
      </span>

    </div>
  );
}

export default StatCard;
