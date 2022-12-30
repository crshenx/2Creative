import React from 'react'

function NavBar() {

    const services = ['Bridal Concierge', 'Event Planning', 'A la Carte', 'Testimonials', 'A Spontaneous Rythm','Contact',]
    const divider = '✧'
    
    let navItems = services.map((service,i) => {
        if(i === services.length -1){
            return (
                <div className={`nav__item-parent-last`} key={i}>
                <div className={`nav__item-last`}>{service}</div>
                </div>
            )
        }
        return (
            <div className={`nav__item-parent`} key={i}>
            <div className={`nav__item`}>{service}</div>
            <div className={`nav__divider`}>{divider}</div>
            </div>
        )
    })

    let mobileNavItems = services.map((service,i) => {
        return (
            <div className={`nav__mobile-item`} key={i}>{service}</div>
        )
    })



  return (
    <div>
        <div className='nav'>{navItems}</div>
        <div className='nav__mobile-expand'>
            <div className='nav__mobile'>{mobileNavItems}</div>
            </div>
    </div>
  )
}

export default NavBar
/**
 * 
 * <div className={`nav__item-parent-${service}`} key={i}>
<div className={`nav__item-${service}`}>{service}</div>
<div className={`nav__divider-${service}`}>{divider}</div>
</div>
 */
