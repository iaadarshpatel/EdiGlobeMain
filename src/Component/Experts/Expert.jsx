import React from 'react'
import './expert.css';
import t1 from '../../assets/trainer/jyoti.png';
import t2 from '../../assets/trainer/ansh.jpg';
import t3 from '../../assets/trainer/divya.jpg';
import t4 from '../../assets/trainer/Shabnoor.jpeg';


const data = [
  {
    id: 1,
    Image: t1,
    mentorname: "Jyoti Choudhary",
    designation: "Digital Marketing Coach & Consultant",
    aboutmentor: "Journey from engineering to the creative world",
    url: "https://www.linkedin.com/in/jyoti-choudhary-dm/"
  },
  {
    id: 2,
    Image: t2,
    mentorname: "Ansh R. Hiran",
    designation: "Stock Market",
    aboutmentor: "Exploring the dynamic world of stocks",
    url: "https://www.linkedin.com/in/ansh-r-hiran-b499b9242"

  },
  {
    id: 3,
    Image: t3,
    mentorname: "Divya Khivsara",
    designation: "Structural Engineers",
    aboutmentor: "Worked as structural engineer in MNC",
    url: "https://www.linkedin.com/in/divya-khivsara-41771a16b"
  },
  {
    id: 4,
    Image: t4,
    mentorname: "Shabnoor",
    designation: "Backend Developer",
    aboutmentor: "Guiding backend devs to successful careers ",
    url: "https://www.linkedin.com/in/shabnoor-parveen-8b5854193/"

  }]

const Expert = () => {
  return (
    <section className="trainer_area section_gap_top">
      <div className="container">
        <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-lg-5">
            <div className="main_title">
              <h2 className="mb-3">Our Expert Trainers</h2>
              <p>We are here to support you on your learning journey</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center d-flex align-items-center">
          {
            data.map(({ id, Image, mentorname, designation, aboutmentor, url }) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-12 single-trainer" data-aos="fade-up" key={id}>
                  <div className="thumb d-flex justify-content-sm-center">
                    <img className="img-fluid" src={Image} alt="" />
                  </div>
                  <div className="meta-text text-sm-center">
                    <h4>{mentorname}</h4>
                    <p className="designation">{designation}</p>
                    <div className="mb-4">
                      <p>{aboutmentor}</p>
                    </div>

                    <div className="align-items-center justify-content-center d-flex">
                    <a href={url} target="_blank" rel="LinkedIn_profiles">
                      <button class="btn border-dark d-flex social_btn">
                        <i class="fab fa-linkedin"></i>&nbsp;LinkedIn
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}

        </div>
      </div>
    </section>
  )
}

export default Expert