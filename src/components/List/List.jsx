import "./List.css";

export default function List({ activities, title, onDeleteActivity }) {
  return (
    <div className="List">
      {activities.length > 0 && <h2>{title}</h2>}
      <ul>
        {activities.map((activity) => (
          <div className="List__item" key={activity.id}>
            <div className="List__item__container">
              <li>{activity.name}</li>
              <button
                type="button"
                onClick={() => onDeleteActivity(activity.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
