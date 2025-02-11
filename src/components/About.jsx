import React from 'react'
import About_banner from './About/About_banner'
import Timeline_section from './Home/Timeline_section'
import About_main from './Home/About_main'
import Magic_service from './About/Magic_service'
import Team_service from './About/Team_service'
import About_info from './About/About_info'
import Our_value from './About/Our_value'

const About = () => {
  return (
    <>
        <About_banner/>
        <Timeline_section/>
        <About_main/>
        <Magic_service/>
        <Team_service/>
        <About_info/>
        <Our_value/>
    </>
  )
}

export default About