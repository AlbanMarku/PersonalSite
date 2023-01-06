type Props = {
  title: string;
  image: string;
};

function ProjectCard({ title, image }: Props) {
  return (
    <div className="ProjectCard">
      <div
        className="screenshotArea"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="projectTitle">{title}</div>
      </div>
      <div className="buttonArea">
        <button type="button">Live app</button>
        <button type="button">GitHub repo</button>
      </div>
    </div>
  );
}

export default ProjectCard;
