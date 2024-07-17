/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import { skills, experiences, projects } from "./profile";
import Project from "./components/Project";

function IndexPage() {
  return (
    <>
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="ryan-ray-profile2.jpeg"
                  alt=""
                  className="img-fluid"
                />
              </div>

              <div className="col-md-8">
                <h1>Rayn Ray</h1>
                <h3>FullStack Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  nobis unde ratione voluptate obcaecati quod nisi, cupiditate
                  modi. Hic dolorem similique asperiores omnis obcaecati
                  reprehenderit ea expedita magnam quidem cumque?
                </p>
                <a href="/hire-me">Hire Me</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="row py-2">
        <div className="col-md-4">
          <div className="card bg-light">
            <div className="card-body">
              <h1>Skills</h1>
              {skills.map((skill, index) => (
                <Skill key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card bg-light">
            <div className="card-body">
              <h1>Experience</h1>
              <ul>
                {experiences.map((experience, index) => (
                  <Experience key={index} experience={experience} />
                ))}
              </ul>
              <Link href="/experiences" className="btn btn-light">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center text-light">Portfolio</h1>
              </div>
              {projects.map((project, index) => (
                <Project key={index} project={project} />
              ))}
            </div>
            <div className="text-center mt-4">
              <Link href="/portfolio" className="btn btn-outline-light">
                More Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
