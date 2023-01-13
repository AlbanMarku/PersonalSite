type Props = {
  title: string;
  image: string;
  appLink: string;
  repoLink: string;
};

function ProjectCard({ title, image, appLink, repoLink }: Props) {
  const handleApp = () => {
    window.open(appLink, '_blank');
  };

  const handleRepo = () => {
    window.open(repoLink, '_blank');
  };

  return (
    <div className="ProjectCard">
      <div
        className="screenshotArea"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="projectTitle">{title}</div>
      </div>
      <div className="buttonArea">
        <button onClick={handleApp} type="button">
          Live app
        </button>
        <button onClick={handleRepo} type="button">
          GitHub repo
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
