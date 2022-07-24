import React from 'react';
import '../css/Home.css';

function Home() {
    return (
        <React.Fragment>
            <div className = 'home-container'>
                <div className='home-white-list'>
                    <h2>Практическая работа F4.6</h2>
                    <p> Это фуллстек-приложение с рецептами блюд, которое использует:<br />
                            Django Rest Framework, автодокументацию OpenAPI+Swagger и react-router.</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;
