import axiosSecure from "."

// fetch all package 
export const getAllPackage = async () => {
  const {data} = await axiosSecure("/package")
  return data
}


