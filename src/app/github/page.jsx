/* eslint-disable @next/next/no-img-element */
const getData = async () => {
  try {
    const res = await fetch("https://api.github.com/users/adore1968");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

async function GithubPage() {
  const user = await getData();
  console.log(user);
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card card-body text-center">
          <h1>{user.name}</h1>
          <img src={user.avatar_url} alt={user.name} />
          <p>{user.bio}</p>
          <a
            href={user.blog}
            target="_blank"
            className="btn btn-outline-secondary my-2"
          >
            My Blog
          </a>
          <a
            href={user.html_url}
            target="_blank"
            className="btn btn-outline-secondary"
          >
            Go to Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default GithubPage;
