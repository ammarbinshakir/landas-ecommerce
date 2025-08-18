import React from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  colors: string[];
  category: string;
  subcategory: string;
}

interface ProductsSectionProps {
  title?: string;
  products?: Product[];
}

const ProductsSection: React.FC<ProductsSectionProps> = ({
  title = "상품진열이 타이틀이 들어갑니다.",
  products = [],
}) => {
  // Default products if none provided
  const defaultProducts: Product[] =
    products.length > 0
      ? products
      : [
          {
            id: 1,
            name: "상품명이 노출 됩니다.상품명이 노출 됩니다.상품명이 노출 됩니다.",
            price: "000,000원",
            image: "/product.jpg",
            colors: [
              "#3A3A3A",
              "#786F66",
              "#D6C9A0",
              "#EEE8E0",
              "#FFC700",
              "#FF9900",
              "#FFCC00",
              "#FFEE00",
              "#FFE600",
              "#FFCC33",
            ],
            category: "카테고리",
            subcategory: "하위 카테고리",
          },
          {
            id: 2,
            name: "상품명이 노출 됩니다.상품명이 노출 됩니다.상품명이 노출 됩니다.",
            price: "000,000원",
            image: "/product.jpg",
            colors: [
              "#3A3A3A",
              "#786F66",
              "#D6C9A0",
              "#EEE8E0",
              "#FFC700",
              "#FF9900",
              "#FFCC00",
              "#FFEE00",
              "#FFE600",
              "#FFCC33",
            ],
            category: "카테고리",
            subcategory: "하위 카테고리",
          },
          {
            id: 3,
            name: "상품명이 노출 됩니다.상품명이 노출 됩니다.상품명이 노출 됩니다.",
            price: "000,000원",
            image: "/product.jpg",
            colors: [
              "#3A3A3A",
              "#786F66",
              "#D6C9A0",
              "#EEE8E0",
              "#FFC700",
              "#FF9900",
              "#FFCC00",
              "#FFEE00",
              "#FFE600",
              "#FFCC33",
            ],
            category: "카테고리",
            subcategory: "하위 카테고리",
          },
          {
            id: 4,
            name: "상품명이 노출 됩니다.상품명이 노출 됩니다.상품명이 노출 됩니다.",
            price: "000,000원",
            image: "/product.jpg",
            colors: [
              "#3A3A3A",
              "#786F66",
              "#D6C9A0",
              "#EEE8E0",
              "#FFC700",
              "#FF9900",
              "#FFCC00",
              "#FFEE00",
              "#FFE600",
              "#FFCC33",
            ],
            category: "카테고리",
            subcategory: "하위 카테고리",
          },
        ];

  const [productsList] = React.useState<Product[]>(defaultProducts);

  return (
    <div className="py-16 px-4 md:px-10 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-medium mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">
          빈티지에어, 뭐가될 것 같은 퍼포먼스가 들어갑니다.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {productsList.map((product) => (
          <div key={product.id} className="product-item">
            {/* Product Image */}
            <Link
              to={`/product/${product.id}`}
              className="block relative overflow-hidden group"
            >
              <div className="w-full overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover group-hover:opacity-90 transition-opacity"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </Link>

            {/* Color Options */}
            <div className="flex flex-wrap gap-1 my-2">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="w-5 h-5 rounded-full inline-block cursor-pointer"
                  style={{ backgroundColor: color }}
                  title={`Color ${index + 1}`}
                ></span>
              ))}
            </div>

            {/* Product Info */}
            <div className="product-info mt-2">
              <div className="text-xs text-gray-500 mb-1">
                [{product.category}] {product.subcategory}
              </div>
              <h3 className="text-sm mb-1 truncate">{product.name}</h3>
              <div className="text-sm font-semibold">{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
