import "./App.css";
import fitfluencer from "../src/assets/tab-icon.png";

function App() {
  return (
    <>
      <div className="text-3xl font-bold bg-[url(../src/assets/hero-image.jpg)] backdrop  -opacity-50 bg-cover h-screen">
        <div className="flex justify-between">
          <img className="w-1/20 m-10" src={fitfluencer} alt="nav-logo" />
            <ul className="flex justify-around text-white">
              <li className="p-5 m-5 text-6xl">About</li>
              <li className="p-5 m-5 text-6xl">Contact Us</li>
            </ul>
        </div>
        <div className="font-poppins text-9xl text-center text-white tracking-wider relative top-50">
          Your Fitness Journey Starts Here.
        </div>
      </div>
    </>
  );
}

export default App;
