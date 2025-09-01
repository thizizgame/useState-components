"use client";
import React, { useState } from "react";

const multiStepsForm = () => {
   const [step, setStep] = useState("step1");
  const [form, setForm] = useState({
    full: "",
    last: "",
    user: "",
    email: "",
    phone: "",
    passport: "",
    confirm: "",
  });
  const submit = () =>{
    // setForm({fName: form.fName, lName: form.lName , uName: form.uName}); 
    setStep("step2");
    console.log(form);
  }
  const back = () =>{
    setStep("step1");
  }
  const backStep = () => {
    setStep("step2");
  }
  const nextSubmit = () => {
    setStep("step3");
    console.log(form);
  }
  const allDone = () => {
    setStep("step4");
  }
  if(step === "step1")
  {
    return (
    <div className="m-0 p-0 bg-white h-screen text-black box-content pt-[140px]">
      <div className="flex flex-col gap-3 w-[500px] m-auto border-4 p-[32px]">
        <img src="plogo.png" className="w-[60px]"/>
        <h1 className="text-[26px] font-semibold">Join Us! 😎</h1> 
        <p className="text-[#8E8E8E]">Please provide all current information accurately.</p>
        First name * <input className="border-1 h-[44px] rounded-[5px] pl-[13px]" placeholder="Placeholder" 
        onChange={(e)=> setForm({
            ...form, full:e.target.value,
        })} value={form.full} ></input>
        Last name *<input className="border-1 h-[44px] rounded-[5px] pl-[13px]" placeholder="Placeholder" value={form.last} 
        onChange={(e)=> setForm({
            ...form, last:e.target.value,
        })}></input>
        Username *<input className="border-1 h-[44px] rounded-[5px] pl-[13px]" placeholder="Placeholder" value={form.user} 
        onChange={(e)=> setForm({
            ...form, user:e.target.value,
        })}></input>
       <button className="mt-[162px] bg-black text-white h-[44px] rounded-[5px]" onClick={submit}>Continue 1/3</button>
      </div>
    </div>
  );
  }
  if(step === "step2"){
    return (
    <div className="m-0 p-0 bg-white h-screen text-black box-content pt-[140px]">
      <div className="flex flex-col gap-3 w-[500px] m-auto border-4 p-[32px]">
        <img src="plogo.png" className="w-[60px]"/>
        <h1 className="text-[26px] font-semibold">Join Us! 😎</h1> 
        <p className="text-[#8E8E8E]">Please provide all current information accurately.</p>
        Email *<input className="border-1 h-[44px] rounded-[5px] pl-[13px]" placeholder="Placeholder" value={form.email} 
        onChange={(e)=> setForm({
            ...form, email:e.target.value,
        })}></input>
        Phone number *<input className="border-1 h-[44px] rounded-[5px] pl-[13px]" placeholder="Placeholder" value={form.phone} onChange={(e)=> setForm({
            ...form, phone:e.target.value,
        })}></input>
        Password *<input className="border-1 h-[44px] rounded-[5px] pl-[13px]" type="password" placeholder="Placeholder" value={form.passport} onChange={(e)=> setForm({
            ...form, passport:e.target.value,
        })}></input>
        Confirm *<input className="border-1 h-[44px] rounded-[5px] pl-[13px]" type="password" placeholder="Placeholder" value={form.confirm} onChange={(e)=> setForm({
            ...form, confirm:e.target.value,
        })}></input>
        <div className="flex gap-5">
        <button className="mt-[70px] bg-white text-black h-[44px] rounded-[5px] border-1 w-[128px]" onClick={back}>Back</button>
        <button className="mt-[70px] bg-black text-white h-[44px] rounded-[5px] w-[280px]" onClick={nextSubmit}>Continue 2/3</button>
        </div>
       
      </div>
    </div>
  );
  }

  if(step=== "step3"){
    return (
    <div className="m-0 p-0 bg-white h-screen text-black box-content pt-[140px]">
      <div className="flex flex-col gap-3 w-[500px] m-auto border-4 p-[32px]">
        <img src="plogo.png" className="w-[60px]"/>
        <h1 className="text-[26px] font-semibold">Join Us! 😎</h1> 
        <p className="text-[#8E8E8E]">Please provide all current information accurately.</p>
        Date of birth *
        <input type="date"></input>
        Profile image *
        
       <div className="flex gap-5">
        <button className="mt-[70px] bg-white text-black h-[44px] rounded-[5px] border-1 w-[128px]" onClick={backStep}>Back</button>
        <button className="mt-[70px] bg-black text-white h-[44px] rounded-[5px] w-[280px]" onClick={allDone}>Continue 3/3</button>
        </div>
      </div>
    </div>
  );
  }
  if(step === "step4"){
    return (
        <div className="m-0 p-0 bg-white h-screen text-black box-content pt-[140px]">
      <div className="flex flex-col gap-3 w-[500px] m-auto border-4 p-[32px]">
        <img src="plogo.png" className="w-[60px]"/>
        <h1 className="text-[26px] font-semibold">You're All Set</h1> 
        <p className="text-[#8E8E8E]">We have received your submission. Thank you!</p>
      </div>
      </div>
    );
  }
};
export default multiStepsForm;
