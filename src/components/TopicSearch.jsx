import React, { useState } from 'react';
import './TopicSearch.css';
import electro from "../assets/electomagnetism.jpg";
import compute from "../assets/computer.jpg";
import math from "../assets/mathematics.jpg";
import organic from "../assets/organic.jpg";
import Genetics from "../assets/Genetics.jpg";
import psychology from"../assets/psychology.jpg";
import geography from"../assets/geography.jpg";
import Astronomy from"../assets/astronomy.jpg";

const topicsData = [
  {
    id: 1,
    name: "Thermodynamics",
    category: "Physics",
    image: electro,
  },
  {
    id: 2,
    name: "Organic Chemistry",
    category: "Chemistry",
    image: organic,
  },
  {
    id: 3,
    name: "Calculus",
    category: "Mathematics",
    image: math,
  },
  {
    id: 4,
    name: "Genetics",
    category: "Biology",
    image: Genetics,
  },
  {
    id: 5,
    name: "Information technology",
    category: "Computer Science",
    image: compute,
  },
  { 
    id: 6,
    name:"Psychology",
    category: "Social Science",
    image: psychology,
  },
  { 
    id: 7,
    name:"Environmental Studies",
    category: "Geography",
    image: geography,
  },
  { 
    id: 8,
    name:"Astronomy",
    category: "Space Science",
    image: Astronomy,
  }
];

const TopicSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTopics = topicsData.filter(topic =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="topic-search-container">
      <h2>Browse Topics</h2>
      <input
        type="text"
        placeholder="Search topics..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="topics-grid">
        {filteredTopics.length > 0 ? (
          filteredTopics.map(topic => (
            <div key={topic.id} className="topic-card">
              <img
                src={topic.image}
                alt={topic.name}
                className="topic-image"
              />
              <h3>{topic.name}</h3>
              <p>{topic.category}</p>
            </div>
          ))
        ) : (
          <p className="no-topics">No topics found.</p>
        )}
      </div>
    </div>
  );
};

export default TopicSearch;
