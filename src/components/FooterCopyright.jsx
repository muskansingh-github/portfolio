import React from 'react'
import { Link } from "react-router-dom"

function AppFooterCopyright() { 
	return (
		<div className="font-bolder flex justify-center items-center text-center">
			<div className="text-xl text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<Link to="/" className="text-4xl font-Sacramento no-underline text-white"> made with love by muskan&#10084;&#65039;</Link>
			</div>
		</div> 
	); 
}

export default AppFooterCopyright;
