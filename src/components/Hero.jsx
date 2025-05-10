import Button from "./Button";

export default function Hero() {
  return (
    <section className="text-center py-20 px-4 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Start Crafting Your <br />
          <span className="text-indigo-600">Next Great Idea</span>
        </h1>

        <p className="mt-4 text-gray-600 text-base md:text-lg">
          Simplifying the creation of landing pages, blog pages,<br className="hidden md:inline" />
          application pages and so much more!
        </p>

        <div className="mt-8 flex  sm:flex-row md:flex-col justify-center gap-4">
        <div className="relative inline-block">
          <Button href="#purchase" variant="primary" aria-label="Purchase Now" className="relative pr-16">
            Purchase Now
            <span className="absolute top-[1px] -right-[20px] -translate-y-1/2 text-xs bg-emerald-500 text-white rounded-full px-2 py-0.5 whitespace-nowrap">
              only $15/mo
            </span>
          </Button>
        </div>
          <Button href="#learn-more" variant="secondary" aria-label="Learn More">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
