import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';
import MineSweeperImg from '../images/minesweeper.png';
import AnonynousBlogImg from '../images/anonymous-blog.png';

const projects = [
  {
    id: uuidv4(),
    name: "Let's Chat",
    desc:
      'A full-stack MERN chat application which allows users to communicate through both one-on-one chats and group chats. Real-time messaging and notifcations was achieved by using Socket.IO.',
    img: UTrackerImg,
    githubUrl: 'https://github.com/sterlyn-t/lets-chat/tree/master/lets-chat',
    liveDemoUrl: 'test',
  },
  {
    id: uuidv4(),
    name: 'Personal Portfolio',
    desc:
      'A responsive portfolio webiste created to showcase my projects and experiences. It was created using React.js together with styled-components and it was deployed using Netlify.',
    img: GreenCtgImg,
    githubUrl: null,
    liveDemoUrl: 'test',
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
];

export default projects;
