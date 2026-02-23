import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const navigate = useNavigate();
        const submitHandler = async (data) => {
          try {
            const res = await axios.post("https://node5.onrender.com/user/user/",data);

            if (res.status === 200 || res.status === 201) {
              toast.success("Registration Successful..");
              navigate("/login");
            }

          } catch (err) {
            console.log("error...", err);
            toast.error("Registration Failed..");
          }
      };

    
      const validationSchema = {
          nameValidator: {
              required: {
                value: true,
                message: "Full Name is required.."
              }
            },
          emailValidator: {
              required: {
                value: true,
                message: "Email is required.."
              }
            },
          passwordValidator: {
              required: {
                value: true,
                message: "Password is required.."
              },
              minLength: {
                value: 8,
                message: "Minimum 8 characters required.."
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%]).{8,}$/,
                message:
                  "Password must contain Capital, Small, Number & Special character"
              }
            },
          contactValidator: {
              required: {
                value: true,
                message: "Contact number is required.."
              },
              pattern: {
                value: /^[6-9]{1}[0-9]{9}$/,
                message: "Enter valid 10 digit mobile number"
              }
            },
          genderValidator: {
              required: {
                value: true,
                message: "Gender is required.."
              }
            }
          };

  return (
    // <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="min-h-screen flex items-center justify-center bg-[#FF3F6C]/10">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit(submitHandler)}>

          {/* Full Name */}
          <div>
            <label className="block text-gray-600 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3F6C]/10 
               focus:border-[#FF3F6C]"
              {...register("fullname", validationSchema.nameValidator)}
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.fullname?.message}
            </p>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3F6C]/10 
               focus:border-[#FF3F6C]"
              {...register("email", validationSchema.emailValidator)}
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.email?.message}
            </p>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3F6C]/10 
               focus:border-[#FF3F6C]"
              {...register("password", validationSchema.passwordValidator)}
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.password?.message}
            </p>
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-gray-600 mb-2">Contact Number</label>
            <input
              type="text"
              placeholder="Enter mobile number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3F6C]/10 
               focus:border-[#FF3F6C]"
              {...register("contact", validationSchema.contactValidator)}
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.contact?.message}
            </p>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-600 mb-2">Gender</label>

            <div className="flex gap-6">
              {/* Male */}
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      value="Male"
                      {...register("gender", validationSchema.genderValidator)}
                      className="accent-[#FF3F6C]"
                    />
                    <span>Male</span>
                  </label>

                  {/* Female */}
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      value="Female"
                      {...register("gender", validationSchema.genderValidator)}
                      className="accent-[#FF3F6C]"
                    />
                    <span>Female</span>
                  </label>
                </div>

                <p className="text-red-500 text-sm mt-1">
                  {errors.gender?.message}
                </p>
              </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#ff3f6c] hover:bg-[#e6335f] text-white py-2 rounded-lg  transition duration-300">
            Sign Up
          </button>

        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?
          <span className="text-purple-600 cursor-pointer ml-1">
             <Link to="/login">Login</Link>
          </span>
        </p>

      </div>
    </div>
  )
}
