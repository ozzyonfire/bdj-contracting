"use client";

import { useEffect, useState } from "react";
import { Quote } from 'lucide-react';

const testimonials = [{
  name: 'Mr. Ringham',
  quote: 'He\'s the King!'
}, {
  name: 'Mrs. Campbell',
  quote: 'The best contractor in the area!'
}, {
  name: 'Mr. McCreary',
  quote: '5 stars, what else can I say?'
}];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(testimonials[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // start a timeout that rotates the testimonials every 5 seconds
    const interval = setInterval(() => {
      // rotate the testimonials
      // // const index = testimonials.indexOf(currentTestimonial);
      // if (index === testimonials.length - 1) {
      //   setCurrentTestimonial(testimonials[0]);
      //   setCurrentIndex(0);
      // }
      // else {
      //   setCurrentTestimonial(testimonials[index + 1]);
      //   setCurrentIndex(index + 1);
      // }

      setCurrentIndex(prevIndex => {
        if (prevIndex === testimonials.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 5000);

    // cleanup the interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-2 transition-all">
      <Quote size={64} />
      {/* <p className="text-center font-serif text-3xl font-extrabold tracking-tight lg:text-4xl">{currentTestimonial.quote}</p>
      <p className="font-serif text-xl text-center text-muted-foreground">- {currentTestimonial.name}</p> */}
      <div className="relative w-full h-[72px]">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`w-full absolute top-0 flex flex-col items-center justify-center gap-2 transition-all ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-center font-serif text-3xl font-extrabold tracking-tight lg:text-4xl">{testimonial.quote}</p>
            <p className="font-serif text-xl text-center text-muted-foreground">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}