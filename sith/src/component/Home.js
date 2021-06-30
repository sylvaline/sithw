import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Float from "./Float";

function Home() {
  const [isResourceClicked, setResourceClicked] = useState(false);

  return (
    <div className="home">
      <div className="landing_page">
        <div className="landing_page_inner">
          <Typical
            steps={[
              "Welcome to Space Innovation TechHub",
              1000,
              "We are the future of tech in Nigeria",
              1000,
            ]}
            loop={Infinity}
            wrapper="h1"
          />
        </div>
        <ParticlesBg type="circle" bg={true} />
      </div>

      <div className="home_main window">
        <div className="home_main_inner">
          <div className="home_content first_content">
            <div className="home_content_inner">
              <div className="left">
                <Fade top>
                  <h3 className="title">About Us</h3>
                </Fade>
                <Fade bottom>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum eius earum molestias commodi corrupti 
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum eius earum molestias commodi corrupti 
                  </p>
                </Fade>
              </div>
              <Slide left>
                <div className="right">
                  <img src="\image\img1.jpg" alt="" />
                </div>
              </Slide>
            </div>
            <button>
              About Us 
            </button>
          </div>

          <div className="home_content">
            <div className="home_content_inner">
              <Slide left>
                <div className="right">
                  <img src="\image\img1.jpg" alt="" />
                </div>
              </Slide>

              <div className="left">
                <Fade top>
                  <h3 className="title">Resource Centre</h3>
                </Fade>
                <Fade bottom>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum eius earum molestias commodi corrupti
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum eius earum molestias commodi corrupti 
                  </p>
                </Fade>
              </div>
            </div>
            {isResourceClicked ? (
              <div className="resource_clicked">
                <Link to="/learning-resource-centre">
                  <button>
                    {" "}
                    Learning Resource Center{" "}
                    
                  </button>
                </Link>
                <Link to="/document-resource-centre">
                  <button className="btn_center">
                    {" "}
                    Document Resource Center{" "}
                    
                  </button>
                </Link>{" "}
                <span>
                  <i onClick={()=>setResourceClicked(false)}  className="fas fa-times"></i>
                </span>
              </div>
            ) : (
              <button onClick={() => setResourceClicked(true)}>
                {" "}
                Resource Centre 
              </button>
            )}
          </div>

          <div className="home_content">
            <div className="home_content_inner">
              <div className="left">
                <Fade top>
                  <h3 className="title">Co-working Space</h3>
                </Fade>
                <Fade bottom>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum eius earum molestias commodi corrupti
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum eius earum molestias commodi corrupti 
                  </p>
                </Fade>
              </div>
              <Slide left>
                <div className="right">
                  <img src="\image\img1.jpg" alt="" />
                </div>
              </Slide>
            </div>
            <button>
              Co-working Space 
            </button>
          </div>

          <div className="home_content">
            <div className="home_content_inner">
              <Slide left>
                <div className="right">
                  <img src="\image\img1.jpg" alt="" />
                </div>
              </Slide>
              <div className="left">
                <Fade top>
                  <h3 className="title">Events and Calender</h3>
                </Fade>
                <Fade bottom>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum eius earum molestias commodi corrupti 
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum eius earum molestias commodi corrupti 
                  </p>
                </Fade>
              </div>
            </div>
            <button>
              Events and Calender
            </button>
          </div>
        </div>
      </div>

      {/* For mobile only */}
      <div className="home_main mobile">
        <div className="home_main_inner">
          <div className="home_content first_content">
            <div className="home_content_inner">
              <div className="left">
                <Fade top>
                  <h3 className="title">About Us</h3>
                </Fade>
                <Fade bottom>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum eius earum molestias commodi corrupti 
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum eius earum molestias commodi corrupti 
                  </p>
                  
                </Fade>
              </div>
              <Slide left>
                <div className="right">
                  <img src="\image\img1.jpg" alt="" />
                </div>
              </Slide>
            </div>
            <button>
              About Us 
            </button>
          </div>

          <div className="home_content">
            <div className="home_content_inner">
              <div className="left">
                <Fade top>
                  <h3 className="title">Resource Centre</h3>
                </Fade>
                <Fade bottom>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum eius earum molestias commodi corrupti 
                  </p>
                  <p>officiis maiores
                    eaque dolor rerum cumque quia temporibus, magni magnam
                    reiciendis veniam asperiores facere, laborum amet?</p>
                </Fade>
              </div>
              <Slide left>
                <div className="right">
                  <img src="\image\img1.jpg" alt="" />
                </div>
              </Slide>
            </div>
            {isResourceClicked ? (
              <div className="resource_clicked">
                <Link to="/learning-resource-centre">
                  <button className="btn_first">
                    {" "}
                    Learning Resource Center{" "}
                    
                  </button>
                </Link>
                <Link to="/document-resource-centre">
                  <button className="btn_center">
                    {" "}
                    Document Resource Center{" "}
                    
                  </button>
                </Link>{" "}
                <span>
                  <i onClick={()=>setResourceClicked(false)} className="fas fa-times"></i>
                </span>
              </div>
            ) : (
              <button onClick={() => setResourceClicked(true)}>
                {" "}
                Resource Centre 
              </button>
            )}
          </div>

          <div className="home_content">
            <div className="home_content_inner">
              <div className="left">
                <Fade top>
                  <h3 className="title">Co-working Space</h3>
                </Fade>
                <Fade bottom>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum eius earum molestias commodi corrupti 

                  </p>
                  <p>officiis maiores
                    eaque dolor rerum cumque quia temporibus, magni magnam
                    reiciendis veniam asperiores facere, laborum amet?</p>
                </Fade>
              </div>
              <Slide left>
                <div className="right">
                  <img src="\image\img1.jpg" alt="" />
                </div>
              </Slide>
            </div>
            <button>
              Co-working Space 
            </button>
          </div>

          <div className="home_content">
            <div className="home_content_inner">
              <div className="left">
                <Fade top>
                  <h3 className="title">Events and Calender</h3>
                </Fade>
                <Fade bottom>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum eius earum molestias commodi corrupti 
                  </p>
                  <p>officiis maiores
                    eaque dolor rerum cumque quia temporibus, magni magnam
                    reiciendis veniam asperiores facere, laborum amet?</p>
                </Fade>
              </div>

              <Slide left>
                <div className="right">
                  <img src="\image\img1.jpg" alt="" />
                </div>
              </Slide>
            </div>
            <button>
              Events and Calender
            </button>
          </div>
        </div>
      </div>
      <Float />
    </div>
  );
}

export default Home;
