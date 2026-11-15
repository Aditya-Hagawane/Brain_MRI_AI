
function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  onClick
}) {
  return (
    <div className="empty-state">

      <div className="empty-icon">
        {Icon && <Icon size={29} />}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      {action && (
        <button
          className="secondary-btn"
          onClick={onClick}
        >
          {action}
        </button>
      )}

    </div>
  );
}

export default EmptyState;
