import React from 'react';
import PrimaryImage from './PrimaryImage/PrimaryImage';
import Main from './Main/Main';
import Aux from '../HOC/_Aux';
import '../Resume/Resume.css';

const resume = (props) => {
    return(
        <Aux>
            <div className="wallpaper"></div>
            <div className="content">
               <PrimaryImage/>
               <Main personalInfo={props.personalInfo}/>
            </div>
        </Aux>
    )
}

export default resume;