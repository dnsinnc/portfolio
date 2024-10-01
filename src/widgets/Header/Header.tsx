import iconUA from './img/ukraine.png'
import iconPL from './img/poland.png'
import iconGB from './img/gratebritan.png'
import { GoChevronDown } from "react-icons/go";
import { MutableRefObject, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";


interface HeadProps {
   sectionRef?: MutableRefObject<null>;
}

function Header({ sectionRef }: HeadProps) {
   const { t, i18n } = useTranslation()

   const [changeLang, setChangeLang] = useState({ open: false, lang: localStorage.getItem("lang") })
   const [openMenu, setOpenMenu] = useState(false)

   const nav = useNavigate()

   const language = [
      { lang: 'en', icon: iconGB },
      { lang: 'uk', icon: iconUA },
      { lang: 'pl', icon: iconPL }
   ]

   const toggleLangMenu = () => {
      setChangeLang(prev => ({ ...prev, open: !prev.open }));
   };

   const onChangeLang = (event: { lang: string; icon?: string; }) => {
      setChangeLang(prev => ({ ...prev, lang: localStorage.getItem("lang") }))
      localStorage.setItem("lang", event.lang)
      i18n.changeLanguage(event.lang);
   }
   
   const buttonHandler = (ref: MutableRefObject<null> | undefined) => {
      nav('/portfolio')
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref.current.scrollIntoView();
      setOpenMenu(false)

   };

   const onOpenMenu = () => {
      setOpenMenu(!openMenu)
      document.body.style.cssText = `overflow: hidden`;
   }
   if (!openMenu) {
      document.body.style.cssText = `overflow: visible`;
   }

   return (
      <header className="w-full relative z-[60] mb-[70px] shadow drop-shadow-lg h-auto pt-[40px] pb-[30px] ">
         <div className="flex container justify-between relative">
            <div>
               <div 
                  className=" after:-top-[250px] after:opacity-[0.4] after:-z-10 after:left-[0px] after:absolute after:bg-no-repeat after:w-[300px] after:h-[300px] after:bg-decor cursor-pointer text-[#000080] text-[40px]">
                  <h1 onClick={() => nav('/portfolio')}>𝓓𝓮𝓷𝔂𝓼</h1>
                  </div>
            </div>
            <div className='flex items-center pr-[100px] gap-10'>
               <nav className='lg:flex hidden items-center'>
                  <li className="flex cursor-pointer gap-5 text-xl">
                     <ol onClick={() => nav('/portfolio')}> {t('header.nav.home')}</ol>
                     <ol onClick={() => buttonHandler(sectionRef)}>{t('header.nav.proj')}</ol>
                     <ol onClick={() => nav('/portfolio/my-skills')} >{t('header.nav.skills')}</ol>
                     <ol>{t('header.nav.contacts')}</ol>
                  </li>
               </nav>
               <button className='lg:hidden block items-center' onClick={onOpenMenu}><TiThMenu color='000080' size={'30px'}/></button>
               <nav className={`z-[100] absolute h-[100vh] w-full bg-[black] opacity-[0.7] -top-[2000px] left-0 ${openMenu ? 'openmenu' : ''}`}>
                  <li className="flex flex-col text-center text-[white] pt-[100px] cursor-pointer gap-5 text-[40px]">
                     <ol onClick={() => { setOpenMenu(false); nav('/portfolio') }}> {t('header.nav.home')}</ol>
                     <ol onClick={() => buttonHandler(sectionRef)}>{t('header.nav.proj')}</ol>
                     <ol onClick={() => { setOpenMenu(false); nav('/portfolio/my-skills')}} >{t('header.nav.skills')}</ol>
                     <ol>{t('header.nav.contacts')}</ol>
                     <button className='relative z-[100]' onClick={() => setOpenMenu(false)}>CLOSE</button>

                  </li>
               </nav>
               <div onClick={toggleLangMenu} className='flex cursor-pointer absolute right-0'>
                  <button className={`flex flex-col gap-3 w-[40px] h-[40px] overflow-hidden ${changeLang.open ? 'showLangMenu' : ''}`}>
                     {language.filter(l => l.lang === changeLang.lang).map(lang => (
                        <img className='hover:animate-pulse' key={lang.icon} onClick={() => onChangeLang(lang)} src={lang.icon} alt={lang.lang} />
                     ))}
                     {language.filter(l => l.lang !== changeLang.lang).map(lang => (
                        <img key={lang.icon} onClick={() => onChangeLang(lang)} src={lang.icon} alt={lang.lang} />
                     ))}
                  </button>
                  <GoChevronDown size={'30px'} />


               </div>

            </div>
         </div>
      </header>
   );
}

export default Header;