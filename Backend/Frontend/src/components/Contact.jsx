import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle the form data (e.g., send it to a backend API)
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Contact Us</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Input */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-gray-600">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: true })}
              className={`p-2 border rounded-md ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-blue-500`}
            />
            {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-gray-600">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className={`p-2 border rounded-md ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-blue-500`}
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
          </div>

          {/* Message Input */}
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Enter your message"
              {...register("message", { required: true })}
              className={`p-2 border rounded-md ${
                errors.message ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-blue-500`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">Message is required</p>}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
