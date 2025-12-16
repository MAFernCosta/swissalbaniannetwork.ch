import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { FaLinkedin, FaInstagram  } from "react-icons/fa";
import Home from "./pages/home/home";



const App = () =>{
    const subPages =  [
        {
            link: "#",
            label:"Home"
        },
        {
            link: "#",
            label:"Über den Verein"
        },
        {
            link: "#",
            label:"Vorteile"
        },
        {
            link: "#",
            label:"Veranstaltungen"
        },
        {
            link: "#",
            label:"Gönner*in werden"
        }
    ];
    const contactInfo = {
        logo:"https://swissalbaniannetwork.ch/wp-content/uploads/2023/07/logo-san.png",
        socialNetwork: [
            {
                label:"Instagram",
                link:"#",
                icon:<FaInstagram />
            },
            {
                label:"Linkdin",
                link:"#",
                icon:<FaLinkedin />
            }
        ],
        contact:{
            street:"Swiss Albanian Network",
            zipCode:"8840",
            city:"Einsiedeln",
            phone:"+41 79 663 77 77",
            email:"welcome@swissalbanianetwork.ch"
        },
        footerlogo: "https://swissalbaniannetwork.ch/wp-content/uploads/2023/07/swiss-albanian-network-logo-final-1.png"
    };
    return(
        <>
            <Navbar navbarItems={subPages} logo={contactInfo.logo}/>
            <Home />
            <Footer subPages={subPages} contactInfo={contactInfo}/>
        </>
    )
}

export default App;