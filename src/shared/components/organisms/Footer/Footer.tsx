import React from "react";
import { Link } from "react-router-dom";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer className={`bg-[#1a1a1a] text-white py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Column - Logo and Company Info */}
          <div>
            <div className="mb-6">
              <Link to="/" className="inline-block">
                <h2 className="text-yellow-400 text-2xl font-bold">LANDAS</h2>
              </Link>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>대표이사 : 홍길동</li>
              <li>사업자등록번호 : 201-86-15245</li>
              <li>서울특별시 중구 다산로 199 (동대문 중앙) 6층</li>
              <li>통신판매업신고 : 중구 제6975호</li>
              <li>개인정보보호책임자 : 최우영</li>
              <li className="text-xs mt-4 text-gray-400">
                Copyright © WWW.ldsb2bmall.com All right reserved{" "}
              </li>
            </ul>
          </div>

          {/* Middle Column - Empty Space */}
          <div></div>

          {/* Right Column - Contact Info */}
          <div>
            <div className="mb-4">
              <h3 className="text-gray-400 text-xs">전문 판매 주문 전화</h3>
              <p className="text-xl font-bold">1661-6244</p>
            </div>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>평일 : 09:00 ~ 18:00</li>
              <li>주말 · 공휴일휴무</li>
              <li>제휴문의 : 031-1177-04-035</li>
              <li>팩스 : 070-1555</li>
            </ul>

            <div className="mt-6 flex space-x-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2c-2.714 0-3.055.012-4.121.06-1.066.049-1.793.218-2.428.465a4.88 4.88 0 00-1.77 1.153 4.9 4.9 0 00-1.153 1.77c-.247.635-.416 1.362-.465 2.428C2.012 8.944 2 9.285 2 12s.012 3.056.06 4.122c.049 1.066.218 1.793.465 2.428a4.88 4.88 0 001.153 1.77 4.9 4.9 0 001.77 1.153c.635.247 1.362.416 2.428.465 1.067.048 1.408.06 4.122.06s3.055-.012 4.122-.06c1.066-.049 1.793-.218 2.428-.465a4.88 4.88 0 001.77-1.153 4.9 4.9 0 001.153-1.77c.247-.635.416-1.362.465-2.428.048-1.066.06-1.408.06-4.122s-.012-3.056-.06-4.122c-.049-1.066-.218-1.793-.465-2.428a4.88 4.88 0 00-1.153-1.77 4.9 4.9 0 00-1.77-1.153c-.635-.247-1.362-.416-2.428-.465C15.055 2.012 14.714 2 12 2zm0 1.8c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.466.181.8.399 1.15.748.35.35.566.684.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.976-.207 1.505-.344 1.858a3.1 3.1 0 01-.748 1.15c-.35.35-.684.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.207-1.858-.344a3.1 3.1 0 01-1.15-.748 3.1 3.1 0 01-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.181-.466.399-.8.748-1.15.35-.35.684-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058zm0 3.064A5.136 5.136 0 106.864 12 5.136 5.136 0 0012 6.864zm0 8.468A3.333 3.333 0 118.667 12 3.333 3.333 0 0112 15.332zM17.338 6.59a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <span className="sr-only">YouTube</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
