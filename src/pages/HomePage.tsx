import { Banner } from "../shared/components/organisms/Banner";
import { FeatureShowcase } from "../shared/components/organisms/FeatureShowcase";
import { Footer } from "../shared/components/organisms/Footer";
import { Hero } from "../shared/components/organisms/Hero";
import { ProductsSection } from "../shared/components/organisms/ProductsSection";

const HomePage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="w-full">
        <Hero />
      </div>

      {/* Feature Showcase */}
      <div className="mt-8">
        <FeatureShowcase title="스타일과 실용성을 모두 담은 시즌 컬렉션" />
      </div>

      {/* Products Section */}
      <ProductsSection />

      {/* B2B Banner Section */}

      <ProductsSection />
      <div className="mb-5">
        <Banner
          title="B2B 전문 의류 쇼핑몰!"
          subtitle="15년 이상의 노하우로 믿고 거래 하세요"
          description="수많은 기업이 선택한 신뢰있는 소싱 솔루션, 지금 문의하세요"
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
