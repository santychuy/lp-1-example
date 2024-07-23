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
      <div className="flex justify-center gap-6">
        <TestimonialsColumn testimonials={firstColumn} />
        <TestimonialsColumn
          testimonials={secondColumn}
          className="hidden md:flex"
        />
        <TestimonialsColumn
          testimonials={thirdColumn}
          className="hidden lg:flex"
        />
      </div>
    </div>
  </section>
);

export default Testimonials;
