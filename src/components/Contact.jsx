import React from "react";
import Lottie from "lottie-react";
import { useState } from "react";
import contact from "../animations/contact.json";
import axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [err, setErr] = useState([]);
  const [submit, setsubmit] = useState(false);

  function submitHandler(e) {
    //preventDefault function helps to stop to rerender after submit
    e.preventDefault();
    setErr([]);
    console.log(err);
    if (!name) {
      setErr(["name not found"]);
      return;
    }
    if (!email) {
      setErr(["email not found"]);
      return;
    }
    if (!desc) {
      setErr(["no description found"]);
      return;
    }
    if (err.length === 0) {
      const { names, value } = e.target;
      setName({
        ...names,
        [names]: value,
      });

      const user = {
        name,
        email,
        description: desc,
      };
      axios.post("https://portfolio-production-4c7f.up.railway.app/contact", user);
      setsubmit(true);
    } 
  }

  return (
    <div className="grid mt-5 grid-cols-2 gap-8">
      <div>
        <Lottie animationData={contact} className="mt-10"/>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        {submit === false ? (
          <div>
            <h1 className="text-5xl font-bolder">
              Hey there, Reach out to me !
            </h1>
            <br />
            <form onSubmit={submitHandler} className="flex flex-col w-full">
              <div className="w-full flex flex-col">
                <label>Your Name</label>
                <input
                  onChange={function (e) {
                    setName(e.target.value);
                  }}
                  value={name}
                  type="text"
                  className="rounded-xl p-3 text-zinc-900"
                />
              </div>
              <div className="w-full flex flex-col">
                <label>Email Id</label>
                <input
                  onChange={function (e) {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  type="text"
                  className="rounded-xl p-3 text-zinc-900"
                />
              </div>
              <div className="w-full flex flex-col ">
                <label>Type Message</label>
                <textarea
                  onChange={function (e) {
                    setDesc(e.target.value);
                  }}
                  value={desc}
                  cols="30" 
                  rows="10"
                  className="rounded-xl p-3 text-zinc-900" 
                  style={{height: '25vh'}}
                ></textarea>
              </div>
              <button className="text-2xl font-bolder bg-pink-600 mt-4 rounded-xl p-4">
                Submit
              </button>
              {err.length > 0 && <h1 className="text-rose-600">{err[0]}</h1>}
            </form>
          </div>
        ) : (
          <div>
            <h1 className="text-5xl font-bolder text-center">THANK YOU !</h1>
            <h1 className="text-white-200 text-center">I will revert to you</h1>
          </div>
        )}
      </div>
    </div>
  );
}
export default Contact;
