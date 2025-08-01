import Head from "next/head";
import Image from "next/image";

import logo from "../../public/images/logo_fametonic.svg";
import mobileMockup from "../../public/images/mobile_mockup.png";
import menuIcon from "../../public/icons/menu_icon.png";
import starIcon from "../../public/icons/shining_star_icon.png";
import { Urbanist } from "next/font/google";

const fontUrbanist = Urbanist({
  weight: ['700'],
  subsets: ["latin"],
});

const benefits = [
  "Start growing your influence right away — no waiting required!",
  "Create viral TikToks and Reels step by step with easy-to-follow lessons",
  "Use a Personal AI Worker to boost your content",
  "Learn from expert-led courses designed for aspiring influencers"
];


export default function Home() {
  return (
    <>
      <Head>
        <title>Fametonic</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

       
      <main className="w-full min-h-screen text-white px-[20px] relative font-semibold overflow-visible pb-[40px]">
        {/* Top Bar */}
        <div className="w-full text-white text-center p-[20px] font-semibold bg-[linear-gradient(to_right,_#FC004E,_#10CBE0)] absolute top-0 left-0 z-10">
          <p className="text-base text-[16px] md:text-[22px]">
                      <span className="text-[#00E7F9] font-extrabold">🚀 FRESH BEGINNINGS SALE:</span> Extra 25% OFF, Limited Spots - start your journey today!
          </p>
        </div>
        {/* Navigation */}d
        <header className="relative flex justify-center md:justify-between md:mx-[211px] pt-[81px]">
          <div className="relative w-[107.78px] h-[46.07px] md:w-[173.12px] md:h-[76px]">
            <Image
              src={logo}
              alt="Fametonic Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <nav className="space-x-4 hidden md:flex text-[#A9A9A9]">
            <a href="#" className="">About us</a>
            <a href="#" className="">Contact</a>
          </nav>
          <button className="absolute right-4 md:hidden text-[20px] self-center">
              <Image
                src={menuIcon}
                alt="menu icon"
                width={20}
                height={12}
                className="object-contain"
              />
          </button>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center relative mt-[60px]">
          <div className="flex md:w-[516px] md:h-[511px] flex-col justify-center md:py-24 md:ml-[211px]">
            <div className={`${fontUrbanist.className} text-[25px] md:text-[35px] font-bold text-center md:text-start md:pt-[50px]`}>
              <p className="leading-tight tracking-[0] auto-he">
                Want to Turn Social Media Into a Profitable Career?
              </p>
              <p className="mb-6 text-[#00E7F9] drop-shadow-[1px_5px_2px_red] tracking-[0]">
                Discover your way to success with <strong>Fametonic</strong> :
              </p>
            </div>

            <ul className="text-left text-white space-y-2">
              {benefits.map((item, index) => (
                <li key={index} className="flex">
                  <Image
                    src={starIcon}
                    alt="menu icon"
                    width={22}
                    height={22}
                    className="object-contain mr-1"
                  /> 
                  <span>{item}</span> 
                </li>
              ))}
            </ul>
            <div className="">
               <div className="text-center md:hidden">
                <p className="text-[12px] text-[#ABABAB] mt-[30px]">
                  By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms
                </p>
                <p className="text-[10px] text-[#ABABAB] mt-2">Fametonic 2025 ©All Rights Reserved.</p>
              </div>
              <div className="py-[40px]">
                  <a href="#"
                  className="w-full md:w-[313px] h-[40px] bg-[#FC004E] text-white flex items-center justify-center text-center 
                        rounded-[10px] text-[20px] font-bold 
                        drop-shadow-[2px_2px_4px_#00E7F9] 
                        hover:drop-shadow-[1px_1px_2px_#FC004E,_2px_2px_6px_#00E7F9] 
                        transition-all duration-300"
                  >GET STARTED</a>
                  <div className="w-full md:w-[313px] h-[16px] flex-col justify-end mt-1">
                    <p className="text-[12px] text-center font-normal">
                      1-minute quiz for personalized insights
                    </p>
                  </div>
              </div>
              <div className="hidden md:block">
                <p className="text-[12px] text-[#ABABAB] mt-[30px]">
                  By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms
                </p>
                <p className="text-[10px] text-[#ABABAB] mt-2">Fametonic 2025 ©All Rights Reserved.</p>
              </div>
            </div>
          </div>
          <div className="w-[390px] h-[426px] md:w-[666px] md:h-[679px] px-2 md:px-0 overflow-visible md:absolute left-[673px] -z-10">
            <Image
              src={mobileMockup}
              alt="Mobile mockup"
              priority
              className="md:block object-contain"
            />
          </div>
        </section>
      </main>
    </>
  );
}
