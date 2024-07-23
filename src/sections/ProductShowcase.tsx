import Image from 'next/image';

import productImage from '@/assets/product-image.png';
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';

const ProductShowcase = () => (
  <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
    <div className="container">
      <div className="section-container">
        <div className="flex justify-center">
          <div className="tag">Boots your productivity</div>
        </div>
        <h2 className="text-center section-title">
          A more effective way to track your progress
        </h2>
        <p className="section-description">
          Effortlessly turn your ideas into a fully functional, responsive, SaaS
          website in just minutes with this template
        </p>
      </div>
      <div className="relative">
        <Image src={productImage} alt="Product Image" className="mt-10" />
        <Image
          src={pyramidImage}
          alt="Pyramid Image"
          height={262}
          width={262}
          className="hidden md:block absolute -right-36 -top-32"
        />
        <Image
          src={tubeImage}
          alt="Tube Image"
          height={248}
          className="hidden md:block absolute -left-36 bottom-24"
        />
      </div>
    </div>
  </section>
);

export default ProductShowcase;
