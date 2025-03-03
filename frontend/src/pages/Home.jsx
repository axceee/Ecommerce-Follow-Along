
import Navbar from "./header/Navbar";

function Home() {
  

  return (
    <div className=" w-screen h-screen snap-y snap-mandatory overflow-y-scroll ">
   
        <div className="h-screen bg-[url('back2.svg')] w-screen bg-cover snap-start"><Navbar /></div>
        <div className="h-screen bg-[url('back2.svg')] w-screen bg-cover snap-start"></div>
        <div className="h-screen bg-[url('back2.svg')] w-screen bg-cover snap-start"></div>
        <div className="h-screen bg-[url('back2.svg')] w-screen bg-cover snap-start"></div>
    </div>
  );
}

export default Home;
