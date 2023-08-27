import { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { AiTwotoneHome } from "react-icons/ai";

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [editDetail, setEditDetail] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;
  function onLogout() {
    auth.signOut();
    navigate("/");
  }
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        const docReference = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docReference, {
          name,
        });
      }
      toast.success("Profile details updated!");
    } catch (error) {
      toast.error("Could not make the changes");
    }
  }
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col ">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3 ">
          <form>
            {}
            <input
              type="text"
              id="name"
              value={name}
              disabled={!editDetail}
              onChange={onChange}
              className="w-full px-4 py-2 mb-6  text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />
            {}
            <input
              type="email"
              id="email"
              value={email}
              disabled
              className={`w-full px-4 py-2 mb-6 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${
                editDetail && "bg-red-200 focus:bg-red-200 "
              }`}
            />
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center ">
                Do you wish to change you name?
                <span
                  onClick={() => {
                    editDetail && onSubmit();
                    setEditDetail((prevState) => !prevState);
                  }}
                  className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer"
                >
                  {editDetail ? "Apply changes" : "Edit"}
                </span>
              </p>
              <p
                onClick={onLogout}
                className="text-blue-600 hover:text-blue-700 transition ease-in-out duration-200 cursor-pointer"
              >
                Sign out
              </p>
            </div>
          </form>
          <button
            type="submit"
            className="w-full bg-blue-400 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-500 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-600"
          >
            <Link
              to="/create-listing"
              className="flex justify-center items-center"
            >
              <AiTwotoneHome className="mr-2 text-3xl bg-white rounded-full p-1 border-2" />
              Sell or rent your home
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}
