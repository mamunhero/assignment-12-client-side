import axiosSecure from ".";

// save user in database
export const saveUser = async user => {
  const currentUser = {
    email : user.email,
    role: "tourist",
    status: "Verified"
  }
  const {data} = await axiosSecure.put(`/users/${user?.email}`, currentUser);
  return data
};



// get token from server
export const getToken = async  email => {
  const {data} = await axiosSecure.post("/jwt",email);
  console.log("token recive from server", data);
  return data
};


// clear cookiefrombrowser
export const clearCookieFormBrowser = async  () => {
  const {data} = await axiosSecure.get("/logout");
  console.log("token remove from browser", data);
  return data
};

