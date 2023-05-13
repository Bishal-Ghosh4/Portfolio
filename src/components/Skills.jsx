import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai";
import html from "../assets/html-icon.png";
import css from "../assets/css-icon.png";
import bootstrap from "../assets/bootstrap-icon.png";
import javascript from "../assets/js-icon.png";
import jquery from "../assets/jquery-icon.png";
import react from "../assets/react-icon.png";
import redux from "../assets/redux-icon.png";
import java from "../assets/java.png";
import c from "../assets/c.png";
import flutter from "../assets/flutter.png";
import mysql from "../assets/mysql.png";
import material from "../assets/material.png";


const Services = () => {
    const animations = {
        whileInView: {
            x: 0,
            y: 0,
            opacity: 1,
        },
        one: {
            opacity: 0,
            x: "-100%",
        },
        twoAndThree: {
            opacity: 0,
            y: "-100%",
        },

        four: {
            opacity: 0,
            x: "100%",
        },
    };

    return (
        <div id="skills">
            <h2>Skills</h2>
            <section>
                {/* <motion.div
                        className="serviceBox1"
                    whileInView={animations.whileInView}
                    initial={animations.one}
                    >
                      <h3>5+</h3>
                    <p>Years Experience</p>
                     </motion.div> */}
                <motion.div
                    className="serviceBox2"
                    whileInView={animations.whileInView}
                    initial={animations.twoAndThree}
                    transition={{
                        delay:0.1
                    }}
                >
                    <img src={c} alt="C" srcset="" />
                    <span>C</span>
                </motion.div>
                <motion.div
                    className="serviceBox2"
                    whileInView={animations.whileInView}
                    initial={animations.twoAndThree}
                    transition={{
                        delay:0.2
                    }}
                >
                    <img src={java} alt="java" srcset="" />
                    <span>Java</span>
                </motion.div>
                <motion.div
                    className="serviceBox2"
                    whileInView={animations.whileInView}
                    initial={animations.twoAndThree}
                    transition={{
                        delay:0.3
                    }}
                >
                    <img src={html} alt="html" srcset="" />
                    <span>HTML</span>
                </motion.div>
                <motion.div
                    className="serviceBox2"
                    whileInView={animations.whileInView}
                    initial={animations.twoAndThree}
                    transition={{
                        delay:0.4
                    }}
                >
                    <img src={css} alt="css" srcset="" />
                    <span>CSS</span>
                </motion.div>
                <motion.div
                    className="serviceBox2"
                    whileInView={animations.whileInView}
                    initial={animations.twoAndThree}
                    transition={{
                        delay:0.5
                    }}
                >
                    <img src={javascript} alt="javascript" srcset="" />
                    <span>JavaScript</span>
                </motion.div>
                <motion.div
                    className="serviceBox2"
                    whileInView={animations.whileInView}
                    initial={animations.twoAndThree}
                    transition={{
                        delay:0.6
                    }}
                >
                    <img src={bootstrap} alt="bootstrap" srcset="" />
                    <span>Bootstrap</span>
                </motion.div>
                <motion.div
                    className="serviceBox2"
                    whileInView={animations.whileInView}
                    initial={animations.twoAndThree}
                    transition={{
                        delay:0.7
                    }}
                >
                    <img src={jquery} alt="jquery" srcset="" />
                    <span>JQuery </span>
                </motion.div>
                <motion.div
                    className="serviceBox2"
                    whileInView={animations.whileInView}
                    initial={animations.twoAndThree}
                    transition={{
                        delay:0.8
                    }}
                >
                    <img src={react} alt="react" srcset="" />
                    <span>React js</span>
                </motion.div>
                <motion.div
                    className="serviceBox2"
                    whileInView={animations.whileInView}
                    initial={animations.twoAndThree}
                    transition={{
                        delay:0.9
                    }}
                >
                    <img src={material} alt="materialui" srcset="" />
                    <span>Material UI</span>
                </motion.div>
                <motion.div
                    className="serviceBox2"
                    whileInView={animations.whileInView}
                    initial={animations.twoAndThree}
                    transition={{
                        delay:1.0
                    }}
                >
                    <img src={flutter} alt="flutter" srcset="" />
                    <span>Flutter</span>
                </motion.div>
                <motion.div
                    className="serviceBox2"
                    whileInView={animations.whileInView}
                    initial={animations.twoAndThree}
                    transition={{
                        delay:1.1
                    }}
                >
                    <img src={mysql} alt="mysql" srcset="" />
                    <span>MySQL</span>
                </motion.div>
                <motion.div
                    className="serviceBox2"
                    whileInView={animations.whileInView}
                    initial={animations.twoAndThree}
                    transition={{
                        delay:1.2
                    }}
                >
                    <img src={redux} alt="recux" srcset="" />
                    <span>Redux</span>
                </motion.div>
                {/* <motion.div
                    className="serviceBox3"
                    whileInView={animations.whileInView}
                    initial={animations.twoAndThree}
                    transition={{
                        delay: 0.2,
                    }}
                >
                    <AiFillAndroid />
                    <span>App Development</span>
                </motion.div> */}
                {/* <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <AiFillWindows />
          <span>Desktop Development</span>
        </motion.div> */}
            </section>
        </div>
    );
};

export default Services;
