export const SidePanel = ({ isLeft, children }) => {
  return (
    <div className={`flex flex-col w-full sm:w-1/2 ${isLeft ? "sm:ml-4" : ""}`}>
      {children}
    </div>
  );
};
