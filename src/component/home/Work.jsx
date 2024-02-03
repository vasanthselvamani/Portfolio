import React  from 'react';
import './home.css';
import Image1 from "../assets/work(1).svg";
import Image2 from "../assets/work(2).svg";
import Image3 from "../assets/work(3).svg";


const Array = [
  {
    id: 1,
    image: Image1,
    title: "Z - Aura Perfume Website Design",
  },
  {
    id: 2,
    image: Image2,
    title: "Forhelp Charity Website Design",
  },
  {
    id: 3,
    image: Image3,
    title: "Skill Bridge Website Design",
  },
  
 
];


const Work = () => {
  
  return (
    <section className="work container  ">
        <div className="home__skill ">
          <h2 className="section__title">My Works</h2>
          <div className="section__subtitle">Here's what some of my satisfied clients have to say about my work</div>
        </div>
        <div className="work__content grid">
            {Array.map(({id,image,title})=>{
        return(
          <div className="work__item box" key={id} >
            <h3 className="section__subtitle ">{title}</h3>
            <div className="thumb">
              <img src={image} alt="" />
            </div>
            
          </div>
        )})}
        </div>
            <div className="button__flex ">
                <a href="" className="button">View All Projects </a>
            </div>

        
        
      
    </section>
  )
}

export default Work
