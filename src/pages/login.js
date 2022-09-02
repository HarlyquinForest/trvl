import Head from "next/head";
import { useState } from "react";
import Background from "../common/modules/Background";
import Logo from "../common/components/Logo";
import GlowingButton from "../common/components/GlowingButton";
import { login } from "../data/data";

const Page = () => {
  const [index, setIndex] = useState(0);
  const tabClickHandler = () => {
    setIndex((prev) => (prev === 0 ? 1 : 0));
  };
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-widtch , initial-scale=1" />
        <meta name="theme-color" content="#12a1ff" />
        <title>ورورد و ثبت نام - تور گردشگری</title>
      </Head>
      <Background img={login.signin.img} active={index} keyProp={0} key={0} />
      <Background img={login.signup.img} active={index} keyProp={1} key={1} />
      <div className="flex flex-col justify-center items-center h-fit">
        <div className="flex flex-col justify-center items-center w-11/12 lg:w-2/4 h-fit mt-6 p-10 rounded-lg bg-dark-half-transparent backdrop-blur-lg text-white font-vazir">
          <span className="text-xl xl:text-4xl">
            {" "}
            <Logo />{" "}
          </span>
          <p className="w-full xl:w-8/12 text-center text-sm xl:text-xl">
            آماده تجربه یک سفر هیجان انگیز هستید؟
            <br /> وقت رو تلف نکنید ما منتظرتون هستیم
          </p>
          <div className="flex flex-row justify-between items-center gap-1 w-11/12  xl:w-8/12 m-6 border-b-2 border-tab-divider">
            <h1
              onClick={tabClickHandler}
              className={
                index == 0
                  ? "bg-tab w-full text-center rounded-t-lg p-2 text-sm xl:text-xl cursor-pointer"
                  : "w-full text-center p-2 text-sm xl:text-lg cursor-pointer"
              }
            >
              ثبت نام
            </h1>
            <h1
              onClick={tabClickHandler}
              className={
                index == 1
                  ? "bg-tab w-full text-center rounded-t-lg p-2 text-sm xl:text-xl cursor-pointer"
                  : "w-full text-center p-2 text-lg cursor-pointer"
              }
            >
              ورود
            </h1>
          </div>
          {index == 0 ? (
            <div className="flex flex-col justify-center items-center gap-8">
              <h1 className="text-sm xl:text-xl w-full xl:w-2/3 text-center ">
                {login.signup.text}
              </h1>
              <input
                className="w-full xl:w-2/3 p-2 px-8 rounded-full bg-half-transparent focus:bg-white text-black focus:outline-none"
                style={{ direction: "ltr" }}
                type="email"
                name="email"
                id="email-input"
                placeholder="example@mail.com"
              />
              <GlowingButton url="/" bgColor="#12a1ff" title="ثبت نام" />
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center gap-4">
              <h1 className="text-sm xl:text-xl w-full xl:w-2/3 text-center ">
                {login.signin.text}
              </h1>
              <input
                className="w-full xl:w-2/3 p-2 px-8 rounded-full bg-half-transparent focus:bg-white text-black focus:outline-none"
                style={{ direction: "ltr" }}
                type="email"
                name="username"
                id="username-input"
                placeholder="Username or email"
              />
              <input
                className="w-full xl:w-2/3 p-2 px-8 rounded-full bg-half-transparent focus:bg-white text-black focus:outline-none"
                style={{ direction: "ltr" }}
                type="password"
                name="password"
                id="password-input"
                placeholder="Type your password"
              />
              <GlowingButton url="/" bgColor="#12a1ff" title="ورود" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Page;
