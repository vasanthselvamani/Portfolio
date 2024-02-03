import React from 'react';
import './home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import Work from './Work';
import Faq from './Faq';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social/>
          <div className="home__img"></div>
          <Data/>
        </div>
        <ScrollDown/>
      </div>
      <div className="section">
      <div className="home__skill ">
        <h2 className="section__title">Creative Skills</h2>
        <div className="section__subtitle">As a web designer, I possess a diverse set of skills and expertise to bring your web design visions to life</div>
      </div>
      <div className="skill__card container">
        <div className="box__content grid">
          <div className="box">
            <div className="skill__icon">
            <i className="uil uil-phone footer__icon "> </i>
            </div>
            <div className="section__header skill__m">Web Design Principles</div>
            <div className="section__subtitle1 skill__m">Proficiency in the fundamental principles of design,
             such as layout, color theory, typography, and visual hierarchy.
            </div>
            
          </div>
          <div className="box">
            <div className="skill__icon">
            <i className="uil uil-phone footer__icon "> </i>
            </div>
            <div className="section__header skill__m">User Interface - UI Design</div>
            <div className="section__subtitle skill__m">Ability to create visually appealing and intuitive 
            user interfaces that enhance user experience and engagement.
            </div>
            
          </div>
          <div className="box">
            <div className="skill__icon">
            <i className="uil uil-phone footer__icon "> </i>
            </div>
            <div className="section__header skill__m">User Experience - UX Design</div>
            <div className="section__subtitle skill__m">Understanding of user behavior and psychology to design seamless
             and enjoyable user experiences that meet user needs and goals.
            </div>
            
          </div>
          <div className="box">
            <div className="skill__icon">
            <i className="uil uil-phone footer__icon "> </i>
            </div>
            <div className="section__header skill__m">Responsive Web Design</div>
            <div className="section__subtitle skill__m">Knowledge of designing websites that adapt and function
             seamlessly across various devices and screen sizes.
            </div>
            
          </div>
          <div className="box">
            <div className="skill__icon">
            <i className="uil uil-phone footer__icon "> </i>
            </div>
            <div className="section__header skill__m">Wireframing and Prototyping</div>
            <div className="section__subtitle skill__m">Ability to create wireframes and interactive prototypes to 
            visualize and test website layouts and functionality.
            </div>
            
          </div>
          <div className="box">
            <div className="skill__icon">
            <i className="uil uil-phone footer__icon "> </i>
            </div>
            <div className="section__header skill__m">Mobile-Friendly Optimization</div>
            <div className="section__subtitle skill__m">Proficiency in the fundamental principles of design, such as layout, 
            color theory, typography, and visual hierarchy.
            </div>
            
          </div>
          
          
         
        </div>
      </div>

      </div>
      <div className="section container">
      <div className="home__skill ">
        <h3 className="section__title">Benefits</h3>
        <div className="section__subtitle">By choosing my web design service, you'll enjoy the following benefits</div>
      </div>
      <div className="benefit__content grid">
          <div className="box">
            <div className="section__header skill__m">Customized Designs Tailored to Your Brand</div>
            <div className="section__subtitle skill__m">I understand the importance of creating a unique and memorable brand identity. By collaborating closely with you, I ensure that your website reflects your brand's personality, values, and objectives. The result is a customized design that sets you apart from the competition and resonates with your target audience.
            </div>
            
          </div>
        <div className="box">
            <div className="section__header skill__m">Creative Excellence that Captivates Visitors</div>
            <div className="section__subtitle skill__m">With a keen eye for aesthetics and a passion for creativity, 
            I excel in designing visually stunning and engaging websites. By combining beautiful visuals, captivating
             typography, and strategic use of color, I create an immersive and impactful user experience. Your website will leave a lasting impression on 
            visitors, enhancing your brand's credibility and professionalism.
            </div>
            
        </div>
      </div>
      <div className="benefit__content1 grid">

      <div className="box">
            <div className="section__header skill__m">User-Centric Approach for Optimal Experience</div>
            <div className="section__subtitle skill__m">I prioritize user experience (UX) design, placing your visitors at the center of the design process. By conducting in-depth research and employing user testing techniques, I ensure that your website is intuitive, easy to navigate, and seamlessly guides users towards their goals. The result is a satisfying user journey that increases engagement and conversions.
            </div>
            
      </div>
      <div className="box">
            <div className="section__header skill__m">Mobile-Friendly Designs for Broad Accessibilit</div>
            <div className="section__subtitle skill__m">In today's mobile-dominated landscape, having a responsive website is crucial. I specialize in creating mobile-friendly designs that adapt flawlessly across different devices and screen sizes. Your website will look and perform beautifully, whether accessed from a desktop, smartphone, or tablet, ensuring that you reach and engage your audience effectively.
            </div>
      </div>
      <div className="box">
            <div className="section__header skill__m">Expertise in Cutting-Edge Technologies</div>
            <div className="section__subtitle skill__m">With a strong command of HTML, CSS, JavaScript, and other front-end technologies, I possess the technical skills to bring your design concepts to life. From seamless animations to interactive elements, I leverage the latest web technologies to enhance user engagement and create a dynamic user experience.
            </div>
      </div>
      </div>
      
    </div>
    <div className="section">
    <Work/>
    <Faq/>
    </div>    
    </section>
  ) 
}

export default Home