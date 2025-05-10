import React from 'react';
import {
  BadgeCheck,
  Bell,
  Boxes,
  Code2,
  Blocks,
  Ticket,
} from 'lucide-react';

const features = [
  {
    title: 'Certifications',
    description: 'Each of our plans will provide you and your team with certifications.',
    icon: BadgeCheck,
  },
  {
    title: 'Notifications',
    description: 'Send out notifications to all your customers to keep them engaged.',
    icon: Bell,
  },
  {
    title: 'Bundles',
    description: 'High-quality bundles of awesome tools to help you out.',
    icon: Boxes,
  },
  {
    title: 'Developer Tools',
    description: 'Developer tools to help grow your application and keep it up-to-date.',
    icon: Code2,
  },
  {
    title: 'Building Blocks',
    description: 'The right kind of building blocks to take your company to the next level.',
    icon: Blocks,
  },
  {
    title: 'Coupons',
    description: 'Coupons system to provide special offers and discounts for your app.',
    icon: Ticket,
  },
];

const FeatureCard = ({ title, description, Icon }) => (
  <div className="bg-gray-50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition cursor-pointer">
    <Icon className="w-10 h-10 mx-auto text-blue-500 mb-4" aria-hidden="true" />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Our Features</h2>
        <p className="text-gray-600 mt-2">
          Check out our list of awesome features below.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            Icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
