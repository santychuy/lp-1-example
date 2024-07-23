import { twMerge } from 'tailwind-merge';

import CheckIcon from '@/assets/check.svg';
import { pricingTiers } from '@/constants/pricing';

const Pricing = () => (
  <section className="bg-white py-24">
    <div className="container">
      <div className="section-container">
        <h2 className="section-title text-center">Pricing</h2>
        <p className="section-description">
          Free forever. Upgrade for unlimited tasks, better security, and
          exclusive features
        </p>
      </div>
      <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
        {/* Card */}
        {pricingTiers.map((tier, i) => (
          <div
            key={i}
            className={twMerge(
              'card',
              tier.inverse && 'border-black bg-black text-white'
            )}
          >
            <div className="flex justify-between">
              <h3
                className={twMerge(
                  'text-lg font-bold text-black/50',
                  tier.inverse && 'text-white/60'
                )}
              >
                {tier.title}
              </h3>
              {tier.popular && (
                <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                  <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">
                    Popular
                  </span>
                </div>
              )}
            </div>
            <div className="flex items-baseline gap-1 mt-[30px]">
              <span className="text-4xl font-bold tracking-tighter leading-none">
                ${tier.monthlyPrice}
              </span>
              <span className="tracking-tight font-bold text-black/50">
                /month
              </span>
            </div>
            <button
              className={twMerge(
                'btn btn-primary w-full mt-[30px]',
                tier.inverse && 'bg-white text-black'
              )}
            >
              {tier.buttonText}
            </button>
            <ul className="flex flex-col gap-5 mt-8">
              {tier.features.map((feature, j) => (
                <li key={j} className="text-sm flex items-center gap-4">
                  <CheckIcon className="h-6 w-6" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
