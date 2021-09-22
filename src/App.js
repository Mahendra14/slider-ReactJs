import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people,setPeople] = useState(data);
  const [index,setIndex] = useState(0);
  return(
    <section className="section">
      <div className="title">
        <h2><span>/</span>reviews</h2>
      </div>
      <div className="section-center">
        {/*Here we are trying to get throught the loop over person data. */}
        {people.map((person,personIndex)=>{
          const {id,image,name,title,quote} = person;
          //more stuff related to css class change here

          return(
            <article key={id}>
              <img src={image} alt={title} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );

        })}
        <button className="prev">
        <FiChevronLeft />
        </button>
        <button className="next">
        <FiChevronRight />
        </button>
      </div>

    </section>
  );
}

export default App;
