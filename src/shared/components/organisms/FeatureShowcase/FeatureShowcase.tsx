import React, { useState } from "react";
import { Link } from "react-router-dom";

interface FeatureItem {
  id: number;
  image: string;
  title: string;
  description: string;
  link?: string;
}

interface FeatureShowcaseProps {
  title?: string;
  features?: FeatureItem[];
}

const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  title = "스타일과 실용성을 모두 담은 시즌 셀렉션",
}) => {
  // Default features if none provided
  const defaultFeatures: FeatureItem[] = [
    {
      id: 1,
      image: "/model_1.png",
      title: "제형에 구매하지 않고",
      description: "편하게 얻을 수 있는 아노력",
      link: "#",
    },
    {
      id: 2,
      image: "/model_2.png",
      title: "카펜고 뛰어난 보존성을",
      description: "차량하는 방향조개",
      link: "#",
    },
    {
      id: 3,
      image: "/model_3.png",
      title: "포근한 따뜻하여",
      description: "필요할 때 플러스",
      link: "#",
    },
    {
      id: 4,
      image: "/model_4.png",
      title: "캘톤한 바람이 부는",
      description: "기출에 입기 좋은 자갯",
      link: "#",
    },
  ];

  const [featuresList] = useState<FeatureItem[]>(defaultFeatures);
  const [activeIndex, setActiveIndex] = useState<number>(3); // Start with the 4th item active

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="mb-3 text-start">
          <h2 className="text-2xl font-medium">{title}</h2>
        </div>

        <div className="flex flex-wrap items-baseline -mx-4">
          {/* Regular sized products */}
          <div className="w-full lg:w-3/5 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {featuresList
                .filter((_, index) => index !== activeIndex)
                .map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() =>
                      setActiveIndex(
                        featuresList.findIndex((f) => f.id === feature.id)
                      )
                    }
                    className="text-left cursor-pointer focus:outline-none"
                  >
                    <div className="relative overflow-hidden">
                      <div className="aspect-square w-full">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 right-4">
                          <h3 className="text-xs font-bold mb-1 text-black">
                            {feature.title}
                          </h3>
                          <p className="text-xs text-black">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
            </div>
          </div>

          {/* Current active product (larger width) */}
          <div className="w-full lg:w-2/5 px-4 mt-8 lg:mt-0">
            <div
              className="relative overflow-hidden h-full"
              style={{ minHeight: "350px" }}
            >
              {featuresList.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <Link
                    to={feature.link || "#"}
                    className="group cursor-pointer block h-full"
                  >
                    <div className="relative overflow-hidden h-full">
                      <div className="aspect-[4/5] md:aspect-[4/5] lg:h-full w-full">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 right-4">
                          <h3 className="text-xs font-bold mb-1 text-black">
                            {feature.title}
                          </h3>
                          <p className="text-xs text-black">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar Navigation */}
        <div className="mt-12">
          <div className="flex flex-col items-center">
            {/* Progress Bars */}
            <div className="flex justify-center space-x-3">
              {featuresList.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveIndex(index)}
                  className="focus:outline-none group"
                  aria-label={`View ${feature.title}`}
                >
                  <div
                    className={`h-1.5 transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-black w-12"
                        : "bg-gray-300 w-8 group-hover:bg-gray-400"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
