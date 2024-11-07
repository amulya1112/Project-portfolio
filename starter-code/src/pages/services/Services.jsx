import React, {useState, useEffect} from "react";
import './Services.scss';
import Fade from "react-reveal/Fade"


function Service ()  {
  return (
      <div className="service component__space" id="Services">
          <div className="heading">
              <h1 className="heading">Our Services</h1>
              <Fade bottom>
              <p className="heading p__color">
                We pride ourselves on delivering various online
              </p>
              </Fade>
              <Fade bottom>
              <p className="heading p__color">
                strategies and service to help businesses.
              </p>
              </Fade>
          </div>

          <div className="container">
              <div className="row">


                  <div className="col__3">
                       <div className="service__box pointer">
                          <div className="icon">
                          <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                <line x1="2" y1="20" x2="2" y2="20"></line>
              </svg>
                          </div>
                          <div className="service__meta">
                              <h1 className="service__text">Digital Marketing</h1>
                              <Fade bottom>
                              <p className="p service__text p__color">
                                 Uses online chnnels, platforms
                              </p>
                              </Fade>
                              <Fade bottom>
                              <p className="p service__text p__color">
                                 and tools to promote products,
                              </p>
                              </Fade>
                              <Fade bottom>
                              <p className="p service__text p__color">
                                 or brands to target audience.
                              </p>
                              </Fade>
                          </div>
                       </div>
                  </div>

                  <div className="col__3">
                       <div className="service__box pointer">
                          <div className="icon">
                          <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
                          </div>
                          <div className="service__meta">
                              <h1 className="service__text">Social Media Marketing</h1>
                              <Fade bottom>
                              <p className="p service__text p__color">
                                  Uses social media platforms as 
                              </p>
                              </Fade>
                              <Fade bottom>
                              <p className="p service__text p__color">
                                  Facebook, Instagram ,Twitter to
                              </p>
                              </Fade>
                              <Fade bottom>
                              <p className="p service__text p__color">
                                  promote products.
                              </p>
                              </Fade>
                          </div>
                       </div>
                  </div>

                  <div className="col__3">
                       <div className="service__box pointer">
                          <div className="icon">
                          <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
                          </div>
                          <div className="service__meta">
                              <h1 className="service__text">Brand Marketing</h1>
                              <Fade bottom>
                              <p className="p service__text p__color">
                                  Focus on shaping public perception, 
                              </p>
                              </Fade>
                              <Fade bottom>
                              <p className="p service__text p__color">
                                  building customer loyality and
                              </p>
                              </Fade>
                              <Fade bottom>
                              <p className="p service__text p__color">
                                  create strong identity.
                              </p>
                              </Fade>
                           </div>
                       </div>
                  </div>

                  <div className="col__3">
                       <div className="service__box pointer">
                          <div className="icon">
                          <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
                          </div>
                          <div className="service__meta">
                              <h1 className="service__text">Search Engine Optimization</h1>
                              <Fade bottom>
                              <p className="p service__text p__color">
                                 Optimize a website to rank higher 
                              </p>
                              </Fade>
                              <Fade bottom>
                              <p className="p service__text p__color">
                                 higher on search engine results 
                              </p>
                              </Fade>
                              <Fade bottom>
                              <p className="p service__text p__color">
                                 pages to increase organic traffic
                              </p>
                              </Fade>
                          </div>
                       </div>
                  </div>

                  <div className="col__3">
                       <div className="service__box pointer">
                          <div className="icon">
                          <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
                          </div>
                          <div className="service__meta">
                              <h1 className="service__text">Lead Generation</h1>
                              <Fade bottom>
                              <p className="p service__text p__color">
                                  It helps company to build  a 
                              </p>
                              </Fade>
                              <Fade bottom>
                              <p className="p service__text p__color">
                                  pipeline of potential customer 
                              </p>
                              </Fade>
                              <Fade bottom>
                              <p className="p service__text p__color">
                                  who converts into paying clients. 
                              </p>
                              </Fade>
                          </div>
                       </div>
                  </div>

                  <div className="col__3">
                       <div className="service__box pointer">
                          <div className="icon">
                          <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
                          </div>
                          <div className="service__meta">
                              <h1 className="service__text">Market Research</h1>
                              <Fade bottom>
                              <p className="p service__text p__color">
                                  Gather ,analyze and interpret 
                              </p>
                              </Fade>
                              <Fade bottom>
                              <p className="p service__text p__color">
                                  audience to make informed business
                              </p>
                              </Fade>
                              <Fade bottom>
                              <p className="p service__text p__color">
                                  decisions.
                              </p>
                              </Fade>
                          </div>
                       </div>
                  </div>

              </div>
          </div>
      </div>
  )
}

export default Service;