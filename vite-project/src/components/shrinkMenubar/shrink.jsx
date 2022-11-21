import React from 'react'
import Sticky from 'react-stickynode'

function scrollFunction() {
  // if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
  //   document.querySelector('header').style.height = '50px'
  // } else {
  //   document.querySelector('HeaderUtils').style.display = 'none'
  // }
  // //when scrolling up display the header
  // if(document.body.scrollTop < 90 || document.documentElement.scrollTop < 90){
  //   document.querySelector('HeaderUtils').style.display = 'block'
  // } 
// show when scrolling down and hide when scrolling up
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
    document.querySelector('header').style.display = 'none'
    console.log('hide')
  }else {
    document.querySelector('header').style.display = 'flex'
    console.log('show')
  }

}

window.onscroll = () => {
  scrollFunction()
}

const StickyShrinkingNavbar = () => (
  <Sticky enabled innerZ={100}>
    <header
      style={{
        transition: '0.4s',
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <h1 style={{margin: 0}}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Sticky Shrinking Navbar
        </Link>
      </h1>
    </header>
  </Sticky>
)
export default StickyShrinkingNavbar