
import react from 'react'

import './styles.css';

import logoImg from '../../assets/image/logo.png'
import rv      from '../../assets/image/rv.png'
import bs      from '../../assets/image/bs.png'

import BrIcon from '../../assets/image/icon/br-icon.png'
import EsIcon from '../../assets/image/icon/es-icon.png'
import UsIcon from '../../assets/image/icon/us-icon.png'
import ArIcon from '../../assets/image/icon/ar-icon.png'

export default function Header() {



  return (
    <>
    <nav className="font-sans 
                    flex 
                    flex-col 
                    text-center 
                    sm:flex-row 
                    sm:text-left 
                    sm:justify-between 
                    py-4 
                    px-6 
                    bg-white 
                    shadow
                    sm:items-baseline 
                    w-full"
                    >
      <div className="mb-2 sm:mb-0">
        <a href="/home" className="text-xl no-underline text-grey-darkest hover:text-blue-dark">
          <img src={logoImg} alt="Nauber" className="w-44 h-12 my-auto m-12 mt-2" />
        </a>
      </div>

      <form className="max-w-sm px-4">
            <div className="relative self-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="busque aqui seu produto"
                    className="w-96 
                               py-3 
                               pl-14 
                               pr-4 
                               text-gray-500 
                               border 
                               rounded-full 
                               outline-none 
                               bg-gray-50 
                               focus:bg-white 
                               focus:border-indigo-600"
                />
            </div>
        </form>

      <div className="flex">
    <div className="container-navbar">
      <img src={rv} alt="Nauber" className="w-10 h-11 my-auto" />
        <a href="/" className=" text-xs no-underline text-grey-darkest">CONHEÇA O SISTEMA<br /> DE REVÊNDA<br /> <strong>NAUBER PRO</strong></a>
        <img src={bs} alt="Nauber" className="w-44 h-12 my-auto" />
        <a className="text-2xl font-bold"> | </a>
        <div className="flex items-center justify-between lang">
          <img src={BrIcon} alt="" className="w-7 h-3.5 self-center" />
          <img src={EsIcon} alt="" className="w-7 h-3.5 self-center" />
          <img src={UsIcon} alt="" className="w-7 h-3.5 self-center" />
          <img src={ArIcon} alt="" className="w-7 h-3.5 self-center" />
        </div>
      </div>  
    </div>
    </nav>

    <nav className="font-sans 
                    flex 
                    flex-col 
                   te xt-center 
                    sm:flex-row 
                    justify-between  
                    py-4 
                    px-6
                    mx-48
                    rounded-b-lg
                    bg-gradient-to-r from-green-700 via-green-800 to-green-700
                    shadow 
                    sm:items-baseline 
                    w-4/5">
      <div className="container">
        <a href="/" className="text-amber-300 link">HOME </a>
        <a href="/" className="link ">EMPRESA </a>
        <a href="/" className="link">PRODUTOS </a>
        <a href="/" className="link">ASSISTÊNCIAS </a>
        <a href="/" className="link">CATÁLOGOS VIRTUAIS </a>
        <a href="/" className="link">CONTATO </a>
        <a href="/" className="link"> login </a>
      </div>
    </nav>

    </>
  )
}
