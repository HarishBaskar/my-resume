import React from 'react';
import './Main.css';

const main = ({personalInfo}) => {
    return(
        <main className="about">
            <h1 className="name">
                Hi, I'm {personalInfo.name}
            </h1>
            <p className="job">
                {personalInfo.job}
            </p>
            <hr className="hr"/>
            <div className="description">
                <p>{personalInfo.description}</p>
                <br/>
                <p>Skills/Interests: {personalInfo.skills}</p>
            </div>
            <div className="contact">
                <a className="button" href="mailto:harishbaskar94@gmail.com">
                    Get in touch
                </a>
            </div>
            <ul class="social">
                <li>
                    <a href={personalInfo.githuburl} target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href={personalInfo.linkedinurl} target="_blank">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </li>
            </ul>
        </main>
    )
}

export default main;