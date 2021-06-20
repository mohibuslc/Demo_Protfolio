import React, { useEffect, useState } from 'react';
import SkillDetails from './SkillDetails';
import './Skills.css'

import html from '../../../images/skill_ico/html.png';
import css from '../../../images/skill_ico/css.png';
import js from '../../../images/skill_ico/js.png';
import sass from '../../../images/skill_ico/sass.png';
import bootstrap from '../../../images/skill_ico/bootstrap.png';
import react from '../../../images/skill_ico/react.png';
import redux from '../../../images/skill_ico/redux.png'
import tailwindcss from '../../../images/skill_ico/tailwindcss.png';
import native from '../../../images/skill_ico/native.png'
import expo from '../../../images/skill_ico/expo.png'


import node from '../../../images/skill_ico/node.png';
import express from '../../../images/skill_ico/express.png';
import mongodb from '../../../images/skill_ico/mongo.png';
import ajax from '../../../images/skill_ico/AJAX.png'
import axios from '../../../images/skill_ico/axios.png'

import git from '../../../images/skill_ico/git.png';
import github from '../../../images/skill_ico/github.png'
import firebase from '../../../images/skill_ico/firebase.png'
import netlify from '../../../images/skill_ico/netlify.png'
import heroku from '../../../images/skill_ico/heroku.png'


const mySkills = [
    {
        id: 1,
        done: '95',
        technologyName: 'HTML',
        technologyLogo: html,
        category: 'frontEnd'
    },
    {
        id: 2,
        done: '90',
        technologyName: 'CSS',
        technologyLogo: css,
        category: 'frontEnd'
    },
    {
        id: 3,
        done: '97',
        technologyName: 'JS',
        technologyLogo: js,
        category: 'frontEnd'

    },
    {
        id: 4,
        done: '80',
        technologyName: 'SASS',
        technologyLogo: sass,
        category: 'frontEnd'
    },
    {
        id: 5,
        done: '90',
        technologyName: 'BOOTSTRAP',
        technologyLogo: bootstrap,
        category: 'frontEnd'
    },
    {
        id: 6,
        done: '95',
        technologyName: 'REACT',
        technologyLogo: react,
        category: 'frontEnd'
    },
    {
        id: 7,
        done: '90',
        technologyName: 'REDUX',
        technologyLogo: redux,
        category: 'frontEnd'
    },
    {
        id: 8,
        done: '75',
        technologyName: 'TAILWIND',
        technologyLogo: tailwindcss,
        category: 'frontEnd'
    },
    {
        id: 9,
        done: '70',
        technologyName: 'REACT NATIVE',
        technologyLogo: native,
        category: 'frontEnd'
    },
    {
        id: 10,
        done: '80',
        technologyName: 'EXPO',
        technologyLogo: expo,
        category: 'frontEnd'
    },


    {
        id: 11,
        done: '80',
        technologyName: 'NODE',
        technologyLogo: node,
        category: 'backEnd'
    },
    {
        id: 12,
        done: '95',
        technologyName: 'EXPRESS',
        technologyLogo: express,
        category: 'backEnd'
    },
    {
        id: 13,
        done: '90',
        technologyName: 'MONGO DB',
        technologyLogo: mongodb,
        category: 'backEnd'
    },
    {
        id: 14,
        done: '80',
        technologyName: 'AJAX',
        technologyLogo: ajax,
        category: 'backEnd'
    },
    {
        id: 15,
        done: '90',
        technologyName: 'AXIOS',
        technologyLogo: axios,
        category: 'backEnd'
    },



    {
        id: 16,
        done: '95',
        technologyName: 'GIT',
        technologyLogo: git,
        category: 'tools'
    },
    {
        id: 17,
        done: '90',
        technologyName: 'GITHUB',
        technologyLogo: github,
        category: 'tools'
    },
    {
        id: 18,
        done: '85',
        technologyName: 'FIREBASE',
        technologyLogo: firebase,
        category: 'tools'
    },
    {
        id: 19,
        done: '80',
        technologyName: 'NETLIFY',
        technologyLogo: netlify,
        category: 'tools'
    },
    {
        id: 20,
        done: '95',
        technologyName: 'HEROKU',
        technologyLogo: heroku,
        category: 'tools'
    },
]



const Skills = () => {

    const [getSkill, setGetSkill] = useState([]);

    useEffect(() => {
        const specificSkill = mySkills.filter((skill) => skill.category === "frontEnd");
        setGetSkill(specificSkill);
    }, []);

    const onFilterCategory = (category) => {
        const filterByCategory = mySkills.filter((skill) => skill.category === category)
        setGetSkill(filterByCategory);
        console.log(filterByCategory);
        console.log(category);
    }

    return (
        <section className="w-100 container">

            <h1 className="text-center section-heading my-5">My Skills</h1>
            <nav>
                <div class="nav nav-tabs d-flex justify-content-center align-items-center" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"
                        onClick={() => onFilterCategory("frontEnd")}
                    >Front-End</button>

                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"
                        onClick={() => onFilterCategory("backEnd")}
                    >Back-End</button>

                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false"
                        onClick={() => onFilterCategory("tools")}
                    >Tools</button>
                </div>
            </nav>

            <div class="tab-content d-flex justify-content-center flex-wrap" id="nav-tabContent">
                {
                    getSkill.map(skill =>
                        <div class="tab-pane fade show active skill-item-container" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                            <div className="skill-item d-flex justify-content-center align-items-center m-4 p-4">
                                <img src={skill.technologyLogo} alt="" />
                            </div>

                        </div>
                    )
                }
            </div>


            {/* Progress Bar  */}
            {/* <div className="d-flex justify-content-center align-items-center">
                <div className="w-50">
                    {
                        getSkill.map(skill => <SkillDetails done={skill.done} technologyName={skill.technologyName} ></SkillDetails>)
                    }
                </div>
            </div> */}
        </section>

    );
};

export default Skills;