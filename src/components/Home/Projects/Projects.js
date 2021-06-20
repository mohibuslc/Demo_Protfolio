import React from 'react';
import './Projects.css'
import { projects } from '../../FakeData'
import Project from './Project';
const Projects = () => {
    return (
        <section id="projects">
            <div className="container pt-5">
                <div className="text-center my-4">
                    <h1 className="section-heading py-5">Projects</h1>
                    <h5>Lets have a look some of my Projects</h5>
                </div>

                <div className="row">
                    {projects.map(pr => <Project pr={pr} />)}
                </div>
            </div>
        </section>
    );
};

export default Projects;