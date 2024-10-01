import { useParams } from "react-router-dom";
import { project } from "../project";
import FlickitySlider from "../../widgets/Flickity/FlikcitySlider";
import Header from "../../widgets/Header/Header";
import { useTranslation } from "react-i18next";
import Footer from "../../widgets/Footer/Footer";

function ProductPage() {
   const params = useParams()
   const paramsID = params.id

   const { t } = useTranslation()

   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
   // @ts-ignore
   const selectedProj = project[paramsID]

   const flickityOptions = {
      initialIndex: 1,
      autoPlay: true
   }
   return (
      <div className="">
         <div className="bg-main-back5 h-[100vh] bg-center bg-cover">
            <Header></Header>
            <section className="container flex h-auto justify-center">
               <div className="w-[1400px]">{
                  selectedProj.slider !== true ? (
                     <div className="pb-[20px] flex flex-col items-center shadow-2xl rounded-[30px] bg-[#ffffff] cursor-pointer gap-3" key={selectedProj.image}>
                        <img className="h-auto" src={selectedProj.image} alt={selectedProj.title} />
                        <div className="p-[10px] text-center">
                           <p className="text-[clamp(20px,3.5vw,30px)] font-['Montserrat']">{selectedProj.title}</p>
                        </div>
                     </div>
                  ) : <div className="pb-[20px]  flex flex-col items-center shadow-2xl rounded-[30px] bg-[#ffffff] cursor-pointer gap-3">
                     <div className="h-auto w-full">
                        <FlickitySlider size={'100%'} images={selectedProj} options={flickityOptions}></FlickitySlider>
                     </div>
                     <div className="p-[10px] text-center">
                        <p className="text-[clamp(20px,3.5vw,30px)] font-['Montserrat']">{selectedProj.title}</p>
                     </div>
                  </div>
               }

                  <div className="flex flex-col py-[30px] ">
                     <a className="text-[clamp(20px,3.5vw,30px)] cursor-pointer font-['Montserrat'] transition duration-[.3s] hover:text-[#222e78]" href={selectedProj.url}>{t("main.visit-site")} (GitHub Pages)</a>
                     <a className="text-[clamp(20px,3.5vw,30px)] cursor-pointer font-['Montserrat'] transition duration-[.3s] hover:text-[#222e78]" href={selectedProj.gh}>{t("main.visit-gh")} </a>
                  </div>
               </div>
            </section>
         </div>
         <Footer></Footer>
      </div>


   );
}

export default ProductPage;