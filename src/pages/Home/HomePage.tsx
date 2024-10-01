import Header from "../../widgets/Header/Header";
import { useTranslation } from "react-i18next";

import pl from './image/denyshuziukPL.jpg'
import ua from './image/denyshuziukUA.jpg'
import eng from './image/denyshuziukENG.jpg';
import face from './image/face.jpg';
import FlickitySlider from "../../widgets/Flickity/FlikcitySlider";

import { useNavigate } from "react-router-dom";
import { project } from '../project'
import { useRef } from "react";
import Footer from "../../widgets/Footer/Footer";



function HomePage() {

   const nav = useNavigate()

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

   const flickityOptions = {
      initialIndex: 1,
      autoPlay: true
   }


   return (
      <div className="h-[100vh]">
         <main >
            <div className="bg-main-back3  bg-cover bg-center">
               <Header sectionRef={projectRef}></Header>


               <section className=" relative container  pb-[100px] ">
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
            <div className="bg-main-back h-[100%] bg-center bg-cover">
               <section ref={projectRef} className="container py-[100px]">
                  <h2 className="text-[clamp(50px,4.5vw,60px)] text-center font-['Montserrat']">{t('main.my-proj')} <span className="text-[#000080] font-['Montserrat']">{t('main.my-proj2')}</span></h2>

                  <div className="projects">
                     {project.map((e, ind) => (
                        e.slider !== true ? (
                           <div onClick={() => nav(`/portfolio/project/${ind}`)} className="proj-wrapp" key={ind}>
                              <img className="proj-card" src={e.image} alt={e.title} />
                              <div className="p-[10px]">
                                 <p className="text-[clamp(14px,2.5vw,20px)] font-['Montserrat']">{e.title}</p>
                              </div>
                           </div>
                        ) :
                           <div key={ind} onClick={() => nav(`/portfolio/project/${ind}`)} className="proj-wrapp  flex items-center">
                              <div className="proj-card">
                                 <FlickitySlider size="466px" images={e} options={flickityOptions}></FlickitySlider>
                              </div>
                              <div className="p-[10px]">
                                 <p className="text-[clamp(14px,2.5vw,20px)] font-['Montserrat']">{e.title}</p>
                              </div>
                           </div>
                     ))}
                  </div>
               </section>
            </div>
         </main>
         <Footer></Footer>
      </div>


   );
}

export default HomePage;

// export project
