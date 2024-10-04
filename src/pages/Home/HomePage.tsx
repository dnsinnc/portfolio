import Header from "../../widgets/Header/Header";
import { useTranslation } from "react-i18next";

import pl from './image/denyshuziukPL.jpg'
import ua from './image/denyshuziukUA.jpg'
import eng from './image/denyshuziukENG.jpg';
import face from './image/face.jpg';

import { useRef } from "react";
import Footer from "../../widgets/Footer/Footer";
import Projects from "../../widgets/Projects/Projects";



function HomePage() {


   const projectRef = useRef<null>(null)


   const { t, i18n } = useTranslation()

   const getImageByLanguage = () => {
      switch (i18n.language) {
         case 'en':
            return eng;
         case 'uk':
            return ua;
         case 'pl':
            return pl;
         default:
            return eng;
      }
   }

   return (
      <main className="page">
         <div className="bg-main-back3  bg-cover bg-center">
            <Header sectionRef={projectRef}></Header>
            <section className=" relative container pb-[100px] ">
               <div className="flex lg:justify-between justify-center">
                  <div className="drop-shadow-lg h-[500px] relative z-50 bg-center bg-no-repeat flex flex-col  justify-center">

                     <h1 className="text-[clamp(50px,4.5vw,80px)] leading-[160%] text-left font-['Montserrat']">{t('main.hi')}👋🏻</h1>
                     <h2 className="text-[clamp(50px,4.5vw,80px)] leading-[100%]  font-['Montserrat']">{t('main.name')} <span className="text-[#000080] font-['Montserrat']">{t('main.name2')}</span></h2>

                     <p className="text-[clamp(30px,2.5vw,35px)] leading-[100%]">{t('main.front')}</p>
                     <p className="text-[clamp(20px,2.5vw,25px)]">{t('main.passion')}</p>

                     <a href={getImageByLanguage()} download className="hover:opacity-[0.7] text-center transition-all duration-500	 bg-[#156f8f] mt-[50px] rounded-xl text-white px-[35px] py-[15px] max-w-[300px]">{t('main.downlCV')}</a>

                  </div>
                  <div className=" after:-z-2 after:-top-[200px] after:opacity-[0.4] after:bg-[length:900px_900px] after:right-[100px] after:absolute after:bg-center after:bg-no-repeat after:h-[1000px] after:w-[1000px] after:bg-main-back-2">
                     <img className="lg:block hidden drop-shadow-lg rounded-[40px] relative z-20 max-h-[600px]" src={face} alt="" />
                  </div>
               </div>
            </section>


         </div>
         <Projects ref={projectRef}></Projects>
         <Footer></Footer>

      </main>


   );
}

export default HomePage;

// export project
