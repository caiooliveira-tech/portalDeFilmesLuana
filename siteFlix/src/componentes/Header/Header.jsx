import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <div className="pb-4"> 
        <header className="flex justify-around bg-marrom text-white p-4">
            <span>LunFlix</span>
            <Navbar/>
        </header>
        </div>
     );
}

export default Header ;