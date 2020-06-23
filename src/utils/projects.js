import touristee from '../assets/touristee.png';
import burgers from '../assets/eat-da-burgers.png';
import employeeDirectory from '../assets/employee-directory.png';
import weatherDashboard from '../assets/weather-dashboard.png';
import googleBooks from '../assets/google-books.png';
import chirrup from '../assets/chirrup.png';

const projects = [
    {
        id: 0,
        title: "Chirrup!",
        description: 'ReactJS, NodeJS, ExpressJS, MongoDB',
        repo: "https://github.com/kishaprudente/madagascar",
        demo: "https://chirrup-app.herokuapp.com/",
        image: chirrup,
    },
    {
        id: 1,
        title: "Touristee",
        description: 'HTML, CSS, JavaScript, jQuery',
        repo: "https://github.com/kishaprudente/touristee",
        demo: "https://kishaprudente.github.io/touristee/",
        image: touristee,
    },
    {
        id: 2,
        title: "Eat Da Burgers!",
        description: 'JavaScript, HandlebarsJS, Bootstrap',
        repo: "https://github.com/kishaprudente/eat-da-burger",
        demo: "https://polar-dusk-74766.herokuapp.com/",
        image: burgers,
    },
    {
        id: 3,
        title: "Employee Summary",
        description: 'JavaScript, React, NodeJS, Express',
        repo: "hhttps://github.com/kishaprudente/employee-directory-react",
        demo: "https://kp-react-employees.herokuapp.com/",
        image: employeeDirectory,
    },
    {
        id: 4,
        title: "Weather Dashboard",
        description: 'HTML, jQuery, Bootstrap',
        repo: "https://github.com/kishaprudente/weather-dashboard",
        demo: "https://kishaprudente.github.io/weather-dashboard/",
        image: weatherDashboard,
    },
    {
        id: 5,
        title: "Google Books Search",
        description: 'ReactJS, NodeJS, MongoDB, Express',
        repo: "https://github.com/kishaprudente/google-books-search",
        demo: "https://kp-google-books-search.herokuapp.com/",
        image: googleBooks,
    },
]

export default projects;