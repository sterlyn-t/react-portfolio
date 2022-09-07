import { v4 as uuidv4 } from 'uuid';
import BtnxInc from '../images/BTNX-Inc.png';
import TeranetInc from '../images/teranet.png';
import ResQ from '../images/ResQ.jpg';

const experiences = [
  {
    id: uuidv4(),
    name: 'Fullstack Engineer @ ResQ.',
    desc: 'Coming soon...',
    img: ResQ,
    hasMoreInfo: true,
    moreInfo:
      'aoife safesf efesf esfesfe sefesaf esfefe sefesfeaf esfesaf esfesfes esfesf aoife safesf efesf esfesfe sefesaf esfefe sefesfeaf esfesaf esfesfes esfesf aoife safesf efesf esfesfe sefesaf esfefe sefesfeaf esfesaf esfesfes esfesf aoife safesf efesf esfesfe sefesaf esfefe sefesfeaf esfesaf esfesfes esfesf aoife safesf efesf esfesfe sefesaf esfefe sefesfeaf esfesaf esfesfes esfesf aoife safesf efesf esfesfe sefesaf esfefe sefesfeaf esfesaf esfesfes esfesf',
    companyUrl: 'https://www.getresq.com/',
    techUsed:
      'Tech Used: #Django #TypeScript #React.js #Datadog #Docker #AWS #Looker #Stripe API #Slack API #Event-driven',
  },
  {
    id: uuidv4(),
    name: 'Software Developer @ Teranet Inc.',
    desc:
      'During my time at Teranet Inc., I was given the responsibility to convert the Collateral Guard application from AngularJS to the latest Angular10 framework. I also got exposure to making web applications accessbility friendly according to WCAG standards.',
    img: TeranetInc,
    hasMoreInfo: true,
    moreInfo:
      'aoife safesf efesf esfesfe sefesaf esfefe sefesfeaf esfesaf esfesfes esfesf aoife safesf efesf esfesfe sefesaf esfefe sefesfeaf esfesaf esfesfes esfesf aoife safesf efesf esfesfe sefesaf esfefe sefesfeaf esfesaf esfesfes esfesf aoife safesf efesf esfesfe sefesaf esfefe sefesfeaf esfesaf esfesfes esfesf aoife safesf efesf esfesfe sefesaf esfefe sefesfeaf esfesaf esfesfes esfesf aoife safesf efesf esfesfe sefesaf esfefe sefesfeaf esfesaf esfesfes esfesf',
    companyUrl: 'https://www.teranet.ca/',
    techUsed:
      'Tech Used: #ASP.NET #TypeScript #Angular10 #Jasmine #Karma #Jenkins #Azure DevOps #Microservices',
  },
  {
    id: uuidv4(),
    name: 'Software Developer @ BTNX Inc.',
    desc:
      "At BTNX Inc. I worked on refactoring the company's internal web application. I had the responsbility of recovering the technical debt by converting the application from a C# forms app to an app which utilized the .NET framework together with React.js.",
    img: BtnxInc,
    hasMoreInfo: true,
    moreInfo:
      'aoife safesf efesf esfesfe sefesaf esfefe sefesfeaf esfesaf esfesfes esfesf aoife safesf efesf esfesfe sefesaf esfefe sefesfeaf esfesaf esfesfes esfesf aoife safesf efesf esfesfe sefesaf esfefe sefesfeaf esfesaf esfesfes esfesf aoife safesf efesf esfesfe sefesaf esfefe sefesfeaf esfesaf esfesfes esfesf aoife safesf efesf esfesfe sefesaf esfefe sefesfeaf esfesaf esfesfes esfesf aoife safesf efesf esfesfe sefesaf esfefe sefesfeaf esfesaf esfesfes esfesf',
    companyUrl: 'https://www.btnx.com/',
    techUsed: 'Tech Used: #ASP.NET #TypeScript #React.js #MySQL #MVC #git',
  },
];

export default experiences;
