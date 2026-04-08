const ProjectIcons = ({ icons }) => {
  return icons.map((i) => (
    <svg key={i} className="w-8 h-8 text-black dark:text-white transition-all">
      <use href={`/sprites.svg#icon-${i}`} />
    </svg>
  ));
};

export default ProjectIcons;
