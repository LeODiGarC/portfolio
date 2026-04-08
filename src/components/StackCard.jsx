const StackCard = ({ name, children}) => {
  return (
    <div className="flex flex-col items-center text-center justify-between p-8 md:flex-row gap-8">
      <h3 className="text-2xl">{name}</h3>
      <div className="flex flex-wrap gap-4 items-center justify-start bg-background/60 rounded-2xl">
        {children}
      </div>
    </div>
  );
};

export default StackCard;
