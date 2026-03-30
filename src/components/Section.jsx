const Section = ({ id, className = "", children, reverseBG = false }) => {
  return (
    <div>
      <section
        id={id}
        className={`min-h-screen px-6 py-12 flex flex-col md:flex-row justify-center text-center md:text-start items-center gap-10 bg-linear-to-b ${reverseBG ? "from-blue-400 to-blue-500 dark:from-slate-800 dark:to-slate-900" : " from-blue-500 to-blue-400 dark:from-slate-900 dark:to-slate-800"} text-gray-800 dark:text-gray-100 transition-all duration-300 ease-in-out ${className}`}>
        {children}
      </section>
    </div>
  );
};

export default Section;
