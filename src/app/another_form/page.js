"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const steps = ["step1", "step2", "step3", "step4"];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 40 : -40,   // хаанаас гулгах
    opacity: 0,
    position: "absolute"
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative"
  },
  exit: (direction) => ({
    x: direction > 0 ? -40 : 40,   // хаашаа гарах
    opacity: 0,
    position: "absolute"
  }),
};

const multiStepsForm = () => {
  const [step, setStep] = useState("step1");
  const [direction, setDirection] = useState(0); // -1 back, +1 next

  const [valid, setValid] = useState("");
  const [error, setError] = useState({ email: "", phone: "", passport: "", confirm: "" });
  const [form, setForm] = useState({
    full: "", last: "", user: "",
    email: "", phone: "", passport: "", confirm: "",
    birthday: "", image: "", count: false,
  });

  const goTo = (next) => {
    const d = steps.indexOf(next) > steps.indexOf(step) ? 1 : -1;
    setDirection(d);
    setStep(next);
  };

  // ⬇️ Таны submit функцууд дотроо setStep(...) байсныг goTo(...) болгож өөрчилнө
  const submit1 = () => {
    setValid("Дээрх талбар хоосон байна");
    setForm(prev => ({ ...prev, count: true }));
    if (!form.full || !form.last || !form.user) {
      goTo("step1");
    } else {
      setForm(prev => ({ ...prev, count: false }));
      goTo("step2"); // ← анимэйшнтай шилжинэ
    }
  };

  const submit2 = () => {
    setForm(prev => ({ ...prev, count: true }));
    const f = form;
    const newError = { email: "", phone: "", passport: "", confirm: "" };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(?:\+976)?(?:7|8|9)\d{7}$/; // Монгол дугаар (кодтой/кодгүй)

    if (!f.email) newError.email = "You must enter your email";
    else if (!emailRegex.test(f.email)) newError.email = "You must enter a valid email";

    if (!f.phone) newError.phone = "You must enter your phone number";
    else if (!phoneRegex.test(f.phone)) newError.phone = "Монгол улсын хүчинтэй дугаар оруулна уу";

    if (!f.passport) newError.passport = "You must enter your password";
    if (!f.confirm) newError.confirm = "You must enter your confirm";
    if (f.passport && f.confirm && f.passport !== f.confirm) {
      newError.confirm = "Нууц үг ижил байх ёстой";
    }

    setError(newError);
    const ok = Object.values(newError).every(v => v === "");
    if (ok) goTo("step3"); // ← анимэйшнтай шилжинэ
  };

  return (
    <div className="m-0 p-0 bg-[#F4F4F4] min-h-screen text-black box-content pt-[140px] text-[14px]">
      {/* Контейнерийг тогтвортой өндөртэй байлгахын тулд min-h өгье */}
      <div className="relative w-[500px] m-auto rounded-2xl shadow-sm p-[32px] bg-white min-h-[620px] overflow-hidden">
        <img src="plogo.png" className="w-[60px]" />
        <AnimatePresence mode="wait" custom={direction}>
          {step === "step1" && (
            <motion.div
              key="step1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.28 }}
              className="flex flex-col gap-3"
            >
              <h1 className="text-[26px] font-semibold">Join Us! 😎</h1>
              <p className="text-[#8E8E8E]">Please provide all current information accurately.</p>

              First name *
              <input
                className="border border-[#CBD5E1] h-[44px] rounded-[5px] pl-[13px] focus:outline-none focus:ring-0 focus:border-[#0CA5E9]"
                placeholder="Placeholder"
                value={form.full}
                onChange={(e)=>setForm(prev=>({...prev, full: e.target.value}))}
              />
              {form.full === "" && form.count && <p className="text-red-400">{valid}</p>}

              Last name *
              <input
                className="border border-[#CBD5E1] h-[44px] rounded-[5px] pl-[13px] focus:outline-none focus:ring-0 focus:border-[#0CA5E9]"
                placeholder="Placeholder"
                value={form.last}
                onChange={(e)=>setForm(prev=>({...prev, last: e.target.value}))}
              />
              {form.last === "" && form.count && <p className="text-red-400">{valid}</p>}

              Username *
              <input
                className="border border-[#CBD5E1] h-[44px] rounded-[5px] pl-[13px] focus:outline-none focus:ring-0 focus:border-[#0CA5E9]"
                placeholder="Placeholder"
                value={form.user}
                onChange={(e)=>setForm(prev=>({...prev, user: e.target.value}))}
              />
              {form.user === "" && form.count && <p className="text-red-400">{valid}</p>}

              <button
                className="mt-[162px] bg-black text-white h-[44px] rounded-[5px]"
                onClick={submit1}
              >
                Continue 1/3
              </button>
            </motion.div>
          )}

          {step === "step2" && (
            <motion.div
              key="step2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.28 }}
              className="flex flex-col gap-3"
            >
              <h1 className="text-[26px] font-semibold">Join Us! 😎</h1>
              <p className="text-[#8E8E8E]">Please provide all current information accurately.</p>

              Email *
              <input
                className="border border-[#CBD5E1] h-[44px] rounded-[5px] pl-[13px] focus:outline-none focus:ring-0 focus:border-[#0CA5E9]"
                placeholder="Placeholder"
                value={form.email}
                onChange={(e)=>setForm(prev=>({...prev, email: e.target.value}))}
              />
              {error.email && <p className="text-red-400">{error.email}</p>}

              Phone number *
              <input
                className="border border-[#CBD5E1] h-[44px] rounded-[5px] pl-[13px] focus:outline-none focus:ring-0 focus:border-[#0CA5E9]"
                placeholder="Placeholder"
                value={form.phone}
                onChange={(e)=>setForm(prev=>({...prev, phone: e.target.value}))}
              />
              {error.phone && <p className="text-red-400">{error.phone}</p>}

              Password *
              <input
                className="border border-[#CBD5E1] h-[44px] rounded-[5px] pl-[13px] focus:outline-none focus:ring-0 focus:border-[#0CA5E9]"
                type="password"
                placeholder="Placeholder"
                value={form.passport}
                onChange={(e)=>setForm(prev=>({...prev, passport: e.target.value}))}
              />
              {error.passport && <p className="text-red-400">{error.passport}</p>}

              Confirm *
              <input
                className="border border-[#CBD5E1] h-[44px] rounded-[5px] pl-[13px] focus:outline-none focus:ring-0 focus:border-[#0CA5E9]"
                type="password"
                placeholder="Placeholder"
                value={form.confirm}
                onChange={(e)=>setForm(prev=>({...prev, confirm: e.target.value}))}
              />
              {error.confirm && <p className="text-red-400">{error.confirm}</p>}

              <div className="flex gap-5">
                <button
                  className="mt-[70px] bg-white text-black h-[44px] rounded-[5px] border border-[#CBD5E1] w-[128px]"
                  onClick={() => goTo("step1")}
                >
                  Back
                </button>
                <button
                  className="mt-[70px] bg-black text-white h-[44px] rounded-[5px] w-[280px]"
                  onClick={submit2}
                >
                  Continue 2/3
                </button>
              </div>
            </motion.div>
          )}

          {step === "step3" && (
            <motion.div
              key="step3"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.28 }}
              className="flex flex-col gap-3"
            >
              <h1 className="text-[26px] font-semibold">Join Us! 😎</h1>
              <p className="text-[#8E8E8E]">Please provide all current information accurately.</p>

              Date of birth *
              <input
                type="date"
                className="border border-[#CBD5E1] h-[44px] rounded-[5px] pl-[13px] focus:outline-none focus:ring-0 focus:border-[#0CA5E9]"
                value={form.birthday}
                onChange={(e)=>setForm(prev=>({...prev, birthday: e.target.value}))}
              />

              Profile image *
              <input
                type="file"
                className="border border-[#CBD5E1] h-[44px] rounded-[5px] pl-[13px] focus:outline-none focus:ring-0 focus:border-[#0CA5E9] py-[8px]"
                onChange={(e)=>setForm(prev=>({...prev, image: e.target.files?.[0] ?? null}))}
              />

              <div className="flex gap-5">
                <button
                  className="mt-[70px] bg-white text-black h-[44px] rounded-[5px] border border-[#CBD5E1] w-[128px]"
                  onClick={() => goTo("step2")}
                >
                  Back
                </button>
                <button
                  className="mt-[70px] bg-black text-white h-[44px] rounded-[5px] w-[280px]"
                  onClick={() => goTo("step4")}
                >
                  Continue 3/3
                </button>
              </div>
            </motion.div>
          )}

          {step === "step4" && (
            <motion.div
              key="step4"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.28 }}
              className="flex flex-col gap-3"
            >
              <h1 className="text-[26px] font-semibold">You're All Set</h1>
              <p className="text-[#8E8E8E]">We have received your submission. Thank you!</p>
              {/* {console.log(form)}  ← прод дээр логгоо авна */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default multiStepsForm;
