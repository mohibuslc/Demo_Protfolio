import React from 'react';
import { Card } from 'react-bootstrap';
import './Experiences.css'
import ExperienceBook from './ExperienceBook'

const Experiences = () => {
    return (
        <div className="experiences d-flex flex-wrap my-3 justify-content-center">
            <Card style={{ width: '600px', marginBottom: '-50px', height: '450px', marginTop: '50px' }} className="shadow">
                <Card.Img variant="top" src="https://i.pinimg.com/originals/01/f2/b3/01f2b3832a5d53716dfa35d72ca30ce8.png" style={{ height: '200px', width: '200px', borderRadius: '50%' }} className='d-block m-auto' />
                <Card.Body>
                    <Card.Title>Company Name: British American Tobacco Bangladesh </Card.Title>
                    <Card.Title>Jan 13, 2019 to present</Card.Title>
                    <Card.Text>

                        <li>
                            Assist with Fujitsu global service desk agent.
                        </li>
                        <li>
                            Build, manage, and replicate BATLeaf local Servers on sites and remotely on cloud.
                        </li>
                        <li>
                            Software testing with different versions and help to find and fix bugs.
                        </li>
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>

    );
};

export default Experiences;