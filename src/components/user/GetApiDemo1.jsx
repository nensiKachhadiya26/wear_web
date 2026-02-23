import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const GetApiDemo1 = () => {
  const [user, setUser] = useState([])

  const getUser = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user/")
    setUser(res.data.data)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Get API Demo1
      </h1>

      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden">
        <table className="min-w-full text-center">
          
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
            </tr>
          </thead>

          <tbody>
            {user.map((u) => (
              <tr className="border-b hover:bg-gray-100 transition duration-200">
                <td className="py-3 px-4">{u._id}</td>
                <td className="py-3 px-4">{u.name}</td>
                <td className="py-3 px-4">{u.email}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  )
}