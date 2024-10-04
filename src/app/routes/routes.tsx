import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/Home/HomePage";
import ProjectPage from "../../pages/ProjectPage/ProjectPage";
import SkillsPage from "../../pages/Skills/SkillsPage";
import ContactsPage from "../../pages/Contacts/ContacsPage";



export const routers = createBrowserRouter([
   {
      path: '/portfolio',
      element: <HomePage/>
   },

   {
      path: '/portfolio/project/:id',
      element: <ProjectPage/>
   },
   {
      path: '/portfolio/my-skills',
      element: <SkillsPage />
   }, {
      path: '/portfolio/my-contacts',
      element: <ContactsPage />
   },
])
