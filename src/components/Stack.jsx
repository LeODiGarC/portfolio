const Stack = ({name, icon}) => {
  return (
    <div className="flex flex-col gap-2 items-center p-5">
      <svg className="w-10 h-10 text-black dark:text-white transition-all">
        <use href={`/sprites.svg#icon-${icon}` } />
      </svg>
      <p>{name}</p>
    </div>
  );
};

export default Stack;
