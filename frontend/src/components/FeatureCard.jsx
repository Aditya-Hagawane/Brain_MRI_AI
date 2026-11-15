
function FeatureCard({
  icon: Icon,
  title,
  description
}) {
  return (
    <div className="panel feature-card">

      <div className="feature-icon">
        {Icon && <Icon size={25} />}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

    </div>
  );
}

export default FeatureCard;
