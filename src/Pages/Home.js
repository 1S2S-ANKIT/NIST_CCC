import React from 'react'
import Svg1 from '../Component/SVGs/Svg1'
import TechWeDrive from '../Component/TechWeDrive'
import Events from './Events/Events'



const Home = () => {
  document.body.style.backgroundColor = 'white';


  const someFun1 = () => {
    document.getElementById('event-section').scrollIntoView({ behavior: "smooth" });
  }

  return <section className="home--section">
    <article className="socials">
      <p><a href="https://www.linkedin.com/company/nist-cloud-computing-club" target="_blank" rel="noreferrer">
        <i className="fab fa-linkedin text-primary"></i>
      </a></p>
      <p><a href="https://github.com/LENO-DEV/NIST_CCC" target="_blank" rel="noreferrer">
        <i className="fab fa-github-square"></i>
      </a></p>
      <p><a href="https://www.facebook.com/ccc.nist/" target="_blank" rel="noreferrer">
        <i className="fab fa-facebook-square"></i>
      </a></p>
    </article>
    <div className="">
      <article className="home--text" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-out">
        <h1>NIST</h1>
        <p><b>Cloud Computing</b> Club</p>
        <h6>An Education Society deals with the Cloud and Services at NIST Campus.</h6>
      </article>
      <div className="btn--explore">
        <button onClick={() => someFun1()}
          className="btn btn-info" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-out">
          Explore more &nbsp;&nbsp; <i className="fas fa-chevron-circle-down"></i>
        </button>
      </div>
      <img className="img--home" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-out"
        width="350" height="500" src="https://i.ibb.co/VBCyyGk/logo-cutted.png" alt=""
      />

    </div>
    <section className="tech--explore--section">
      <article className="svg--1">
        <Svg1 />
      </article>
      <main className="p-3 text-white">
        <h2>Technology we Drive.</h2>
        <TechWeDrive />
      </main>
      <article className="svg--2" style={{ marginTop: -50 }} id="event-section">
        <Svg1 />
      </article>
    </section>


    <section className="events--section">
      <h2>Upcoming Events.</h2>
      <Events />
    </section>

  </section>
}

export default Home
