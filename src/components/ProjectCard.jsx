import { Link } from "lucide-react";

const ProjectCard = ({ name, img, title="", description="", children, github = "", url, notPublic = false}) => {
  return (
    <div className="flex flex-col gap-4 justify-start p-4 bg-background/60 rounded-2xl">
      <div className="flex flex-wrap gap-4 items-center">{children}</div>
      <img src={img} alt={img} title={title} description={description} className="w-150 h-auto rounded-xl shadow" />
      <h3 className="text-2xl">{name}</h3>
      <div className="flex gap-4 items-center">
        {notPublic === false && <a
          href={github}
          target="_blank"
          className="cursor-pointer flex flex-wrap items-center justify-center gap-2">
          <svg className="w-6 h-6 text-black dark:text-white transition-all">
            <use href="/sprites.svg#icon-github" />
          </svg>
          <p className="underline">Ver en GitHub</p>
        </a>}
        <a
          href={url}
          target="_blank"
          className="p-4 bg-background/60 rounded-xl cursor-pointer flex flex-wrap items-center justify-center gap-2 hover:bg-background/80">
          <p>Visitar</p>
          <Link className="size-4" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
