// import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";


function Footer() {
   return ( 
      <footer className="bg-[black]  flex flex-col items-center pb-[30px] h-auto w-full">
         <ol className="flex gap-10 pt-[50px] py-[20px]">
            <li><a href="https://www.instagram.com/dnsinnc/"><FaInstagram size={'40px'} color="white" /></a></li>
            <li><a href="https://github.com/dnsinnc"><FaGithub size={'40px'} color="white" /></a></li>
         </ol>

         <p className="text-[white]">© 2024 frontend-dev.com</p>
      </footer>
    );
}

export default Footer;
