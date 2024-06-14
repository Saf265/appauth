type AddUsersDashProps = {
  id : string
  email: string
  password: string
}

export function AddUsersDash({id,email,password}: AddUsersDashProps){
  return(
    <tr key={id} className="bg-base-200">
      <th>{id}</th>
      <td>{email}</td>
      <td>{password}</td>
    </tr>
  )
}