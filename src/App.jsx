
function App() {

  return (
    <>
<body class="p-6 bg-slate-100">

  <div class="m-4">
    <h1 class="text-3xl font-bold underline text-center bg-gradient-to-b from-blue-500 to-purple-600 text-white p-4 mb-4">
      Hello world!
    </h1>

    <div class="flex flex-row gap-x-[40px] items-start justify-center">
      
      <div class="h-100 w-150 bg-gradient-to-t from-yellow-500 to-red-600 relative flex justify-center items-center p-2 overflow-hidden">
        <div class="absolute h-40 w-40 bg-red-600 rounded-full z-10 opacity-90 hover:bg-sky-700 hover:w-50 hover:h-50 transition-all duration-300"></div>
        
        <p class="relative z-0 text-center text-sm font-medium text-black px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste incidunt itaque corrupti, possimus ullam eos quis vero minima animi id, repellat est neque iure sed temporibus dolor maxime molestias non!
        </p>
      </div>

      <div class="h-100 w-150 bg-gradient-to-t from-gray-500 to-black-600 text-center text-white p-4 flex justify-center items-center">
        Tailwind css
      </div>

    </div>
  </div>

</body>
  
    </>
  )
}

export default App
