import React, { useState } from "react";
import "animate.css";
import "../App.css"
import { useEffect } from "react";

const HomePage = () => {
  const [isOpen, setOpen] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [userData, setUserData] = useState()
  const [formLoading, setFormLoading] = useState(false)
  const [newUser, setNewUser] = useState({
    name: "",
    phone: "",
    email: "",
    hobbies: ""
  })
  const [errorMsg, setErrorMsg] = useState("")
  const [hobbiesCharCount, setHobbiesCharCount] = useState(50)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
    setTimeout(() => {
      document.getElementById("loadingBanner").classList.add("hidden");
    }, 2201);
  }, []);

  useEffect(() => {
    const hobbiesLength = newUser.hobbies.length

    if(hobbiesLength === 0){
      setHobbiesCharCount(50)
    }
    
    setHobbiesCharCount(50 - hobbiesLength)
  }, [newUser.hobbies])

  const handleInput = (e) => {
    const { target } = e
    const { name, value } = target

    setNewUser({
      ...newUser,
      [name]: value
    })
  }

  const addUserValidation = () => {
    const { name, phone, email, hobbies } = newUser

    if(!name || !phone || !email){
      setErrorMsg("Please enter all the details")
      return true
    }

    if(name.length < 2){
      setErrorMsg("Please enter full name")
      return true
    }

    if(!(/^\d{10}$/.test(phone))){
      setErrorMsg("Please enter a valid ten digit phone number")
    }

    if(!(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email))){
      setErrorMsg("Please enter a valid email")
    }

    if(hobbies.length >= 51){
      setErrorMsg("")
    }
  }
  
  const handleAddUser = async (e) => {
    e.preventDefault()
    console.log(newUser)

  }

  return (
    <div className="flex h-screen">
      <div
        className={`absolute z-50 w-screen h-screen bg-landingBG bg-auto laptop:bg-cover bg-no-repeat ${
          isLoaded ? "animate__animated animate__fadeOut" : ""
        }`}
        id="loadingBanner"
      >
        <div className="flex bg-black/40 w-full h-full justify-center items-center text-2xl text-white">
          <div className="flex bg-black/50 px-7 py-3 rounded-xl">
            Loading ...
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full text-white items-center">
        <div className="navbar w-full flex justify-between py-2 px-4 laptop:px-10 bg-black/50">
          <div className="flex animate__animated animate__animate__fadeInDown">
            <p className="text-2xl font-semibold text-center w-full">CRUDS</p>
          </div>

          <div
            className="flex flex-col space-y-1 justify-center cursor-pointer"
            onClick={() => {
              setOpen(!isOpen);
            }}
          >
            <div className="w-6 h-1 rounded-lg bg-white"></div>
            <div className="w-6 h-1 rounded-lg bg-white"></div>
            <div className="w-6 h-1 rounded-lg bg-white"></div>
          </div>

          <div
            className={`absolute flex z-10 px-4 py-2 mx-4 rounded-lg right-0 top-14 bg-black/60 ${
              isOpen
                ? "animate__animated animate__fadeInRight"
                : "animate__animated animate__fadeOutRight"
            }`}
          >
            <div className="flex flex-col space-y-4">
              <a
                href="https://github.com/13ASRamgarhia/CRUDS-backend"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-white focus:text-white my-1 px-2 py-1.5 rounded-lg hover:border hover:border-white"
              >
                Source code
              </a>
              <a
                href="https://god4life.tech/"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-white focus:text-white my-1 px-2 py-1.5 rounded-lg hover:border hover:border-white"
              >
                Developer info
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full relative">
          <div className={`${modalShow ? "animate__animated animate__fadeInDown" : "animate__animated animate__fadeOutUp"} absolute flex top-4 justify-center w-full px-4 z-20`}>
            <div className="w-full laptop:w-1/3 relative rounded-2xl border border-white/30 bg-black/75 backdrop-filter backdrop-blur-lg backdrop-opacity-90">
              <div className="absolute h-full w-full bg-black/75 blur-xl -z-10"></div>
              <form onSubmit={handleAddUser}>
                <div className="form flex flex-col items-center px-4 py-6 space-y-4">
                    <p className="text-white text-2xl font-semibold">Add user</p>
                    <div className="flex flex-col w-3/4">
                      <input type="text" name="name" value={newUser.name} onChange={handleInput} autoCapitalize="off" autoComplete="off" placeholder="Name" className="text-lg laptop:text-xl px-4 py-1 w-full rounded-lg bg-white/25" />
                    </div>
                   <div className="flex flex-col w-3/4">
                    <input type="text" name="phone" value={newUser.phone} onChange={handleInput} autoCapitalize="off" autoComplete="off" placeholder="Phone" className="text-lg laptop:text-xl px-4 py-1 w-full rounded-lg bg-white/25" />
                   </div>
                   <div className="flex flex-col w-3/4">
                    <input type="text" name="email" value={newUser.email} onChange={handleInput} autoCapitalize="off" autoComplete="off" placeholder="Email" className="text-lg laptop:text-xl px-4 py-1 w-full rounded-lg bg-white/25" />
                   </div>
                   <div className="flex flex-col w-3/4">
                    <input type="text" name="hobbies" value={newUser.hobbies} onChange={handleInput} autoCapitalize="off" autoComplete="off" placeholder="Hobbies (separate by comma or space)" className="text-lg laptop:text-xl px-4 py-1 w-full rounded-lg bg-white/25" />
                    <p className="text-sm px-4 w-3/4">Character limit: {hobbiesCharCount}</p>
                   </div>
                   <div className="flex flex-col w-3/4">
                    <p className="text-sm px-4 w-3/4">&nbsp;{errorMsg}&nbsp;</p>
                   </div>
                    <div className="flex w-full justify-center space-x-6">
                      <button type="button" onClick={() => {setModalShow(false)}} className="bg-[#15131B] text-white border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-[#15131B]">Cancel</button>
                      <button type="submit" className="bg-[#15131B] text-white border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-[#15131B]">Save</button>
                    </div>
                </div>
              </form>
            </div>
          </div>

          <div className="buttonDiv flex flex-col laptop:flex-row my-10 space-x-0 laptop:space-x-10 space-y-5 laptop:space-y-0 justify-center text-center">
            <div>
              <button onClick={() => {setModalShow(true)}}>
                <div className="bg-[#15131B] flex w-48 px-6 py-3 rounded-lg text-xl border border-white text-center hover:scale-105 duration-100">
                  <p className="w-full text-center">Add user</p>
                </div>
              </button>
            </div>
            <div>
            <button>
              <div className="bg-[#15131B] flex w-48 px-6 py-3 rounded-lg text-xl border border-white text-center hover:scale-105 duration-100">
              <p className="w-full text-center">Update user</p>
              </div>
            </button>
            </div>
            <div>
            <button>
              <div className="bg-[#15131B] flex w-48 px-6 py-3 rounded-lg text-xl border border-white text-center hover:scale-105 duration-100">
              <p className="w-full text-center">Delete user</p>
              </div>
            </button>
            </div>
          </div>

          <div className="tableDiv flex laptop:items-center laptop:justify-center w-full h-1/2 laptop:min-h-full px-1 laptop:px-10 overflow-x-scroll overflow-y-scroll">
            <table className="w-full laptop:w-full border-separate border-spacing-1 laptop:border-spacing-2">
              <thead>
                <tr className="">
                  <th className="tableHead font-medium px-1 laptop:px-6 py-1 laptop:py-4 tracking-wider text-base laptop:text-xl text-center leading-7">Name</th>
                  <th className="tableHead font-medium px-1 laptop:px-6 py-1 laptop:py-4 tracking-wider text-base laptop:text-xl text-center leading-7">Phone</th>
                  <th className="tableHead font-medium px-1 laptop:px-6 py-1 laptop:py-4 tracking-wider text-base laptop:text-xl text-center leading-7">Email</th>
                  <th className="tableHead font-medium px-1 laptop:px-6 py-1 laptop:py-4 tracking-wider text-base laptop:text-xl text-center leading-7">Hobbies</th>
                </tr>
              </thead>
              <tbody>
                {/* {
                  userData.users.map((user) => {
                    return(
                      <tr key={user._id} className="">
                        <td className="tableItem px-1 laptop:px-6 py-1 laptop:py-4 tracking-wider text-sm laptop:text-lg leading-7 text-center">{user.name}</td>
                        <td className="tableItem px-1 laptop:px-6 py-1 laptop:py-4 tracking-wider text-sm laptop:text-lg leading-7 text-center">{user.phone}</td>
                        <td className="tableItem px-1 laptop:px-6 py-1 laptop:py-4 tracking-wider text-sm laptop:text-lg leading-7 text-center">{user.email}</td>
                        <td className="tableItem px-1 laptop:px-6 py-1 laptop:py-4 tracking-wider text-sm laptop:text-lg leading-7 text-center">{user.hobbies && user.hobbies}</td>
                      </tr>
                    )
                  })
                } */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
