'use client';

import styles from "./testingpage.module.css";
import {useState, useEffect } from 'react'
import Link from "next/link";

export default function testingpage(){

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
        {/* Header */}
            <header className = {styles.header}>
                <nav>
                <ul className = {styles.navList}>
                    <li>
                    <Link
                        className = {styles.navItem}  
                        href= "/"
                    >
                        Home
                    </Link>
                    </li>
                    <li>
                    <Link
                        className = {styles.navItem}
                        href = "/testingpage"
                        >
                        Testing Page
                        </Link> 
                    </li>
                    <li>
                    <a
                        className = {styles.navItem}
                        href= "https://github.com/IBurntMyBagel"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </a>

                    </li>
                    <li>
                    <a
                        className = {styles.navItem}
                        href= "https://www.linkedin.com/in/ryan-tsang-rpi2026/" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    </li>
                </ul>
                </nav>
            </header>

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
                        Click the button to ge a random useless fact!
                    </p>
                    <button onClick = {getFact} className = {styles.factButton}>
                        {loading ? 'Loading...': 'Get Fact'}
                        {/* Loading ? var */}
                    </button>
                    {fact && <p className = {styles.factText}>{fact}</p>}
                </div>

                {/* Future API */}
                {/* Clock example */}
                {/* Weather */}
                {/* Spotify Favorite Song or Currently Listening */}

            </section>
            

        </div>
        
    )
}