import Header from "../../widgets/Header/Header";

import { SiNpm } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsFiletypeScss } from "react-icons/bs";
import { MdOutlineArchitecture } from "react-icons/md";
import { SiBem } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Footer from "../../widgets/Footer/Footer";

function SkillsPage() {

   const { t } = useTranslation()

   return (
      <div className="page  bg-main-back3 bg-cover bg-center">
            <Header></Header>
            <section className="container h-full pb-[300px] text-center m-auto ">
            <h3 className="text-[60px] font-['Montserrat']">{t('main.my-proj')} <span className="text-[#000080] font-['Montserrat']">{t('skills.my-skills')}:</span></h3>
               <ol className="pt-[60px] drop-shadow-md  flex flex-col items-center  ">
               
                  <li ><a className="skill-item" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript <FaJsSquare /></a> </li>
                  <li><a href="https://www.typescriptlang.org/docs/" className="skill-item">TypeScript <SiTypescript /></a></li>
                  <li><a href="https://react.dev/reference/react" className="skill-item">ReactJS <RiReactjsFill /></a></li>
                  <li><a href="https://redux-toolkit.js.org/api/configureStore" className="skill-item">Redux Toolkit <TbBrandRedux /></a></li>
                  <li><a href="https://redux-toolkit.js.org/rtk-query/overview" className="skill-item">RTK Query <TbBrandRedux /></a></li>
                  <li><a href="https://www.w3schools.com/html/html_intro.asp" className="skill-item">HTML <FaHtml5 /></a></li>
                  <li><a href="https://www.w3schools.com/css/" className="skill-item">CSS <FaCss3 /></a></li>
                  <li><a href="https://docs.npmjs.com/about-npm" className="skill-item">NPM <SiNpm /></a></li>
                  <li><a href="https://tailwindcss.com/docs/installation" className="skill-item">TailwindCSS <RiTailwindCssFill /></a></li>
                  <li><a href="https://sass-lang.com/documentation/at-rules/control/for/" className="skill-item">SCSS <BsFiletypeScss /></a></li>
                  <li><a href="https://feature-sliced.design/docs" className="skill-item">FSD (architekture) <MdOutlineArchitecture /></a></li>
                  <li><a href="https://getbem.com/" className="skill-item">BEM <SiBem /></a></li>
                  <li><a href="https://docs.github.com/en" className="skill-item">GitHub <FaGithub /></a></li>
               </ol>
            </section>
         <Footer></Footer>
      </div>
   );
}

export default SkillsPage;