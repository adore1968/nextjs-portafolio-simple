function Skill({ skill }) {
  return (
    <div className="py-3">
      <h5>{skill.name}</h5>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${skill.percentage}%` }}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}

export default Skill;
