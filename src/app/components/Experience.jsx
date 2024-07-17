function Experience({ experience }) {
  return (
    <li>
      <h3>{experience.name}</h3>
      <h5>
        {experience.from}-{experience.to ? experience.to : "Current"}
        <p>{experience.description}</p>
      </h5>
    </li>
  );
}

export default Experience;
