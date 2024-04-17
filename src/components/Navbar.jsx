import React from 'react'

const Navbar = ({setIsLogin}) => {
  return (
    <div>
        <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">TechniFy Todo</a>
        </div>
        <div className="flex-none">
            <button className="btn btn-outline btn-success" onClick={()=>{setIsLogin(false)}} >
             Logout
            </button>
        </div>
        </div>
    </div>
  )
}

export default Navbar