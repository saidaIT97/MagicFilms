import React from 'react'
import { NavLink } from 'react-router-dom'

 const Signup = () => {
  return (
   <>
 
<div className="signup max-w-[360px] mx-auto bg-white" >
        <div className="flex flex-col items-center mt-[10vh] p-2.5 relative"> 
        <div className='signup-x absolute top-2 right-3 mt-2 mr-2 ' > 
        <NavLink to="/main"><i className="fa-solid fa-xmark "></i> </NavLink>
        
            </div> 
       
            <h2 className="mb-5 text-gray-900 font-mono font-bold text-xl">Sign Up</h2>
           
            <button className="flex items-center mb-2 justify-center transition ease-in-out delay-50 px-3 py-2.5 space-x-2 bg-white-700 border border-slate-600 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:ring-opacity-50">
            <i class="fa-brands fa-google"></i>
                <span className="text-gray-700 font-medium">Continue with Google</span>
            </button>
            <span className="mb-2 text-gray-900">Or</span>
            <form>
                <input type="text" className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " placeholder="Email" value=""/>
                <input type="password" className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " placeholder="Password" value=""/>
                <input type="password" className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " placeholder="Confirm password" value=""/>
                <button className="bg-slate-900 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]">Log In</button>
            </form>
            <p className="text-center mt-3 text-[14px]">Already have an account? 
                <a href="/signup" className="text-gray-600">Log In</a>
            </p>
            <p className="text-center mt-3 text-[14px]">By clicking continue, you agree to our 
                <a href="/terms" className="text-gray-600">Terms of Service</a> and <a href="/privacy" className="text-gray-600">Privacy Policy</a>.
            </p>
        </div>
    </div>

   </>
  )
}
export default Signup