import "./App.css";
import fitfluencer from "../src/assets/tab-icon.png";
import Typewriter from "typewriter-effect";

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
        <div className="font-poppins text-5xl text-center text-white tracking-wider relative top-50 font-extrabold uppercase drop-shadow-lg
        ">
          <Typewriter
          options={{
            strings: ['Your Fitness Journey Begins Here.'],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
          }}
        />
        </div>
        <button type="button" class="py-10 px-10 me-2 mb-2 text-8xl text-poppins font-medium text-gray-900 focus:outline-none bg-white rounded-2xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:white-100 dark:focus:ring-black-100 dark:bg-gray-100 dark:text-white-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 absolute top-250 left-650">Get Started ➤</button>
      </div>
    </>
  );
}

export default App;
