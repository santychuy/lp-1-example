import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import type { Testimonial } from '@/constants/testimonials';

interface TestimonialsColumnProps {
  testimonials: Testimonial[];
  className?: string;
  duration: number;
}

const TestimonialsColumn = ({
  testimonials,
  duration,
  className
}: TestimonialsColumnProps) => (
  <div className={className}>
    <motion.div
      animate={{
        translateY: '-50%'
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear'
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(null).map((_, i) => (
        <React.Fragment key={i}>
          {testimonials.map(({ text, name, username, imageSrc }, i) => (
            <div key={i} className="card">
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export default TestimonialsColumn;
