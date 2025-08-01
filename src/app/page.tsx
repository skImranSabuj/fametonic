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

       
      <main className="min-h-screen text-white px-[20px] relative font-semibold overflow-visible">
        {/* Top Bar */}
        <div className="text-white text-center py-2 px-4 font-semibold bg-[linear-gradient(to_right,_#FC004E,_#10CBE0)] absolute top-0 left-0 w-full z-10">
          <p className="text-base text-[16px] md:text-[22px]">
                      <span className="text-[#00E7F9] font-extrabold">🚀 FRESH BEGINNINGS SALE:</span> Extra 25% OFF, Limited Spots - start your journey today!
          </p>
        </div>
        {/* Navigation */}
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
        <section className="flex flex-col-reverse md:flex-row items-center ">
          <div className="flex w-full md:w-[511] md:h-[516] flex-col justify-center md:py-24 md:ml-[211px]">
            <div className={`${fontUrbanist.className} text-[25px] md:text-[35px] font-bold text-center md:text-start`}>
              <h2 className="leading-tight">
                Want to Turn Social Media Into a Profitable Career?
              </h2>
              <h2 className="max-w-2xl mb-6 text-[#00E7F9] drop-shadow-[1px_5px_2px_red]">
                Discover your way to success with <strong>Fametonic</strong> :
              </h2>
            </div>

            <ul className="text-left max-w-md mb-8 text-white space-y-2">
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

            <a href="#" className="w-[313px] h-[40px] bg-[#FC004E] text-white justify-center text-center rounded-[10px] text-[20px] font-bold drop-shadow-[2px_2px_4px_#00E7F9] hover:drop-shadow-[1px_1px_2px_#FC004E,_2px_2px_6px_#00E7F9] 
              transition-all duration-300over:drop-shadow[2.5px_2.5px_5px_#00E7F9]">
              GET STARTED
            </a>
            <div className="w-[313px] h-[16px] flex-col justify-end mt-1">
              <p className="text-[12px] text-center font-normal">
                1-minute quiz for personalized insights
              </p>
            </div>
            

            <p className="text-[12px] text-[#ABABAB] mt-[30px]">
              By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms
            </p>
            <p className="text-[10px] text-[#ABABAB] mt-2">Fametonic 2025 ©All Rights Reserved.</p>
          </div>
          <div className="w-[390px] h-[426px] md:w-[666px] md:h-[679px] overflow-visible">
            <Image
              src={mobileMockup}
              alt="Mobile mockup"
              priority
               width={666}
              height={679}
              className="md:block object-contain"
            />
          </div>
        </section>
      </main>
    </>
  );
}
