import { useTranslation } from "react-i18next";
import Footer from "../../widgets/Footer/Footer";
import Header from "../../widgets/Header/Header";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa6";


function ContactsPage() {

   const { t } = useTranslation()
   const [copy, setCopy] = useState(false)

   const copyTextToClipboard = async (text: string) => {
      try {
         await navigator.clipboard.writeText(text);
         setCopy(true)
      } catch (err) {
         console.error('Ошибка:', err);
      }
   };

   return (
      <div className="page bg-main-back3 h-auto  bg-center bg-cover">
         <Header />
         <section className="container pb-[200px]  text-center flex flex-col gap-[80px]">
            <h3 className="text-[clamp(40px,3.5vw,60px)] font-['Montserrat']"> <span className="text-[#000080] font-['Montserrat']">{t('contacts.my-cont')}</span></h3>
            <div>
               <h3 className="text-[clamp(30px,3.5vw,50px)] font-['Montserrat']">Location</h3>
               <p className="text-[clamp(20px,3.5vw,40px)]">Poland, Warlow</p>
            </div>
            <div>
               <h3 className="text-[clamp(30px,3.5vw,50px)] font-['Montserrat']">Telegram / WhatsApp</h3>
               <div  onClick={() => copyTextToClipboard('+380 98 131 29 29')} className="hover:text-[#000080] cursor-pointer flex justify-center items-baseline gap-[20px]">
                  <p className="text-[clamp(20px,3.5vw,40px)]">+380 98 131 29 29 </p>
                  {copy ? <FaCopy size={'30px'} /> : <FaRegCopy size={'30px'} />}
               </div>
            </div>
            <div>
               <h3 className="text-[clamp(20px,3.5vw,50px)] font-['Montserrat']">Email</h3>
               <p className="text-[#000080] text-[clamp(20px,3.5vw,40px)]">denishuziuk@gmail.com</p>
            </div>
         </section>
         <Footer />
      </div>
   );
}

export default ContactsPage;