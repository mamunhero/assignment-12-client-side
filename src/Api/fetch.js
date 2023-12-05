import axiosSecure from "."

// fetch all package 
export const getAllPackage = async () => {
  const {data} = await axiosSecure("/package")
  return data
}

// fetch one package 
export const getOnePackage = async  id => {
  const {data} = await axiosSecure(`/packages/${id}`)
  return data
}


// fetch tourGuide 
export const tourGuideInfo = async () => {
  const {data} = await axiosSecure("/tourGuide")
  return data
}


