import prisma from "@/db"
import { AddUsersDash } from "../AddUsersDash/AddUsersDash"
import Link from "next/link"

export default async function Dashboard(){

  const userAll = await prisma.users.findMany()

  return(
    <section className="flex flex-col items-center justify-center w-full h-screen gap-5">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
        {userAll.map(user => (
          <AddUsersDash key={user.id} {...user} email={user.email} password={user.password} />
          //<li key={user.id}>Email ={user.email}, password={user.password}</li>
        ))}
          </tbody>
        </table>
      </div>
      <Link href="/" className="btn btn-secondary">Return to Home Page</Link>
    </section>
  )
}