import React from "react";

interface BannerProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText?: string;
  ctaAction?: () => void;
  backgroundColor?: string;
  textColor?: string;
  showChatButton?: boolean;
}

export const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  description,
  textColor = "text-white",
}) => {
  return (
    <section className={`bg-black ${textColor}  py-14 px-6 md:px-10 mx-20 `}>
      <div className="max-w-7xl mx-auto  z-10">
        <div className="flex flex-col">
          <div className="mb-2">
            <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
          </div>

          <div className="mb-2">
            <h3 className="text-lg md:text-xl font-medium">{subtitle}</h3>
          </div>

          <div>
            <p className="text-sm opacity-80">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
