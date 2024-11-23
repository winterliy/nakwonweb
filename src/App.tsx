import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

const App: React.FC = () => {

  const commands = [
    { command: "!help", description: "모든 명령어를 확인합니다." },
    { command: "!bet <금액>", description: "도박을 시도하여 성공 시 2배를 획득합니다." },
    { command: "!stock buy <주식> <수량>", description: "주식을 구매합니다." },
    { command: "!stock sell <주식> <수량>", description: "보유한 주식을 판매합니다." },
    { command: "!daily", description: "하루에 한 번 일급을 받습니다." },
  ];

  return (
      <div className="bg-gray-100 text-gray-800 min-h-screen">
        <main className="p-6 space-y-12">
          <Section title="📖 봇 사용법" commands={commands}/>
        </main>
      </div>
  );
};

export default App;