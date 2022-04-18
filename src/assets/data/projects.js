import { v4 as uuidv4 } from 'uuid';
import CoinTrackerImg from '../images/cointracker.jpg';
import MineSweeperImg from '../images/minesweeper.png';
import AnonynousBlogImg from '../images/anonymous-blog.png';
import ChatAppImg from '../images/chat-app.jpg';
import PersonalPortfolioImg from '../images/personal-portfolio-2.jpg';
import MovieAppImg from '../images/movie-app.jpg';
import WordleImg from '../images/infinite-wordle.png';

const projects = [
  {
    id: uuidv4(),
    name: "Let's Chat",
    desc:
      'A full-stack MERN chat application which allows users to communicate through both one-on-one chats and group chats. Real-time messaging and notifcations was achieved by using Socket.IO.',
    img: ChatAppImg,
    githubUrl: 'https://github.com/sterlyn-t/lets-chat/tree/master/lets-chat',
    liveDemoUrl: 'https://mern-lets-chat.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Personal Portfolio',
    desc:
      'A responsive portfolio webiste created to showcase my projects and experiences. It was created using styled-components and React.js, and it is deployed on Netlify with CI/CD.',
    img: PersonalPortfolioImg,
    githubUrl: 'https://github.com/sterlyn-t/react-portfolio',
    liveDemoUrl: 'https://sterlyns-portfolio.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Crypto Tracker',
    desc:
      'Created an app which allows the user to track their favorite cryto currencies. It also allows the user to simulate buying and selling these currencies. This app was created using React.js, Material UI, Chart.js and Firebase.',
    img: CoinTrackerImg,
    githubUrl: 'https://github.com/sterlyn-t/crypto-tracker',
    liveDemoUrl: 'https://crypto-tracker-netlify.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Infinite Wordle Clone',
    desc:
      'A clone of the popular Wordle game which allows for continuous play built using React.js and React Hooks.',
    img: WordleImg,
    githubUrl: 'https://github.com/sterlyn-t/infinite-wordle/tree/master',
  },
  {
    id: uuidv4(),
    name: 'Anonymous Blog',
    desc:
      'A blog application that allows me to share my personal and professional experiences. I used Bootstrap, Node.js, Express.js and MongoDB.',
    img: AnonynousBlogImg,
    githubUrl: 'test',
    liveDemoUrl: 'https://anonymous-b.herokuapp.com/',
  },
  // {
  //   id: uuidv4(),
  //   name: 'Tracking Soft',
  //   desc:
  //     'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
  //   img: ProjectImg,
  // },
  {
    id: uuidv4(),
    name: 'MineSweeper',
    desc:
      'Created a MineSweeper clone in C++ using 2D arrays and Object-Oriented Programming principles. The user could select 3 different difficulties which vaired the size of the board and the number of bombs present.',
    img: MineSweeperImg,
  },
  {
    id: uuidv4(),
    name: 'Movie Search App',
    desc:
      'In an attempt to learn about APIs, I created a simple movie search application using the TMDB API. The user is presented with the currently trending movies along with their respective ratings and descriptions.',
    img: MovieAppImg,
    githubUrl: 'https://github.com/sterlyn-t/movie-search-app',
    liveDemoUrl: 'https://sterlyn-t.github.io/movie-search-app/',
  },
];

export default projects;
