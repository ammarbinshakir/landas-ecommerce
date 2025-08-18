import { Outlet } from "react-router-dom";
import classNameMerge from "../utils/classNameMerge";
import type { ReactNode } from "react";
import { Navbar } from "../components/organisms/Navbar";

const MainLayout = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <>
      <Navbar />
      <div
        className={classNameMerge(
          `font-pretendard flex h-fit w-full`,
          className
        )}
      >
        {/* main content area */}
        <div className="flex-1 w-full">{children || <Outlet />}</div>
      </div>
    </>
  );
};

export default MainLayout;
