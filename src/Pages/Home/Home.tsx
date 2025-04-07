import Bio from "../../Components/Bio";

function Home() {
  console.log(`
    (\\__/)
    (•ㅅ•)っ🍪
    /つ  ♥
 Have a Cookie!
 `);
  return (
    <div className="bg-black min-h-screen w-full pt-20">
      <div className="text-center">
        <h2
          className="text-5xl sm:text-6xl md:text-7xl text-white font-bold 
          [text-shadow:_3px_1px_0_rgb(27_251_249_/_100%),_-3px_-1px_0_rgb(255_63_74_/_100%)]"
        >
          Yuvraj
        </h2>
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-[#afafaf] text-sm sm:text-xl md:text-xl text-center max-w-lg mx-auto mt-10 p-5">
          Hello, Namaste, Welcome to my website
        </h2>
      </div>
      <div>
        <Bio />
      </div>
    </div>
  );
}

export default Home;
