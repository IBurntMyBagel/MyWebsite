'use client';

import styles from "./testingpage.module.css";
import {useState, useEffect } from 'react'

export default function TestingPage(){

    const [fact, setFact] = useState('');
    const [loading, setLoading] = useState(true);

    // Function to fetch fact using API
    const getFact = () => {
        // Loading as new fact is requested
        setLoading(true); 

        fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en', {
            headers: {
              Accept: 'application/json',
            },
          })
          .then((response) => response.json())
          .then((data) => {
            setFact(data.text)
            setLoading(false);
          })
        .catch((error) => {
            console.error('Error requesting fact ', error);
            setFact('Failed to load a new fact. Please try again.');
            setLoading(false);
        });

    };

    useEffect(() =>{
        // Load first fact on page load
        getFact();
    }, []);


    return (
        <div className = {styles.page}>
             {/* Main Section */}
            <main className = {styles.main}>
            <h1>This page is dedicated to exploring and using APIs</h1>
            <p>
                In this section I experiment with different APIs to understand how to fetch and display data dynamically using React.
            </p>
            </main>
            
            {/* API Demonstration Section */}
            <section className = {styles.apiContainer}>
                <div className = {styles.apiBox}>
                    <h1>
                        Random Fun Fact
                    </h1>
                    <p>
                        Click the button to get a random useless fact!
                    </p>
                    <button onClick = {getFact} className = {styles.factButton}>
                        {loading ? 'Loading...': 'Get Fact'}
                        {/* Loading ? var */}
                    </button>
                    {fact && <p className = {styles.factText}>{fact}</p>}
                </div>

                <div className = {styles.apiBox}>
                    <h1>
                        Clock Example
                    </h1>
                </div>
                {/* Future API */}
                {/* Clock example */}
                {/* Weather */}
                {/* Spotify Favorite Song or Currently Listening */}

            </section>
            

        </div>
        
    )
}