import { ImagesSkills, ImageSet } from "@/app/types/skills/image";


const FRONTEND : ImagesSkills[] = [
    {
      src:'/skills Icons/frontend/nextjs.svg',
      alt:'nextjs-logo',
      link: 'https://nextjs.org/'
    },
    {
      src:'/skills Icons/frontend/physics.png',
      alt:'react-logo',
      link:'https://react.dev/'
    },
    {
      src:'/skills Icons/frontend/redux-original.svg',
      alt:'redux-logo',
      link:'https://redux.js.org/'
    },
    {
      src:'/skills Icons/frontend/file-type-html.svg',
      alt:'html-logo',
      link:'https://html.com/'
    },
    {
      src:'/skills Icons/frontend/file-type-css.svg',
      alt:'css-logo',
      link:'https://www.w3schools.com/css/'
    },
    {
      src:'/skills Icons/frontend/bootstrap.svg',
      alt:'bootstrap-logo',
      link:'https://getbootstrap.com/'
    },
    {
      src:'/skills Icons/frontend/Tailwind CSS.svg',
      alt:'tailwind-logo',
      link:'https://tailwindcss.com/'
    }
]
const BACKEND : ImagesSkills[] = [
  {
    src:'/skills Icons/backend/icons8-express-js-150.png',
    alt:'express-logo',
    link:'https://expressjs.com/'
  },
  {
    src:'/skills Icons/backend/node-js.png',
    alt:'nodejs-logo',
    link:'https://nodejs.org/en'
  },
]
const DATABASE : ImagesSkills[] = [
  {
    src:'/skills Icons/database/icons8-mongodb-480.png',
    alt:'mongoDB-logo',
    link:'https://www.mongodb.com/'
  },
  {
    src:'/skills Icons/database/PostgresSQL.svg',
    alt:'postgresql-logo',
    link:'https://www.postgresql.org/'
  },
]
const FAMILIAR_WITH : ImagesSkills[] = [
  {
    src:'/skills Icons/familiar_with/AWS.svg',
    alt:'AWS-logo',
    link:'https://aws.amazon.com/'
  },
  {
    src:'/skills Icons/familiar_with/Firebase.svg',
    alt:'firebase-logo',
    link:'https://firebase.google.com/'
  },
  {
    src:'/skills Icons/familiar_with/GitHub.svg',
    alt:'github',
    link:'https://github.com/'
  },
  {
    src:'/skills Icons/familiar_with/NGINX.svg',
    alt:'nginx-logo',
    link:'https://nginx.org/'
  },
  {
    src:'/skills Icons/familiar_with/Postman.svg',
    alt:'postman-logo',
    link:'https://www.postman.com/'
  },
  {
    src:'/skills Icons/familiar_with/Socket.io.svg',
    alt:'socket.io-logo',
    link:'https://socket.io/'
  }
]

const SKILLS_TITLES = {
    FRONTEND_TITLE : "Frontend",
    BACKEND_TITLE : "Backend",
    DATABASE_TITLE : "Database",
    FAMILIAR: 'Familiar With'
} as const


export const SKILL_SECTIONS : ImageSet[] = [
  {
    title: SKILLS_TITLES.FRONTEND_TITLE,
    image: FRONTEND
  },
  {
    title: SKILLS_TITLES.BACKEND_TITLE,
    image: BACKEND
  },
  {
    title: SKILLS_TITLES.DATABASE_TITLE,
    image: DATABASE
  },
  {
    title: SKILLS_TITLES.FAMILIAR,
    image: FAMILIAR_WITH
  },
]
