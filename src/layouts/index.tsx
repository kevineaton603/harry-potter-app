import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <header className="w-screen bg-slate-200 flex justify-center items-center p-1">
        <h1>Harry Potter App</h1>
      </header>
      <main className="w-screen flex flex-col">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
