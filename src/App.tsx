import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
      <div className="bg-gray-100 text-gray-800 min-h-screen">
        <Header />
        <main className="p-6 space-y-12">
          <Section
              title="🤖 봇 소개"
              content="이 디스코드 봇은 사용자 친화적인 경제, 주식, 도박 시스템을 제공합니다. 다양한 기능으로 서버를 더욱 재미있게 만들어 보세요!"
          />
          <Section
              title="🏗 만든 곳 소개"
              content="이 봇은 TypeScript와 Python으로 개발되었으며, 다양한 기능 통합을 목표로 제작되었습니다."
          />
          <Section
              title="📖 봇 사용법"
              content="명령어 목록: `!help`, `!bet <금액>`, `!stock buy <주식> <수량>` 등. 자세한 정보는 문서를 참고하세요."
          />
        </main>
        <Footer />
      </div>
  );
};

export default App;