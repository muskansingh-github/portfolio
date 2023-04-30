import { Link } from "react-router-dom";
import React from 'react' 

function Navbar(){
    return( 
        <div className="rounded-2xl px-4 py-3 bg-gradient-to-r from-slate-50 to-slate-300 text-zinc-900 container mx-auto flex items-center justify-center">
            <Link to="/" className="text-5xl font-Sacramento no-underline text-black">Muskan Singh</Link>

            <div className="ml-auto flex gap-5 text-4xl font-Bruno">
                <Link to="/projects" className="p-2 no-underline text-black text-3xl">Projects</Link>
                <Link to="about" className="p-2 no-underline text-black text-3xl">About</Link>
                <Link to="/contact" className="p-2 no-underline text-black text-3xl">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar;
