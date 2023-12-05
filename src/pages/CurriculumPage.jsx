import React, {useState, useEffect} from 'react';

import './CurriculumPage.css';

export default function CurriculumPage() {

    const [person, setPerson] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3001/api/person/1')
            .then(response => response.json())
            .then(data => {
                setPerson(data);
                console.log(data);
            })
            .catch(error => console.error(error));
    },[]);

    return (
        <div className="curriculum-page-container">
            <title>CurriculumPage - Active Online Software Page</title>
            <meta
                property="og:title"
                content="CurriculumPage - Active Online Software Page"
            />

            <section className="curriculum-page-hero">
            </section>
            <div className="curriculum-page-container3">
                <div className="curriculum-page-testimonial">
                    <img
                        alt="image"
                        src="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067"
                        className="curriculum-page-image"
                    />
                    <div className="curriculum-page-testimonial1">
                        <div className="curriculum-page-container4">
                            <svg
                                viewBox="0 0 950.8571428571428 1024"
                                className="curriculum-page-icon2"
                            >
                                <path d="M438.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714zM950.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714z"></path>
                            </svg>
                        </div>
                        <span className="curriculum-page-text06">
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                                lorem lorem, malesuada in metus vitae, scelerisque accumsan
                                ipsum. Nam pellentesque nulla leo, sagittis vehicula sem commodo
                                nec.
                            </span>
                            <br></br>
                            <span></span>
                        </span>
                        <div className="curriculum-page-container5">
                            <svg
                                viewBox="0 0 950.8571428571428 1024"
                                className="curriculum-page-icon4"
                            >
                                <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
                            </svg>
                        </div>
                    </div>
                    <span className="curriculum-page-text09">
                        <span></span>
                        <span></span>
                        <span>{person.name} {person.surname}</span>
                        <span></span>
                    </span>
                    <span className="curriculum-page-text14">
                        <span className="curriculum-page-text15">Software Engineer</span>
                    </span>
                </div>
                <div className="curriculum-page-features">
                    <h1 className="curriculum-page-text16">
                        <span>Discover our</span>
                        <br></br>
                        <span>unique features</span>
                    </h1>
                    <div className="curriculum-page-separator"></div>
                    <div className="curriculum-page-container6">
                        <div className="curriculum-page-container7">
                        
                        </div>
                        <img
                            alt="image"
                            src="https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;w=500"
                            className="curriculum-page-image1"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}