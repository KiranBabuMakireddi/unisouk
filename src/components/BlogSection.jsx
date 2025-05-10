import BlogCard from './BlogCard';
import img1 from '../assets/blog1.png';
import img2 from '../assets/blog2.png';
import img3 from '../assets/blog3.png';
import img4 from '../assets/blog4.png';
import img5 from '../assets/blog5.png';
import img6 from '../assets/blog6.png';

const blogPosts = [
  {
    category: 'Resources',
    title: 'Refreshing Designs',
    description: 'Quench satisfying designs to help you stir up emotion and tell a story.',
    imageSrc: img1,
    altText: 'Green cup on a purple background',
    bgColor: 'bg-purple-600',
    textColor:'text-purple-600'
  },
  {
    category: 'Lifestyle',
    title: 'Healthier Lifestyle',
    description: 'Living a healthier lifestyle will help with your productivity and mindset.',
    imageSrc: img2,
    altText: 'Orange fruit with blue background',
    bgColor: 'bg-blue-500',
    textColor: 'text-blue-500',
  },
  {
    category: 'Entertainment',
    title: 'Gaming Evolution',
    description: 'Learn about the evolution of gaming and how it started a revolution.',
    imageSrc: img3,
    altText: 'Retro yellow gaming device',
    bgColor: 'bg-yellow-500',
    textColor: 'text-yellow-500',
  },
  {
    category: 'Inspiration',
    title: 'Best Workstations of the Year',
    description: 'Check out these inspiring workstations to get ideas on how to level-up your setup.',
    imageSrc: img4,
    altText: 'LED-lit computer desk setup',
    bgColor: 'bg-white',
    textColor: 'text-black',
  },
  {
    category: 'Food',
    title: 'Eating for Productivity',
    description: 'Learn how to be more disciplined in your diet and maximize productivity.',
    imageSrc: img5,
    altText: 'Healthy breakfast with coffee',
    bgColor: 'white',
    textColor: 'text-black',
  },
  {
    category: 'Resources',
    title: 'A Design Mind-set',
    description: 'Learn how to improve your eye for design and what it means to have a design mindset.',
    imageSrc: img6,
    altText: 'Design books and retro tech',
    bgColor: 'bg-white',
    textColor: 'text-black',
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-2">The Project Blog</h2>
      <p className="text-gray-600 mb-10">Designs and layouts to help you with your app.</p>
      <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} idx={index} />
        ))}
      </div>
    </section>
);
};

export default BlogSection;
