import React, { useEffect, useState } from "react";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

interface HeroProps {
  imagePath?: string;
  overlayOpacity?: string;
  slides?: Slide[];
  autoPlayInterval?: number;
}

const Hero: React.FC<HeroProps> = ({
  imagePath = "/hero_image.jpg",
  overlayOpacity = "bg-black/30",
  autoPlayInterval = 5000,
}) => {
  // Default slides using the same image but could be expanded with different images
  const defaultSlides: Slide[] = [
    {
      id: 1,
      image: imagePath,
      title: "Performance-Ready",
      subtitle: "Apparel for Work & Beyond",
      ctaText: "Shop Now",
      ctaLink: "/collection",
    },
    {
      id: 2,
      image: imagePath,
      title: "Style & Comfort",
      subtitle: "Designed for Modern Life",
      ctaText: "Explore",
      ctaLink: "/collection",
    },
    {
      id: 3,
      image: imagePath,
      title: "Premium Quality",
      subtitle: "Crafted with Attention to Detail",
      ctaText: "Discover",
      ctaLink: "/collection",
    },
  ];

  const [slides] = useState<Slide[]>(defaultSlides);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Handle auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, autoPlayInterval);
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayInterval, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative top-15 w-full h-screen overflow-hidden">
      {/* Hero Image */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Dark Overlay */}
      <div className={`absolute inset-0 ${overlayOpacity} z-10`}></div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-end px-20">
        <div className="max-w-xl text-right">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0 absolute"
              }`}
            >
              {index === currentSlide && (
                <>
                  <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-white mb-4 font-['Zen_Dots']">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-4xl text-white mb-8">
                    {slide.subtitle}
                  </p>

                  <div className="mt-8">
                    <div className="w-16 h-1 bg-[#FFC40B] ml-auto"></div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center">
        <div className="flex items-center">
          {/* Progress bar container */}
          <div className="h-1 bg-white/30 w-32 relative">
            {slides.map((_, index) => {
              // Calculate width percentage for each segment
              const segmentWidth = 100 / slides.length;
              // Calculate left position for each segment
              const leftPosition = index * segmentWidth;

              return (
                <div
                  key={index}
                  className={`absolute h-full transition-all duration-500 ${
                    index <= currentSlide ? "bg-[#FFC40B]" : "bg-transparent"
                  }`}
                  style={{
                    left: `${leftPosition}%`,
                    width: `${segmentWidth}%`,
                    cursor: "pointer",
                  }}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
