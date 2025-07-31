import Head from "next/head";
import Image from "next/image";

import logo from "../../public/images/logo_fametonic.svg";
import mobileMockup from "../../public/images/mobile_mockup.png";
import menuIcon from "../../public/icons/menu_icon.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fametonic</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

       
      <main className="min-h-screen text-white px-[20px] md:px-[211px] pt-[81px] relative font-semibold">
        {/* Top Bar */}
        <div className="text-white text-center py-2 px-4 font-semibold bg-[linear-gradient(to_right,_#FC004E,_#10CBE0)] absolute top-0 left-0 w-full z-10">
          <p className="text-base text-[16px] md:text-[22px]">
                      <span className="text-[#00E7F9] font-extrabold">🚀 FRESH BEGINNINGS SALE:</span> Extra 25% OFF, Limited Spots - start your journey today!
          </p>
        </div>
        {/* Navigation */}
        <header className="relative flex justify-center md:justify-between border">
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
        <section className="flex items-center justify-center">
          <div className="flex w-1/2 flex-col items-center justify-center text-center px-6 py-12 md:py-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Want to Turn Social Media Into a Profitable Career?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
            Discover your way to success with <strong>Fametonic</strong>: Start growing your influence right away — no waiting required!
          </p>

          <ul className="text-left max-w-md mb-8 text-gray-700 space-y-2">
            <li>✔️ Create viral TikToks and Reels step by step with easy-to-follow lessons</li>
            <li>✔️ Use a Personal AI Worker to boost your content</li>
            <li>✔️ Learn from expert-led courses designed for aspiring influencers</li>
          </ul>

          <a href="#" className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600">
            GET STARTED
          </a>

          <p className="text-sm text-gray-500 mt-4 max-w-md">
            1-minute quiz for personalized insights
          </p>

          <p className="text-xs text-gray-400 mt-2 max-w-md">
            By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms
          </p>
          </div>
          <div className="w-[390px] h-[426px] md:w-[666px] md:h-[679px]">
            <Image
              src={mobileMockup}
              alt="Mobile mockup"
              priority
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-6 border-t mt-8">
          Fametonic 2025 © All Rights Reserved.
        </footer>
      </main>
    </>
  );
}
