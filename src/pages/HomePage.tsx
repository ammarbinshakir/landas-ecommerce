import { useAuth } from "../shared/hooks/useAuth";

const HomePage = () => {
  const { user, logout } = useAuth();

  return (
    <div className="p-8">
      <div className="mb-8 bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">
          환영합니다, {user?.name || "Guest"}님!
        </h1>
        <p className="text-gray-600 mb-6">로그인에 성공했습니다.</p>

        <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-6">
          <h2 className="text-lg font-semibold mb-2">사용자 정보</h2>
          <p>
            <span className="font-medium">ID:</span> {user?.id || "Unknown"}
          </p>
        </div>

        <button
          onClick={logout}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default HomePage;
