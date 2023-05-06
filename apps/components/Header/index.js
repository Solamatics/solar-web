import React from "react";
import { FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { BsStopwatch } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FiHome } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
import { BsCart2 } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import Image from "next/image";
import CompanyLogo from "../../../public/assets/companylogo.png";
import Link from "next/link";

function Header() {
  return (
    <>
      <header className="flex justify-center m-12" id="header">
        <nav className="flex flex-col md:flex-row gap-8">
          <div className="flex items-center gap-5">
            <GoLocation color="black" className="header-icon" />
            <span className="text-sm md:text-base">
              Ecocity Projects Limited,Abuja:59 Usuma Street, Maitama, Abuja,
              Nigeria
              <br /> Lagos:Suite 3, 321B, Dr Akin Ogunlewe Street, VI
            </span>
          </div>

          <div>
            <div className="flex items-center gap-4">
              <FiPhone color="black" className="header-icon" />
              <p className="text-sm md:text-base">+234 913 105 5320</p>
            </div>
            <div className="flex items-center gap-4">
              <HiOutlineMail color="black" className="header-icon" />
              <p className="text-sm md:text-base">info@ecocity.group</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <BsStopwatch color="black" className="header-icon" />
            <p className="text-sm md:text-base">
              Opening Hours: Monday - Friday:
              <br /> 9:00AM - 5:00PM
            </p>
          </div>
        </nav>
      </header>
      <hr className="rule" />

      <div className="flex justify-center m-12">
        <div className="flex flex-col md:flex-row justify-between gap-12 items-center">
          <div className="flex items-center">
            <Image src={CompanyLogo} width={40} height={40} alt="logo" />
            <span>ECOCITY SOLARCLUB</span>
          </div>
          <div className="flex flex-col md:flex-row  items-center gap-5">
            <Link href="/shop">Support</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/shop">About Us</Link>
            <Link href="/shop">Contact Us</Link>

            <button className="bg-[#09445A] text-[#85C872] py-2 px-6 rounded-sm">
              APP
            </button>

            {/* <div className="border-2 border-[#CBD2E0] w-[100%] px-8">
              <input type="text" />
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-[#85C872] text-white p-2 rounded-sm">
                Go
              </button>
              <FiHome className="header-icon" color="grey" />
              <RxPerson className="header-icon" color="grey" />
              <BsCart2 className="header-icon" color="grey" />
              <BsQuestionCircle className="header-icon" color="grey" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
