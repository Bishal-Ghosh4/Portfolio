import React from "react";
import about from '../assets/about.png'

const Testimonial = () => {
  return (
    <div id="about">
      <h2>About Me</h2>

      <section>
        <TestimonialCard
          name={"Bishal"}
          feedback={"Your Teaching skills are so good."}
        />

        {/* <TestimonialCard
          name={"Ramzi"}
          feedback={
            "Wow what a portfolio, doesn't expected this to be on youtube!"
          }
        />

        <TestimonialCard
          name={"Sundar Pichai"}
          feedback={"Amazing seems like you should the Google CEO"}
        /> */}
        <aside>
        <h2>Bishal Ghosh</h2>
        <span>Software Engineer</span>
        <br/>
        <br/>
        <p>Pursuing B.Tech in the department of Computer Science and Engineering from Trident Academy of Technology,Bhubaneswar. 
          I completed my 12th and 10th education from Kendriya Vidalaya No-2 Salt Lake,Kolkata.
          </p>
        </aside>
      </section>

    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src={about}
      alt="User"
    />
    {/* <h4>{name}</h4>
    <p>{feedback}</p> */}
  </article>
);

export default Testimonial;
