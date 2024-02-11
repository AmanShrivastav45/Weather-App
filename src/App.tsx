import "./App.css";

function App() {
  return (
    <div className="flex align-center justify-center h-screen w-screen">
      <div className="h-[80px] w-full  fixed grid place-items-center p-2">
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white focus:outline-none"
          >
            Search
          </label>
          <div className="relative w-[720px] h-[90%] mt-2">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-[#1a1a1a] rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-[#2a2a2a] dark:placeholder-gray-400 dark:text-white dark:focus: focus:outline-none dark:focus:border-blue-500"
              placeholder="Search for locations"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="h-full w-full flex align-center justify-between mt-20">
        <div className="h-[87%] w-[20%]  ml-4 flex justify-start align-center flex-col p-2 gap-6">
          <div className="w-full  bg-[#2a2a2a] rounded-md h-[39%]"></div>
          <div className="w-full  bg-[#2a2a2a] rounded-md h-[59%]"></div>
        </div>
        <div className="h-[87%] w-[80%]  mr-4 flex justify-start align-center flex-col p-2 gap-6">
          <div className="w-full bg-[#2a2a2a] rounded-md  h-[65%]"></div>
          <div className="w-full bg-[#2a2a2a] rounded-md  h-[34%]"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
