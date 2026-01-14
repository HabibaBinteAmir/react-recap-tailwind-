import { useState } from "react"

function App() {
   const [open, setOpen] = useState(false);
   const [theme, setTheme] = useState("light");
  return (
    <div className={theme}>
    <div className="flex  items-center justify-between
    p-4 w-100%   dark:bg-slate-900 text-slate-900 dark:text-white 
    ">
      
      <div className="font-bold">logo</div>
      {/* desktop */}
      <div className="hidden sm:flex gap-2 font-medium ">
        <span className="hover:text-sky-200 hover:font-semibold">Home</span>
        <span>About</span>
        <span>Blog</span>
        <span>Contact</span>
         <button className=" text-2xl cursor-pointer " onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "☀️" : "🌙"}
        </button>
      </div>
     <button className="sm:hidden text-2xl cursor-pointer " onClick={()=> setOpen(!open)}>|||</button>
    </div>
     {/* mobile */}
      { open && (<div className=" flex flex-col gap-5 font-bold text-2xl p-10  min-h-screen dark:bg-slate-900 dark:text-white   ">
        <span className="">Home</span>
        <span>About</span>
        <span>Blog</span>
        <span>Contact</span>
         <button className="sm:hidden text-2xl cursor-pointer " onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "☀️" : "🌙"}
        </button>
      </div>)}
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  text-center font-semibold text-2xl sm:text-lg mb-4 dark:bg-slate-950">
      <div className="bg-slate-500 p-4 m-2  text-white rounded-md shadow-amber-400 hover:scale-105 transition-all duration-300 ">feature one</div>
      <div className="bg-slate-500 p-4 m-2  text-white rounded-md shadow-amber-400 hover:scale-105 transition-all duration-300 ">feature two</div>
      <div className="bg-slate-500 p-4 m-2 text-white rounded-md shadow-amber-400 hover:scale-105 transition-all duration-300 ">feature three</div>
      <div className="bg-slate-500 p-4 m-2 text-white rounded-md shadow-amber-400 hover:scale-105 transition-all duration-300 ">feature four</div>
      <div className="bg-slate-500 p-4 m-2 text-white rounded-md shadow-amber-400 hover:scale-105 transition-all duration-300 ">feature five</div>
      <div className="bg-slate-500 p-4 m-2 text-white rounded-md shadow-amber-400 hover:scale-105 transition-all duration-300 ">feature six</div>
      <div className="bg-slate-500 p-4 m-2 text-white rounded-md shadow-amber-400 hover:scale-105 transition-all duration-300 ">feature one</div>
     
    </div>
    </div>
  )
}

export default App
