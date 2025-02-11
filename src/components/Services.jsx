import React from 'react'
import Services_banner from './Services/Services_banner'
import Timeline_section from './Home/Timeline_section'
import Magical_service from './Services/Magical_service'
import Service_offer from './Services/Service_offer'
import Service_info from './Services/Service_info'

const Services = () => {
  return (
    <>
        <Services_banner/>
        <Timeline_section/>
        <Magical_service/>
        <Service_offer/>
        <Service_info/>
    </>
  )
}

export default Services