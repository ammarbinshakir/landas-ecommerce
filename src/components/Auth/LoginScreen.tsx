import { useState, useMemo } from "react";
import { useAuth } from "../../shared/hooks/useAuth";

export default function LoginScreen() {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formValid, setFormValid] = useState(true);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // Check if form is valid (all fields filled and remember me checked)
  const isFormValid = useMemo(() => {
    return (
      userId.trim() !== "" &&
      password.trim() !== "" &&
      password.length > 0 &&
      rememberMe
    );
  }, [userId, password, rememberMe]);

  // Reset form validation when input changes after submission

  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if form is valid using the same logic as isFormValid useMemo
    const valid =
      userId.trim() !== "" &&
      password.trim() !== "" &&
      password.length >= 6 &&
      rememberMe;

    setFormValid(valid);
    setSubmitted(true);

    if (valid) {
      setIsLoading(true);
      setLoginError("");

      try {
        // Call auth login function
        const result = await login(userId, password);

        if (!result.success) {
          // Show the error message
          setLoginError(result.message || "로그인에 실패했습니다.");
          setFormValid(false);
        }
      } catch (error) {
        console.error("Login error:", error);
        setLoginError("로그인 처리 중 오류가 발생했습니다.");
        setFormValid(false);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex items-center flex-col justify-center min-h-screen gap-2 py-5">
      <div className="w-full mx-auto bg-white rounded-md min-h-[600px] sm:min-h-[550px] md:min-h-[600px] lg:max-w-[550px]">
        {/* Logo */}
        <div className="pt-10 pb-10 text-center">
          <h1 className="text-[32px] font-bold tracking-wider text-[#FFC40B]">
            LANDAS
          </h1>
        </div>

        <form onSubmit={handleLogin} className="px-[50px] py-8 space-y-4">
          {/* 아이디 */}
          <div className="mb-4 flex items-start gap-1">
            <div className="text-[14px] font-normal text-gray-700 w-20 pt-3">
              아이디
            </div>
            <div className="w-full min-h-[65px] relative">
              <input
                id="userId"
                type="text"
                value={userId}
                onChange={(e) => {
                  setUserId(e.target.value);
                  if (submitted && !formValid) {
                    setFormValid(true);
                  }
                }}
                placeholder="아이디를 입력해주세요."
                className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-0 focus:border-[#FFC40B] text-sm ${
                  submitted && !formValid && userId.trim() === ""
                    ? "border-red-300 bg-red-50"
                    : "border-gray-200 bg-[#fafafa]"
                }`}
              />
              {submitted && !formValid && userId.trim() === "" && (
                <div className="text-red-500 text-xs mt-1">
                  아이디를 입력하지 않았습니다.
                </div>
              )}
            </div>
          </div>

          {/* 비밀번호 */}
          <div className="mb-4 flex items-start gap-1">
            <div className="text-[14px] font-normal text-gray-700 w-20 pt-3">
              비밀번호
            </div>
            <div className="relative w-full min-h-[65px]">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (submitted && !formValid) {
                    setFormValid(true);
                  }
                }}
                placeholder="비밀번호를 입력해주세요."
                className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-0 focus:border-[#FFC40B] text-sm ${
                  submitted &&
                  !formValid &&
                  (password.trim() === "" || password.length < 6)
                    ? "border-red-300 bg-red-50"
                    : "border-gray-200 bg-[#fafafa]"
                }`}
              />
              {submitted &&
                !formValid &&
                (password.trim() === "" || password.length < 6) && (
                  <div className="text-red-500 text-xs mt-1">
                    아이디 또는 비밀번호가 일치하지 않습니다.
                  </div>
                )}
              <button
                type="button"
                className="absolute top-0 right-0 h-[46px] px-2 flex items-center"
                onClick={togglePasswordVisibility}
                tabIndex={-1}
              >
                <div className="cursor-pointer w-8 h-8 flex items-center justify-center">
                  <svg
                    className="h-[18px] w-[18px]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {showPassword ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7A9.97 9.97 0 014.02 8.971m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    ) : (
                      <>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </>
                    )}
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* 아이디 저장 + 링크 */}
          <div className="flex items-center justify-between mb-8 mt-2">
            <div className="flex items-center">
              <div className="relative flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => {
                    setRememberMe(!rememberMe);
                  }}
                  className="h-4 w-4 opacity-0 absolute"
                />
                <div
                  className={`w-[16px] h-[16px] border flex items-center justify-center ${
                    rememberMe
                      ? "bg-[#FFC40B] border-[#FFC40B]"
                      : "border-gray-300"
                  }`}
                >
                  {rememberMe && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-xs text-gray-600"
                >
                  아이디 저장
                </label>
              </div>
            </div>

            <div className="text-xs">
              <span className="text-gray-500">
                <span className="hover:text-[#FFC40B]">아이디찾기</span>
                <span className="mx-1.5 text-gray-400">|</span>
                <span className="hover:text-[#FFC40B]">비밀번호 찾기</span>
              </span>
            </div>
          </div>

          {/* Login Error Message */}
          {loginError && (
            <div className="text-center text-red-500 text-sm mb-2">
              {loginError}
            </div>
          )}

          {/* 로그인 */}
          <div className="mb-3">
            <button
              type="submit"
              disabled={(submitted && !isFormValid) || isLoading}
              className={`w-full py-3.5 focus:outline-none text-sm font-medium rounded-md ${
                (!submitted || isFormValid) && !isLoading
                  ? "bg-[#FFC40B] text-black cursor-pointer"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              {isLoading ? "로그인 중..." : "로그인"}
            </button>
          </div>

          {/* 회원가입 */}
          <div>
            <button
              type="button"
              className="w-full py-3.5 border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 focus:outline-none text-sm font-medium rounded-md"
            >
              회원가입
            </button>
          </div>
        </form>
      </div>

      <div className=" py-1 text-center w-full text-xs text-gray-500">
        Copyright © WWW.ldsb2bmall.com All right reserved{" "}
      </div>
    </div>
  );
}
