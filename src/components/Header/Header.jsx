import logo from '../../assets/logo.svg';

export const Header = () => {
  return (
    <div className="flex w-full mb-10 pb-4 border-b-2">
      <img src={logo} className="mr-2 h-10"></img>
      <h1 className="flex text-3xl">Tweet Saver</h1>
    </div>
  );
};
