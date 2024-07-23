import Image from 'next/image';

import ArrowRight from '@/assets/arrow-right.svg';
import starImage from '@/assets/star.png';
import springImage from '@/assets/spring.png';

const CallToAction = () => (
  <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
    <div className="container">
      <div className="section-container relative">
        <h2 className="section-title text-center">Sign up for free today</h2>
        <p className="section-description">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <Image
          src={starImage}
          alt="Star Image"
          width={360}
          className="absolute -left-[350px] -top-[137px]"
        />
        <Image
          src={springImage}
          alt="Spring Image"
          width={360}
          className="absolute -right-[331px] -top-[19px]"
        />
      </div>
      <div className="flex gap-2 mt-10 justify-center">
        <button className="btn btn-primary">Get for free</button>
        <button className="btn btn-text gap-1">
          <span>Learn more</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  </section>
);
export default CallToAction;
