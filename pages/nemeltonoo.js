import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Menu,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
  LogIn,
  PhoneCall,
  Mail,
} from "react-feather";

   export default function Best() {

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white relative overflow-x-hidden">
      

      <div className="h-screen w-20 fixed left-0 top-0 z-30 flex flex-col pt-20">
        <div className="bg-[#2a2a2a] p-5 grow flex flex-col w-full items-center gap-3 ">
          <div className="w-px bg-gray-500 grow"></div>
          <a
            href="https://facebook.com"
            target="_blank"
            className="size-10 flex items-center justify-center border border-gray-500 rounded-full transition-all">
            
            <Facebook size={20} className="text-white" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            className="size-10 flex items-center justify-center border border-gray-500 rounded-full transition-all" >
            
            <Instagram size={20} className="text-white" />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            className="size-10 flex items-center justify-center border border-gray-500 rounded-full transition-all">
            
            <Youtube size={20} className="text-white" />
          </a>

          <div className="w-px bg-gray-500 h-15"></div>
        </div>

        <div className="w-20 py-12 bg-[#1a1a1a] flex items-center justify-center shrink-0 border-b-4 border-rose-500 box-border">
          <p className="[writing-mode:vertical-rl] whitespace-nowrap rotate-180 text-sm text-slate-300">
            oBest Delivery 2025.
          </p>
        </div>
      </div>
  
      


  
      <header className="fixed top-0 left-0 right-0 h-20 z-40 flex items-center">
        <button className="size-20 p-7 flex items-center justify-center bg-rose-500 text-white hover:brightness-90 transition-all">
          <Menu size={24} />
        </button>

        <Link href="/" className="h-full bg-[#1a1a1a] px-6 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="239"
            height="36"
            fill="none"
            viewBox="0 0 239 36"
          >
          </svg>
        </Link>

        <div className="grow h-full flex justify-end items-center gap-5 bg-[#2a2a2a] px-7 opacity-70">
          <div className="flex items-center gap-3 whitespace-nowrap text-sm opacity-100">
            <PhoneCall size={20} className="text-gray-400" />
            <span className="text-white">+976 8806 4934</span>
          </div>

          <div className="flex items-center gap-3 whitespace-nowrap text-sm opacity-100">
            <Mail size={20} className="text-gray-400" />
            <span className="text-white">Besthurgelt@gmail.com</span>
          </div>
        </div>

        <Link
          href="/signin"
          className="w-44 h-full shrink-0 font-bold flex items-center justify-center gap-2 bg-rose-500 text-white hover:brightness-90 transition-all"
        >
          <LogIn size={20} />
          <span className="text-sm">Нэвтрэх</span>
        </Link>
      </header>


      
      

      <div className="w-screen min-h-screen relative flex flex-col justify-center items-start pl-40 pr-32 p-8 gap-6 bg-[url('/bike.webp')] bg-cover bg-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="262"
          height="131"
          fill="none"
          viewBox="0 0 262 131"
        >
          <path
            fill="currentColor"
            d="M46.863 31.234c4.034 1.897 6.548 6.367 5.632 11.094A17.625 17.625 0 0 1 35.192 56.6H11.126L13.26 45.49h17.336l-.44 2.442 10.925-6.265-8.675-6.267-.484 2.7H14.68l1.173-6.113.327-1.706.682-3.557H34l-.438 2.444L44.484 22.9l-8.673-6.264-.486 2.698H18.281l2.071-10.8h23.224c7.122 0 12.48 6.496 11.127 13.49a12.31 12.31 0 0 1-7.84 9.21M77.201 18.78c-10.714 0-20.356 8.66-21.537 19.342-1.178 10.682 6.552 19.34 17.263 19.34 6.144 0 11.933-2.847 15.98-7.289l-8.464-6.604c-1.425 2.22-3.735 3.204-6.161 3.204-2.736 0-4.928-1.905-5.875-4.704H92.63C97.465 28.223 87.915 18.78 77.2 18.78M69.03 34.375c1.427-2.774 4.05-5.092 6.82-5.213 4.39-.194 5.616 1.946 5.935 5.213zM149.209 31.643h7.389l2.517-11.573h-7.611l1.916-9.664h-13.161l-1.46 6.536a4 4 0 0 1-3.904 3.128h-2.801l-2.517 11.573h5.935l-2.406 10.765c-1.616 7.233 3.886 14.1 11.296 14.1h7.616l2.099-11.765h-2.955a3.734 3.734 0 0 1-3.662-4.46l1.711-8.64zM104.33 43.148s1.271 4.45 5.024 4.45 4.324-3.37.571-4.64c-3.752-1.272-12.398-3.318-12.398-11.196s6.995-12.393 17.168-12.393 13.543 5.278 13.86 8.328l-11.509 4.065s-.255-1.966-1.78-2.602c-1.525-.637-4.188-.104-4.007 1.59.197 1.82 2.862 2.353 7.503 4.07 4.641 1.716 8.329 5.404 7.377 11.064-.951 5.66-6.169 11.578-16.596 11.578-10.428 0-15.705-4.266-16.468-10.244zM68.412 82.888c-10.185 0-19.35 8.232-20.472 18.385-1.12 10.153 6.228 18.383 16.41 18.383 5.84 0 11.342-2.706 15.189-6.929l-8.046-6.277c-1.354 2.11-3.55 3.045-5.856 3.045-2.6 0-4.685-1.811-5.584-4.471h23.024c4.595-13.16-4.481-22.136-14.665-22.136M60.644 97.71c1.356-2.636 3.849-4.84 6.483-4.954 4.172-.184 5.337 1.85 5.641 4.954zM178.232 82.888c-10.184 0-19.349 8.232-20.471 18.385-1.12 10.153 6.227 18.383 16.409 18.383 5.839 0 11.342-2.706 15.189-6.929l-8.046-6.277c-1.354 2.11-3.55 3.045-5.856 3.045-2.601 0-4.684-1.811-5.584-4.471h23.024c4.596-13.16-4.481-22.136-14.665-22.136m-7.768 14.822c1.356-2.636 3.849-4.84 6.483-4.954 4.173-.184 5.338 1.85 5.641 4.954zM47.081 92.897c0 14.304-11.593 25.899-25.897 25.899H0l3.294-16.98H15.41l-1.524 7.256 26.082-13.091-20.713-13.094-1.156 7.314H5.548l3.304-17.036h18.497a19.67 19.67 0 0 1 13.952 5.78 19.67 19.67 0 0 1 5.78 13.952M106.457 71.11H93.634l-9.33 47.684h12.823zM121.526 84.165l-6.775 34.632h-12.82l6.775-34.632zM124.081 84.165l4.835 34.629h15.352l17.89-34.629h-14.263l-8.826 20.912-1.933-20.912zM247.376 84.165l-8.393 21.301-1.76-21.301h-12.814l5.089 39.397-4.132 6.897h12.711L262 84.165zM212.366 87.089l.538-2.924h-12.323l-6.459 34.632h12.94l3.426-18.536a7.635 7.635 0 0 1 7.175-5.034h1.789l2.297-11.909c-5.864 0-9.383 3.77-9.383 3.77M125.136 72.845c-.337 4.205-4.122 7.614-8.452 7.614s-7.567-3.409-7.229-7.614c.337-4.206 4.122-7.615 8.452-7.615s7.567 3.409 7.229 7.615"
          />
        </svg>

        <p className="text-xl max-w-[380px] text-white">
          Та доорх товч дээр дарж хүргэлтээ шалгах боломжтой.
        </p>

        <a className="rounded-xl gap-2 font-bold px-6 py-4 text-sm w-fit flex items-center bg-rose-500 text-white hover:brightness-90 transition-all">
          Хүргэлт шалгах
          <ArrowRight size={20} />
        </a>
      </div>
      <div
        className="w-screen min-h-screen relative bg-[#2a2a2a] flex justify-center items-center overflow-hidden px-36"
      >
        <div className="w-full flex flex-row justify-between items-center z-10">
          <div className="flex flex-col gap-9 w-min p-6 items-center">
            <div className="flex items-start flex-col gap-9 flex-1">
              <div className="block items-end gap-2">
                <p className="font-bold text-6xl text-rose-500">Бест</p>
                <p className="font-bold text-5xl text-white">Хүргэлт</p>
              </div>
              <p className="text-gray-300 text-base max-w-md">
                Bestdelivery.mn цогц системээр та хүргэлтээ хянах, захиалга
                өгөх, агуулахын тоо бүртгэл болон тайлангаа нэг дор шийднэ.
                <br />
                AppStore, GooglePlay-ээс апп-аа татаж аваарай.
              </p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="393"
              height="180"
              fill="none"
              viewBox="0 0 393 180"
              className="flex-1 block w-max"
            >
              <path
                stroke="url(#paint0_linear_82_430)"
                strokeMiterlimit="10"
                strokeWidth="4"
                d="M389 89.569 275.662 3.586l-6.313 37.032H2v101.459h250.021l-5.721 33.509z"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_82_430"
                  x1="389"
                  x2="2"
                  y1="89.586"
                  y2="89.586"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F33454" />
                  <stop offset="1" stopColor="#F33454" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="flex items-center relative">
            <div className="flex flex-col gap-9 w-[460px] absolute right-52 z-10">

              <div className="p-12 flex flex-col gap-9 bg-rose-500 rounded-3xl">
                <div className="flex gap-3 h-6 items-center">
                  <p className="w-15 text-center text-3xl text-white/70 font-bold">
                    01
                  </p>
                  <p className="text-2xl font-bold text-white">
                    Түргэн шуурхай
                  </p>
                </div>
                <p className="leading-5 text-base text-white/90">
                  Bestdelivery.mn цогц системээр та хүргэлтээ хянах, захиалга
                  өгөх, агуулахын тоо бүртгэл болон тайлангаа
                </p>
              </div>
           
              <div className="p-12 flex flex-col gap-9 bg-rose-500 rounded-3xl">
                <div className="flex gap-3 h-6 items-center">
                  <p className="w-15 text-center text-3xl text-white/70 font-bold">
                    02
                  </p>
                  <p className="text-2xl font-bold text-white">Найдвартай</p>
                </div>
                <p className="leading-5 text-base text-white/90">
                  Bestdelivery.mn цогц системээр та хүргэлтээ хянах, захиалга
                  өгөх, агуулахын тоо бүртгэл болон тайлангаа
                </p>
              </div>
              
              <div className="p-12 flex flex-col gap-9 bg-rose-500 rounded-3xl">
                <div className="flex gap-3 h-6 items-center">
                  <p className="w-15 text-center text-3xl text-white/70 font-bold">
                    03
                  </p>
                  <p className="text-2xl font-bold text-white">Core Value 3</p>
                </div>
                <p className="text-white">
                  Bestdelivery.mn цогц системээр та хүргэлтээ хянах, захиалга
                  өгөх, агуулахын тоо бүртгэл болон тайлангаа
                </p>
              </div>
            </div>
           

            <div className="relative w-96 h-[600px]">
              <div className="w-full h-full object-cover bg-[url('/com.webp')] bg-cover bg-center rounded-4xl"></div>
            </div>
          </div>
        </div>

        <div className="rounded-full w-[536px] h-[536px] absolute -left-48 bg-rose-500/30 blur-[150px] z-0"></div>
        <div className="rounded-full w-[816px] h-[816px] absolute -top-[464px] bg-red-200/20 blur-[150px] z-0"></div>
        <div className="rounded-full w-[904px] h-[904px] absolute -bottom-[464px] bg-blue-500/20 blur-[150px] z-0"></div>
        <div className="rounded-full w-[536px] h-[536px] absolute -right-[264px] bg-rose-500/30 blur-[150px] z-0"></div>
      </div>
    
    </div>
  );
}