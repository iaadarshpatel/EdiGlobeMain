import React from 'react'
import Footer from '../../footer/Footer'
import Nav from '../../Nav/Nav'
import t1 from '../../../assets/trainer/divya.jpg';
import './allemployee.css'
import { Link } from 'react-router-dom';

const AllEmployee = () => {
    return (
        <>
            <Nav />
            <section id='employee' className='banner_area'>
                <div className="banner_inner d-flex align-items-center">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="banner_content text-center">
                                    <h2>Employee Details</h2>
                                    <div className="page_link">
                                        <Link to="/">Home</Link>
                                        <a>Employee</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section_gap'>
                <div className="main_title" data-aos="fade-up">
                    <h2>Let's Know about our Employee</h2>
                    <p>Looking for better working Environment</p>
                </div>
            </section>
            <div>
                <div className="dropdown container mb-3">
                    <button className="btn btn-secondary dropdown-toggle search_btn" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        Sort By
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                        <li><a className="dropdown-item" href="#">Currently Working</a></li>
                        <li><a className="dropdown-item" href="#">Departed</a></li>
                        <li><a className="dropdown-item" href="#">Notice Period</a></li>
                    </ul>
                </div>
            </div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-2">
                            <div className="blog_right_sidebar rounded position-relative">
                                <div class="spinner-grow" role="status" style={{"backgroundColor": "green"}}></div>
                                <aside className="single_sidebar_widget author_widget mt-2">
                                    <img src={t1} alt="" className="avatar xl rounded-circle img-thumbnail shadow-sm" />
                                    <h4>Shabnoor Parveen</h4>
                                    <span className="text-muted small d-inline-block">Employee Id : 00001</span>
                                    <span className="light-info-bg text-center w-auto p-3 fs-6 fw-bolder py-1 px-1 rounded-1 d-inline-block mb-2 mt-1 bg-success p-2 text-dark bg-opacity-25">Currently Working</span>
                                    <ul class="list-group w-auto">
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-envelope me-2"></i>Email:
                                            <span class="text-muted ms-2">adarshpatel615@gmail.com</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-phone me-2"></i>Contact:
                                            <span class="text-muted ms-2">+91 7081705736</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-user-plus me-2"></i>Team:
                                            <span class="badge rounded-pill text-bg-warning w-auto ms-2">Operation</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-briefcase me-2"></i>Designation:
                                            <span class="text-muted ms-2">Trainee</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-cake-candles me-2"></i>Birthday:
                                            <span class="text-muted ms-2">08-10-1996</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-calendar-days me-2"></i>DOJ:
                                            <span class="text-muted ms-2">7th July 2023</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-person-half-dress me-2"></i>Gender:
                                            <span class="text-muted ms-2">Male</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-map-location me-2"></i>Per. Address:
                                            <span class="text-muted ms-2">Btm 1st stage, Tavarekere main Road, Bengaluru, 560029</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-house me-2"></i>Res. Address:
                                            <span class="text-muted ms-2">Btm 1st stage, Tavarekere main Road, Bengaluru, 560029</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-link me-2"></i>Aadhar:
                                            <span class="text-muted ms-2">
                                                <a href="" style={{ "color": "#1e2a5a" }}>Check it</a>
                                            </span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-link me-2"></i>PAN:
                                            <span class="text-muted ms-2">
                                                <a href="" style={{ "color": "#1e2a5a" }}>Check it</a>
                                            </span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-link me-2"></i>Marksheet:
                                            <span class="text-muted ms-2">
                                                <a href="" style={{ "color": "#1e2a5a" }}>Check it</a>
                                            </span>
                                        </li>
                                    </ul>

                                </aside>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-2">
                            <div className="blog_right_sidebar rounded position-relative">
                                <div class="spinner-grow" role="status" style={{"backgroundColor": "orange"}}></div>
                                <aside className="single_sidebar_widget author_widget mt-2">
                                    <img src={t1} alt="" className="avatar xl rounded-circle img-thumbnail shadow-sm" />
                                    <h4>Shabnoor Parveen</h4>
                                    <span className="text-muted small d-inline-block">Employee Id : 00001</span>
                                    <span className="light-info-bg text-center w-auto p-3 fs-6 fw-bolder py-1 px-1 rounded-1 d-inline-block mb-2 mt-1 bg-secondary p-2 text-dark bg-opacity-25">Currently Working</span>
                                    <ul class="list-group w-auto">
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-envelope me-2"></i>Email:
                                            <span class="text-muted ms-2">adarshpatel615@gmail.com</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-phone me-2"></i>Contact:
                                            <span class="text-muted ms-2">+91 7081705736</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-user-plus me-2"></i>Team:
                                            <span class="badge rounded-pill text-bg-warning w-auto ms-2">Operation</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-briefcase me-2"></i>Designation:
                                            <span class="text-muted ms-2">Trainee</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-cake-candles me-2"></i>Birthday:
                                            <span class="text-muted ms-2">08-10-1996</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-calendar-days me-2"></i>DOJ:
                                            <span class="text-muted ms-2">7th July 2023</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-person-half-dress me-2"></i>Gender:
                                            <span class="text-muted ms-2">Male</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-map-location me-2"></i>Per. Address:
                                            <span class="text-muted ms-2">Btm 1st stage, Tavarekere main Road, Bengaluru, 560029</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-house me-2"></i>Res. Address:
                                            <span class="text-muted ms-2">Btm 1st stage, Tavarekere main Road, Bengaluru, 560029</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-link me-2"></i>Aadhar:
                                            <span class="text-muted ms-2">
                                                <a href="" style={{ "color": "#1e2a5a" }}>Check it</a>
                                            </span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-link me-2"></i>PAN:
                                            <span class="text-muted ms-2">
                                                <a href="" style={{ "color": "#1e2a5a" }}>Check it</a>
                                            </span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-link me-2"></i>Marksheet:
                                            <span class="text-muted ms-2">
                                                <a href="" style={{ "color": "#1e2a5a" }}>Check it</a>
                                            </span>
                                        </li>
                                    </ul>

                                </aside>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-2">
                            <div className="blog_right_sidebar rounded position-relative">
                                <div class="spinner-grow" role="status" style={{"backgroundColor": "purple"}}></div>
                                <aside className="single_sidebar_widget author_widget mt-2">
                                    <img src={t1} alt="" className="avatar xl rounded-circle img-thumbnail shadow-sm" />
                                    <h4>Shabnoor Parveen</h4>
                                    <span className="text-muted small d-inline-block">Employee Id : 00001</span>
                                    <span className="light-info-bg text-center w-auto p-3 fs-6 fw-bolder py-1 px-1 rounded-1 d-inline-block mb-2 mt-1 bg-warning p-2 text-dark bg-opacity-25">Currently Working</span>
                                    <ul class="list-group w-auto">
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-envelope me-2"></i>Email:
                                            <span class="text-muted ms-2">adarshpatel615@gmail.com</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-phone me-2"></i>Contact:
                                            <span class="text-muted ms-2">+91 7081705736</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-user-plus me-2"></i>Team:
                                            <span class="badge rounded-pill text-bg-warning w-auto ms-2">Operation</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-briefcase me-2"></i>Designation:
                                            <span class="text-muted ms-2">Trainee</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-cake-candles me-2"></i>Birthday:
                                            <span class="text-muted ms-2">08-10-1996</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-calendar-days me-2"></i>DOJ:
                                            <span class="text-muted ms-2">7th July 2023</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-person-half-dress me-2"></i>Gender:
                                            <span class="text-muted ms-2">Male</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-map-location me-2"></i>Per. Address:
                                            <span class="text-muted ms-2">Btm 1st stage, Tavarekere main Road, Bengaluru, 560029</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-house me-2"></i>Res. Address:
                                            <span class="text-muted ms-2">Btm 1st stage, Tavarekere main Road, Bengaluru, 560029</span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-link me-2"></i>Aadhar:
                                            <span class="text-muted ms-2">
                                                <a href="" style={{ "color": "#1e2a5a" }}>Check it</a>
                                            </span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-link me-2"></i>PAN:
                                            <span class="text-muted ms-2">
                                                <a href="" style={{ "color": "#1e2a5a" }}>Check it</a>
                                            </span>
                                        </li>
                                        <li class="list-group-item small">
                                            <i class="fa-solid fa-link me-2"></i>Marksheet:
                                            <span class="text-muted ms-2">
                                                <a href="" style={{ "color": "#1e2a5a" }}>Check it</a>
                                            </span>
                                        </li>
                                    </ul>

                                </aside>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <div>ada</div>
            <Footer />
        </>
    )
}

export default AllEmployee