/* eslint-disable @next/next/no-img-element */
function Project({ project }) {
  return (
    <div className="col-md-4 p-2">
      <div className="card h-100">
        <div className="overflow">
          <img
            src={project.image}
            alt={project.name}
            className="img-fluid card-img-top"
          />
        </div>
        <div className="card-body">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href="#">Know more</a>
        </div>
      </div>
    </div>
  );
}

export default Project;
