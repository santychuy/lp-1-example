import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import type { Testimonial } from '@/constants/testimonials';

interface TestimonialsColumnProps {
  testimonials: Testimonial[];
  className?: string;
}

const TestimonialsColumn = ({
  testimonials,
  className
}: TestimonialsColumnProps) => (
  <div
    className={twMerge(
      'flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]',
      className
    )}
  >
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
            <div className="font-medium tracking-tight leading-5">{name}</div>
            <div className="leading-5 tracking-tight">{username}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default TestimonialsColumn;
