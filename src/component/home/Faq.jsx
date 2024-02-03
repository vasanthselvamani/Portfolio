import React, {useState} from 'react'
const data =[
    {
        id: 1,
        question:"Can you work with clients remotely?" ,
        answer: "Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location.",
    },
    {
        id: 2,
        question: "How long does it typically take to complete a web design project?",
        answer:"" ,
    },
    {
        id: 3,
        question: "Do you offer website maintenance services?",
        answer: "",
    },
    {
        id: 4,
        question:"Can you optimize my website for search engines?" ,
        answer: "",
    },
    {
        id: 5,
        question:"Can you integrate third-party tools or platforms into my website?" ,
        answer: "",
    },
]
const Faq = () => {
    const[Toggle,showanswer]=useState(false);
  return (
    <div className="section container">
        <div className="home__skill ">
          <h2 className="section__title">Frequently Asked Questions</h2>
          <div className="section__subtitle">Here are answers to some common questions</div>
        </div>
        <div className="faq grid">
            <div className="box faq1">
                {data.map(({id,question,answer})=>{
                    return(

                <div className="content__box box" key={id}>

                    <div className="question__content ">
                        <div className="question">{question}</div>
                        <div className="faq__plus "  onClick={() => showanswer(!Toggle)}>
                      <i className="uil uil-plus faq__icon1"></i>
                    </div>
                    </div>
                                            
                    <div className={Toggle ? "faq__answers show-answer":"faq__answers"} >{answer}</div>
                                 
                </div>
                    )
                })}
            </div>
            <div className="faq__contact">
                <div className="box">
                    <div className="contact__content">
                        <div className="title"><i className="uil uil-instagram  footer__icon"></i></div>
                      
                      <div className="title">Still have any Questions ?</div>
                      <div className="section__subtitle title">Let's collaborate to create an exceptional website that sets you apart from the competition.
                       Contact me today to discuss your web design needs and bring your digital vision to life!</div>
                       <div className="button__flex   ">

                       <a href="" className="button">Contact Me</a>
                       </div>
                    </div>
                </div>
            </div>
        </div>
           
        </div>
  )
}

export default Faq