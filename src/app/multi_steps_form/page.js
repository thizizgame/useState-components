"use client";
import React, { useState } from "react";

const multiStepsForm = () => {
  const [step, setStep] = useState("step1");
  const [valid, setValid] = useState("");
  const [error, setError] = useState({
    email: "",
    phone: "",
    passport: "",
    confirm: "",
  });
  const [form, setForm] = useState({
    full: "",
    last: "",
    user: "",
    email: "",
    phone: "",
    passport: "",
    confirm: "",
    birthday: "",
    image: "",
    count: false,
  });

  const submit1 = (event) => {
    setValid("Дээрх талбар хоосон байна");
    event.count = true;
    if (event.full === "" || event.last === "" || event.user === "") {
      setStep("step1");
      console.log(event.count);
    } else {
      setStep("step2");
      event.count = false;
      console.log(event.count);
    }
  };
  const submit2 = (event) => {
    
    event.count = true;
    if(event.email === "")
    {
      setError({...error, email: "Дээрх талбар хоосон байна"});
       setStep("step2");
    }
    if(event.phone === "")
    {
      setError({...error, phone: "Дээрх талбар хоосон байна"});
       setStep("step2");
    }
    if(event.passport === "")
    {
      setError({...error, passport: "Дээрх талбар хоосон байна"});
       setStep("step2");
    }
    if(event.confirm === "")
    {
      setError({...error, confirm: "Дээрх талбар хоосон байна"});
       setStep("step2");
      
    }
    if(event.passport !== event.confirm){
      event.confirm = "";
      setError({...error, 
        confirm: "Нууц үг ижил байх ёстой",
      });
  setStep("step2");
    }
    
    if (event.email !== "" && event.phone !== "" && event.passport  !== "" && event.confirm !== "") {
        setStep("step3");
    } 
  };
  if (step === "step1") {
    return (
      <div className="m-0 p-0 bg-[#F4F4F4] h-screen text-black box-content pt-[140px] text-[14px]">
        <div className="flex flex-col gap-3 w-[500px] m-auto rounded-2xl shadow-sm p-[32px] bg-white">
          <img src="plogo.png" className="w-[60px]" />
          <h1 className="text-[26px] font-semibold">Join Us! 😎</h1>
          <p className="text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
          First name *{" "}
          <input
            className="border-1 border-[#CBD5E1] h-[44px] rounded-[5px] pl-[13px] focus:outline-none focus:ring-0 focus:border-[#0CA5E9]"
            placeholder="Placeholder"
            onChange={(e) =>
              setForm({
                ...form,
                full: e.target.value,
              })
            }
            value={form.full}
          ></input>
          {form.full === "" && form.count ? (
            <p className="text-red-400">{valid}</p>
          ) : (
            <p></p>
          )}
          Last name *
          <input
            className="border-1 border-[#CBD5E1] h-[44px] rounded-[5px] pl-[13px] focus:outline-none focus:ring-0 focus:border-[#0CA5E9]"
            placeholder="Placeholder"
            value={form.last}
            onChange={(e) =>
              setForm({
                ...form,
                last: e.target.value,
              })
            }
          ></input>
          {form.last === "" && form.count ? (
            <p className="text-red-400">{valid}</p>
          ) : (
            <p></p>
          )}
          Username *
          <input
            className="border-1 border-[#CBD5E1] h-[44px] rounded-[5px] pl-[13px] focus:outline-none focus:ring-0 focus:border-[#0CA5E9]"
            placeholder="Placeholder"
            value={form.user}
            onChange={(e) =>
              setForm({
                ...form,
                user: e.target.value,
              })
            }
          ></input>
          {form.user === "" && form.count ? (
            <p className="text-red-400">{valid}</p>
          ) : (
            <p></p>
          )}
          <button
            className="mt-[162px] bg-black text-white h-[44px] rounded-[5px]"
            onClick={() => submit1(form)}
          >
            Continue 1/3
          </button>
        </div>
      </div>
    );
  }
  if (step === "step2") {
    return (
      <div className="m-0 p-0 bg-[#F4F4F4] h-screen text-black box-content pt-[140px] text-[14px]">
        <div className="flex flex-col gap-3 w-[500px] m-auto rounded-2xl shadow-sm p-[32px] bg-white">
          <img src="plogo.png" className="w-[60px]" />
          <h1 className="text-[26px] font-semibold">Join Us! 😎</h1>
          <p className="text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
          Email *
          <input
            className="border-1 border-[#CBD5E1] h-[44px] rounded-[5px] pl-[13px] focus:outline-none focus:ring-0 focus:border-[#0CA5E9]"
            placeholder="Placeholder"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          ></input>
            {form.email === "" && form.count ? (
            <p className="text-red-400">{error.email}</p>
          ) : (
            <p></p>
          )}
          Phone number *
          <input
            className="border-1 border-[#CBD5E1] h-[44px] rounded-[5px] pl-[13px] focus:outline-none focus:ring-0 focus:border-[#0CA5E9]"
            placeholder="Placeholder"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
          ></input>
            {form.phone === "" && form.count ? (
            <p className="text-red-400">{error.phone}</p>
          ) : (
            <p></p>
          )}
          Password *
          <input
            className="border-1 border-[#CBD5E1] h-[44px] rounded-[5px] pl-[13px] focus:outline-none focus:ring-0 focus:border-[#0CA5E9]"
            type="password"
            placeholder="Placeholder"
            value={form.passport}
            onChange={(e) =>
              setForm({
                ...form,
                passport: e.target.value,
              })
            }
          ></input>
            {form.passport === "" && form.count ? (
            <p className="text-red-400">{error.passport}</p>
          ) : (
            <p></p>
          )}
          Confirm *
          <input
            className="border-1 border-[#CBD5E1] h-[44px] rounded-[5px] pl-[13px] focus:outline-none focus:ring-0 focus:border-[#0CA5E9]"
            type="password"
            placeholder="Placeholder"
            value={form.confirm}
            onChange={(e) =>
              setForm({
                ...form,
                confirm: e.target.value,
              })
            }
          ></input>
            {form.confirm === "" && form.count ? (
            <p className="text-red-400">{error.confirm}</p>
          ) : (
            <p></p>
          )}
          <div className="flex gap-5">
            <button
              className="mt-[70px] bg-white text-black h-[44px] rounded-[5px] border-1 border-[#CBD5E1] w-[128px]"
              onClick={() => setStep("step1")}
            >
              Back
            </button>
            <button
              className="mt-[70px] bg-black text-white h-[44px] rounded-[5px] w-[280px]"
              onClick={() => submit2(form)}
            >
              Continue 2/3
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === "step3") {
    return (
      <div className="m-0 p-0 bg-[#F4F4F4] h-screen text-black box-content pt-[140px] text-[14px]">
        <div className="flex flex-col gap-3 w-[500px] m-auto rounded-2xl shadow-sm p-[32px] bg-white">
          <img src="plogo.png" className="w-[60px]" />
          <h1 className="text-[26px] font-semibold">Join Us! 😎</h1>
          <p className="text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
          Date of birth *<input type="date" value={form.birthday}></input>
          Profile image *
          <input
            type="file"
            value={form.image}
            onChange={(e) =>
              setForm({
                ...form,
                image: e.target.value,
              })
            }
          ></input>
          <div className="flex gap-5">
            <button
              className="mt-[70px] bg-white text-black h-[44px] rounded-[5px] border-1 border-[#CBD5E1] w-[128px]"
              onClick={() => setStep("step2")}
            >
              Back
            </button>
            <button
              className="mt-[70px] bg-black text-white h-[44px] rounded-[5px] w-[280px]"
              onClick={() => setStep("step4")}
            >
              Continue 3/3
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (step === "step4") {
    return (
      <div className="m-0 p-0 bg-[#F4F4F4] h-screen text-black box-content pt-[140px] text-[14px]">
        <div className="flex flex-col gap-3 w-[500px] m-auto rounded-2xl shadow-sm p-[32px] bg-white">
          <img src="plogo.png" className="w-[60px]" />
          <h1 className="text-[26px] font-semibold">You're All Set</h1>
          <p className="text-[#8E8E8E]">
            We have received your submission. Thank you!
          </p>
          {console.log(form)}
        </div>
      </div>
    );
  }
};
export default multiStepsForm;
