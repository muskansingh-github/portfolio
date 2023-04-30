import React from 'react'

function Layout({children}){
  return(
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... min-h-screen text-zinc-50 p-4">
          <div className="container mx-auto">
          {children}
          </div> 
      </div>
  )
} 
export default Layout;