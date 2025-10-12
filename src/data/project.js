import apiRestImg from '../../public/img/projects/api_rest.webp';
import appMovilImg from '../../public/img/projects/app_movil.webp';
import paginaWebImg from '../../public/img/projects/pagina_web.webp';

const projects = [
    {
      id: 1,
      name: 'Proyecto Api Rest',
      description: 'Proyecto desarrollado con Java, Spring Boot y MySQL.',
      tecnologies: ['Java', 'Spring Boot', 'MySQL'],
      image: apiRestImg,
      url: 'https://github.com/Dani-txt/Xpress.git'
    },
    {
      id: 2,
      name: 'Proyecto App movil',
      description: 'Proyecto desarrollado con AndroidStudio y Kotlin',
      tecnologies: ['Kotlin', 'AndroidStudio'],
      image:  appMovilImg,
      url: 'https://github.com/Dani-txt/TuAuto'
    },
    {
      id: 3,
      name: 'Proyecto Página web',
      description: 'Proyecto desarrollado con React, JavaScript y Bootstrap.',
      tecnologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Bootstrap'],
      image:  paginaWebImg,
      url: 'https://github.com/Dani-txt/Libreria.git'
    }
  ];
  
  
  export default projects;