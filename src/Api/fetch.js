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

// fetch booking 
export const getBooking = async id => {
  const {data} = await axiosSecure(`/booking/${id}`)
  return data
}

// fetch addbooking post
export const getAddBooking = async bookingFromData => {
  const {data} = await axiosSecure.post("/addBooking", bookingFromData)
  return data
  
}