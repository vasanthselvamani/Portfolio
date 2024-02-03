import React from 'react';
import Icon from "../assets/timeline.svg";
import Icon1 from "../assets/timeline2.svg";
import Icon2 from "../assets/timeline3.svg";
import Icon3 from "../assets/timeline4.svg";
import Icon4 from "../assets/timeline5.svg";
import Icon5 from "../assets/timeline6.svg";
import Icon6 from "../assets/timeline.svg";




const data =[
  {
    id:1,
    image:Icon1 ,
    year: 2017,
    course: "diploma" ,
    subtitle: "80%",
  },
  {
    id:1,
    image:Icon2 ,
    year: 2017,
    course: "diploma" ,
    subtitle: "80%",
  },
  {
    id:1,
    image:Icon3 ,
    year: 2017,
    course: "diploma" ,
    subtitle: "80%",
  },
  {
    id:1,
    image:Icon4 ,
    year: 2017,
    course: "diploma" ,
    subtitle: "80%",
  },
  {
    id:1,
    image:Icon5 ,
    year: 2017,
    course: "diploma" ,
    subtitle: "80%",
  },
  {
    id:1,
    image:Icon6 ,
    year: 2017,
    course: "diploma" ,
    subtitle: "80%",
  },
 
]
const Info = () => {
  return (
    <section className="section container">
      <div className="timeline__heading">
        <h2 className="title">Milestones of My Career</h2>
        <div className="section__subtitle">Lorem ipsum dolor sit amet consectetur. Nisl ut neque tortor nulla felis nunc. Sit ac sed sed pulvinar 
        sit purus morbi. Elit amet sed velit auctor urna vitae nam ultricies massa.</div>
      </div>
      <div className="timeline__section">
        <div class="timeline-items">
          <div class="timeline-item">
			    <div class="timeline-dot"></div>
			    <div class="timeline-date ">2015</div>
          <div className="timeline__container">

			    <div class="timeline-content">
            <div>
				  <h3>timeline item title</h3>
				  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. </p>
            </div>
          <div className="image__icon">
            <img src={Icon} alt="" />
          </div>
			    </div>
          </div>
		    </div>
        {data.map(({id,image,year,course,subtitle})=>{
          return(
          <div class="timeline-item" key={id}>
			    <div class="timeline-dot"></div>
			    <div class="timeline-date ">{year}</div>
			    <div class="timeline-content">
            <div>
				  <h3>{course}</h3>
				  <p>{subtitle}</p>
            </div>
            <div className="image__icon">
            <img src={image} alt="" />
          </div>
			    </div>
		    </div>

          )
        }
        )}
      </div>
      </div>
    </section>
  )
}

export default Info