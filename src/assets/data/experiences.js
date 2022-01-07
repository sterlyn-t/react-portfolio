import { v4 as uuidv4 } from 'uuid';
import BtnxInc from '../images/btnx.png';
import TeranetInc from '../images/teranet.png';

const experiences = [
  {
    id: uuidv4(),
    name: 'Software Developer @ Teranet Inc.',
    desc:
      'During my time at Teranet Inc., I was given the responsibility to convert the Collateral Guard application from AngularJS to the latest Angular10 framework. I also got exposure to making web applications accessbility friendly according to WCAG standards.',
    img: TeranetInc,
    moreInfo: false,
  },
  {
    id: uuidv4(),
    name: 'Software Developer @ BTNX Inc.',
    desc:
      "At BTNX Inc. I worked on refactoring the company's internal web application. I had the responsbility of recovering the technical debt by converting the application from a C# forms app to an app which utilized the .NET framework together with React.js.",
    img: BtnxInc,
    moreInfo: false,
  },
];

export default experiences;
