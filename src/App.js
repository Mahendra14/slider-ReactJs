import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people,setPeople] = useState(data);
  const [index,setIndex] = useState(0);
  useEffect(()=>{
    let changeIndex = people.length-1;
    if(index < 0 ){
      setIndex(changeIndex);
    }
    if(index > changeIndex){
     setIndex(0);
    }
  },[index,people]);

  //for autoslide = useEffect + setInterval
  useEffect(()=>{
    let slider = setInterval(()=>{
      setIndex(index+1);
    },3000);

    //to get out of loop hell
    return () => clearInterval(slider);
  },[index]);
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
          let position = "nextSlide";
          if(personIndex === index){
            position = "activeSlide";
          }
          if(personIndex === index-1 || (index===0 && personIndex === people.length - 1)){
            position="lastSlide"
          }
          return(
            <article key={id} className= {position}>
              <img src={image} alt={title} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );

        })}
        <button className="prev" onClick = {() => setIndex(index - 1)}>
        <FiChevronLeft />
        </button>
        <button className="next" onClick = {() => setIndex(index + 1)}>
        <FiChevronRight />
        </button>
      </div>

    </section>
  );
}

export default App;
