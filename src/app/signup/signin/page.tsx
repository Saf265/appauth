import { signIn } from "next-auth/react"
import Link from "next/link"

function Signin(){
  return(
    <section className="items-center justify-center w-full h-screen flex">
    <form action="" className="flex flex-col gap-4 items-center justify-center bg-slate-300 p-4 rounded-lg w-96">
      <h1 className="text-4xl font-bold">Sign In</h1>
      <div className="flex flex-col gap-3 w-full">
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
          <input name="email" type="email" className="grow w-full" placeholder="Email" required />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
          <input name="password" type="password" placeholder="Password" className="grow w-full" required />
        </label>
      </div>
      <button type="submit" className="btn btn-block btn-secondary">Sign In</button>
      <div className="divider">OR</div>
      <div className="flex gap-2 items-center justify-center">
        <button className="btn btn-primary btn-block">Google</button>
        <button className="btn btn-primary btn-block">Github</button>
      </div>
      <h1>Already have an Account ?<Link href="/signup" className="btn btn-link">Sign in Here</Link></h1>
    </form>
  </section>
  )
}

export default Signin