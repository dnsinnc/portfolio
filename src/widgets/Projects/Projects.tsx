import { t } from "i18next";
import { useNavigate } from "react-router-dom";
import FlickitySlider from "../../widgets/Flickity/FlikcitySlider";
import { Ref } from 'react';
import { project } from '../../pages/project'


interface ProjProps {
   ref: Ref<HTMLDivElement>;
}

function Projects({ ref }: ProjProps) {
   const flickityOptions = {
      initialIndex: 1,
      autoPlay: true
   }

   const changeActiveNav = () => {
      localStorage.setItem('activeNav', t('header.nav.proj'))
   }

   const nav = useNavigate()


   return (
      <div className="bg-main-back  bg-center bg-cover">
         <section ref={ref} className="container  py-[100px]">
            <h2 className="text-[clamp(50px,4.5vw,60px)] text-center font-['Montserrat']">{t('main.my-proj')} <span className="text-[#000080] font-['Montserrat']">{t('main.my-proj2')}</span></h2>

            <div className="projects">
               {project.map((e, ind) => (
                  e.slider !== true ? (
                     <div onClick={() => { changeActiveNav(); nav(`/portfolio/project/${ind}`) }} className="proj-wrapp" key={ind}>
                        <img className="proj-card" src={e.image} alt={e.title} />
                        <div className="p-[10px]">
                           <p className="text-[clamp(14px,2.5vw,20px)] font-['Montserrat']">{e.title}</p>
                        </div>
                     </div>
                  ) :
                     <div key={ind} onClick={() => { changeActiveNav(); nav(`/portfolio/project/${ind}`) }} className="proj-wrapp  flex items-center">
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
   );
}

export default Projects;