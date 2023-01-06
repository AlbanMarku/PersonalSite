type Props = {
  title: string;
};

function ProjectCard({ title }: Props) {
  return (
    <div className="ProjectCard">
      <div className="screenshotArea">
        <h2 className="projectTitle">{title}</h2>
      </div>
      <div className="buttonArea">
        <button type="button">Live app</button>
        <button type="button">GitHub repo</button>
      </div>
    </div>
  );
}

export default ProjectCard;
