"use client";
import { InputValue } from "@/components";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const multiStepsForm = () => {
  const [step, setStep] = useState("step1");
  const [error, setError] = useState({
    full: "",
    last: "",
    user: "",
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
  });
  const [preview, setPreview] = useState();

  // -------- Validation functions (чинийх шиг үлдээсэн) ----------
  const submit1 = (event) => {
    const newError = {};
    const numberRegex = /\d/;

    if (event.full === "") {
      newError.full = "Enter your First Name";
    } else if (numberRegex.test(event.full)) {
      newError.full = "First name should not contain numbers";
    } else {
      newError.full = "";
    }

    if (event.last === "") {
      newError.last = "Enter your Last Name";
    } else if (numberRegex.test(event.last)) {
      newError.last = "Last name should not contain numbers";
    } else {
      newError.last = "";
    }

    if (event.user === "") {
      newError.user = "Enter your Username";
    } else if (numberRegex.test(event.user)) {
      newError.user = "Username should not contain numbers";
    } else {
      newError.user = "";
    }

    setError(newError);

    if (newError.full === "" && newError.last === "" && newError.user === "") {
      setStep("step2");
    }
  };

  const submit2 = (event) => {
    const newError = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(?:\+976)?(?:7|8|9)\d{7}$/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (event.email === "") {
      newError.email = "Имэйл хаягаа оруулна уу";
    } else if (!emailRegex.test(event.email)) {
      newError.email = "Имэйл хаяг буруу байна";
    } else {
      newError.email = "";
    }

    if (event.phone === "") {
      newError.phone = "Утасны дугаар оруулна уу";
    } else if (!phoneRegex.test(event.phone)) {
      newError.phone = "Утасны дугаар буруу байна";
    } else {
      newError.phone = "";
    }

    if (event.passport === "") {
      newError.passport = "Нууц үгээ оруулна уу";
    } else if (!specialCharRegex.test(event.passport)) {
      newError.passport = "Нууц үгэнд заавал 1 тэмдэгт оруулах ёстой";
    } else {
      newError.passport = "";
    }

    if (event.confirm === "") {
      newError.confirm = "Нууц үгээ давтана уу";
    } else if (event.confirm !== event.passport) {
      newError.confirm = "Нууц үг ижил байх ёстой";
    } else {
      newError.confirm = "";
    }

    setError(newError);

    if (
      newError.email === "" &&
      newError.phone === "" &&
      newError.passport === "" &&
      newError.confirm === ""
    ) {
      setStep("step3");
    }
  };

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      const filePreview = URL.createObjectURL(file);
      setPreview(filePreview);
      setForm((prev) => ({
        ...prev,
        image: file,
      }));
    }
  }

  const submit3 = (event) => {
    const newError = {};

    if (event.birthday === "") {
      newError.date = "Please select a date";
    } else {
      newError.date = "";
    }

    if (!event.image) {
      newError.image = "Please select a profile image";
    } else {
      newError.image = "";
    }

    setError(newError);

    if (newError.date === "" && newError.image === "") {
      setStep("step4");
    }
  };

  // -------- Motion Variants ----------
  const variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  // -------- Render ----------
  return (
    <div className="m-0 p-0 bg-[#F4F4F4] h-screen text-black box-content pt-[140px] text-[14px] overflow-hidden">
      <AnimatePresence mode="wait">
        {step === "step1" && (
          <motion.div
            key="step1"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-3 w-[500px] m-auto rounded-2xl shadow-sm p-[32px] bg-white"
          >
            <img src="plogo.png" className="w-[60px]" />
            <h1 className="text-[26px] font-semibold">Join Us! 😎</h1>
            <p className="text-[#8E8E8E]">
              Please provide all current information accurately.
            </p>
            <InputValue
              label={"First name"}
              value={form.full}
              error={error.full}
              onChange={(e) => setForm({ ...form, full: e.target.value })}
            />
            <InputValue
              label={"Last name"}
              value={form.last}
              error={error.last}
              onChange={(e) => setForm({ ...form, last: e.target.value })}
            />
            <InputValue
              label={"Username"}
              value={form.user}
              error={error.user}
              onChange={(e) => setForm({ ...form, user: e.target.value })}
            />
            <button
              className="mt-[162px] bg-black text-white h-[44px] rounded-[5px]"
              onClick={() => submit1(form)}
            >
              Continue 1/3
            </button>
          </motion.div>
        )}

        {step === "step2" && (
          <motion.div
            key="step2"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-3 w-[500px] m-auto rounded-2xl shadow-sm p-[32px] bg-white"
          >
            <img src="plogo.png" className="w-[60px]" />
            <h1 className="text-[26px] font-semibold">Join Us! 😎</h1>
            <p className="text-[#8E8E8E]">
              Please provide all current information accurately.
            </p>
            <InputValue
              label={"Email"}
              value={form.email}
              error={error.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type={"text"}
            />
            <InputValue
              label={"Phone Number"}
              value={form.phone}
              error={error.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              type={"text"}
            />
            <InputValue
              label={"Password"}
              value={form.passport}
              error={error.passport}
              onChange={(e) => setForm({ ...form, passport: e.target.value })}
              type={"password"}
            />
            <InputValue
              label={"Confirm"}
              value={form.confirm}
              error={error.confirm}
              onChange={(e) => setForm({ ...form, confirm: e.target.value })}
              type={"password"}
            />
            <div className="flex gap-5">
              <button
                className="mt-[70px] bg-white text-black h-[44px] rounded-[5px] border border-[#CBD5E1] w-[128px]"
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
          </motion.div>
        )}

        {step === "step3" && (
          <motion.div
            key="step3"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-3 w-[500px] m-auto rounded-2xl shadow-sm p-[32px] bg-white"
          >
            <img src="plogo.png" className="w-[60px]" />
            <h1 className="text-[26px] font-semibold">Join Us! 😎</h1>
            <p className="text-[#8E8E8E]">
              Please provide all current information accurately.
            </p>
            Date of birth *
            <input
              type="date"
              value={form.birthday}
              onChange={(e) => setForm({ ...form, birthday: e.target.value })}
            />
            {error.date && <p className="mt-2 text-red-400">{error.date}</p>}
            Profile image *
            {preview ? (
              <img
                src={preview}
                className="h-40 w-full object-cover rounded-2xl"
              />
            ) : (
              <div className="bg-gray-400 h-40 flex items-center justify-center relative">
                Add Image
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="absolute opacity-0 inset-0"
                />
              </div>
            )}
            {error.image && <p className="mt-2 text-red-400">{error.image}</p>}
            <div className="flex gap-5">
              <button
                className="mt-[70px] bg-white text-black h-[44px] rounded-[5px] border border-[#CBD5E1] w-[128px]"
                onClick={() => setStep("step2")}
              >
                Back
              </button>
              <button
                className="mt-[70px] bg-black text-white h-[44px] rounded-[5px] w-[280px]"
                onClick={() => submit3(form)}
              >
                Continue 3/3
              </button>
            </div>
          </motion.div>
        )}

        {step === "step4" && (
          <motion.div
            key="step4"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-3 w-[500px] m-auto rounded-2xl shadow-sm p-[32px] bg-white"
          >
            <img src="plogo.png" className="w-[60px]" />
            <h1 className="text-[26px] font-semibold">You're All Set</h1>
            <p className="text-[#8E8E8E]">
              We have received your submission. Thank you!
            </p>
            {console.log(form)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default multiStepsForm;
