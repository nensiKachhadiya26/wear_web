import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export const GetApiDemo1 = () => {
  const [user, setUser] = useState([])

  const getUser = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user/")
    setUser(res.data.data)
  }

  const deleteUser = async (id) =>{
      const res = await axios.delete(`https://node5.onrender.com/user/user/${id}`)
      console.log(res)
      if(res.status === 200 || res.status === 204){
        toast.success("User Deleted Successfully..")
        getUser()
      }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      
      <h1 className="text-3xl font-bold text-[#FF3F6C] mb-6">
        Get API Demo1
      </h1>

      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden">
        <table className="min-w-full text-center">
          
          <thead className="bg-[#FF3F6C] text-white">
            <tr>
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {user.map((u) => (
              <tr key={u._id} className="border-b hover:bg-gray-100 transition duration-200">
                <td className="py-3 px-4">{u._id}</td>
                <td className="py-3 px-4">{u.name}</td>
                <td className="py-3 px-4">{u.email}</td>
                <td className="py-3 px-4">{
                  <button onClick={()=>{deleteUser(u._id)}}  className='text-red-500 cursor-pointer font-bold'>DELETE</button>
                  }</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  )
}