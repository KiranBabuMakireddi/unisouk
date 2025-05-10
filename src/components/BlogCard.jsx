const BlogCard = ({ imageSrc, altText, category, title, description, bgColor, textColor,idx }) => {
  return (
    <article className={`relative h-auto w-full max-w-xs m-auto cursor-pointer rounded-2xl overflow-hidden shadow-lg flex flex-col ${bgColor}`}>
      {/* Centered Image Container */}
      <div className="h-auto w-full flex items-center justify-center">
        <img
          src={imageSrc}
          alt={altText}
          loading="lazy"
          className="h-[350px] w-full object-contain"
        />
      </div>
      <div className="absolute top-[342px] left-[20px]">
        <span className={`text-xs font-semibold uppercase bg-white  ${textColor} self-start rounded-full px-4 py-2`}>
          {category}
        </span>
      </div>
      {/* Text Section */}
      <div className={`flex-1 p-4 pt-10 ${idx>2 ? "text-white" : "text-black"} flex flex-col gap-2`}>
        
        <h3 className="text-base font-bold leading-snug line-clamp-1 text-black">{title}</h3>
        <p className="text-sm opacity-90 line-clamp-2 text-black">{description}</p>
      </div>
    </article>
  );
};

export default BlogCard;