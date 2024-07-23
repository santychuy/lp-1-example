'use client';
import { motion } from 'framer-motion';

import TestimonialsColumn from '@/components/TestimonialsColumn';
import { testimonials } from '@/constants/testimonials';

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => (
  <section className="bg-white">
    <div className="container">
      <div className="flex justify-center">
        <div className="tag">Testimonials</div>
      </div>
      <div className="section-container mt-5">
        <h2 className="section-title text-center">What our users say</h2>
        <p className="section-description">
          From intuitive design to powerful features, our app has become an
          essencial tool for users around the world.
        </p>
      </div>
      <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
        <TestimonialsColumn testimonials={firstColumn} duration={15} />
        <TestimonialsColumn
          testimonials={secondColumn}
          duration={17}
          className="hidden md:block"
        />
        <TestimonialsColumn
          testimonials={thirdColumn}
          duration={19}
          className="hidden lg:block"
        />
      </div>
    </div>
  </section>
);

export default Testimonials;
