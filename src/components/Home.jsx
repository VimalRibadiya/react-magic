import React from "react";
import Hero_section from "./Home/Hero_section";
import Timeline_section from "./Home/Timeline_section";
import About_main from "./Home/About_main";
import Service_main from "./Home/Service_main";
import Awards_section from "./Home/Awards_section";
import Magical_shows from "./Home/Magical_shows";
import Upcoming_show from "./Home/Upcoming_show";
import Magical_facts from "./Home/Magical_facts";
import Gallery_section from "./Home/Gallery_section";
import Faq_section from "./Home/Faq_section";
import Buy_ticket from "./Home/Buy_ticket";
import Contact_us from "./Home/Contact_us";
import Awsome_section from "./Home/Awsome_section";

const Home = () => {
    return(
        <>
            <Hero_section/>
            <Timeline_section/>    
            <About_main/>
            <Service_main/> 
            <Awards_section/>   
            <Magical_shows/>
            <Upcoming_show/>
            <Magical_facts/>
            <Gallery_section/>
            <Faq_section/>
            <Buy_ticket/>
            <Contact_us/>
            <Awsome_section/>
        </>
    )
}

export default Home