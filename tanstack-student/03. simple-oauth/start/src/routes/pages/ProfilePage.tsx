import { Link } from "react-router";
import { User, Mail, Calendar, Settings, LogOut } from "lucide-react";

export default function ProfilePage() {
  // 더미 사용자 데이터
  const userData = {
    name: "홍길동",
    email: "hong@example.com",
    joinDate: "2024년 1월 15일",
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-2xl mx-auto">
        {/* 헤더 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center space-x-6">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">
                {userData.name}
              </h1>
              <p className="text-gray-600 mt-1">{userData.email}</p>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                <span>가입일: {userData.joinDate}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 사용자 정보 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            계정 정보
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <User className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-700">이름</p>
                <p className="text-gray-900">{userData.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-700">이메일</p>
                <p className="text-gray-900">{userData.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-700">가입일</p>
                <p className="text-gray-900">{userData.joinDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 액션 버튼들 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            계정 관리
          </h2>
          <div className="space-y-3">
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-lg transition duration-200">
              <Settings className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700">설정</span>
            </button>
            <Link
              to="/login"
              className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-lg transition duration-200"
            >
              <LogOut className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700">로그아웃</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
