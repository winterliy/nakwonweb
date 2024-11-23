import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

// @ts-ignore
const App: React.FC = () => {

  const commands = [
    { command: "$cmd", description: "모든 명령어를 확인합니다." },
    { command: "$nmd <개수>", description: "개수만큼 메시지를 삭제할 수 있습니다." },
    { command: "!계좌개설", description: "계좌를 생성하고 초기 자금을 설정합니다." },
    { command: "!이체 <플레이어id> <금액>", description: "다른 플레이어에게 금액을 송금합니다." },
    { command: "!일급", description: "하루에 한 번 일급을 받습니다." },
    { command: "!주식목록", description: "현재 상장된 모든 주식의 정보를 확인합니다." },
    { command: "!매수/매도 <거래소> <주식코드>", description: "주식을 사고 팝니다" },
    { command: "!주식정보 <거래소> <주식코드>", description: "특정 주식의 정보를 확인합니다." },
    { command: "!지갑", description: "현재 자신의 계좌 잔고를 확인합니다." },
    { command: "!주식기록 <거래소> <주식코드>", description: "특정 주식의 가격 변동 기록을 확인합니다." },
    { command: "!bet <금액>", description: "도박을 할 수 있습니다. 금액을 설정하고 도박에 참여하세요." },
    { command: "!운세", description: "운세를 볼 수 있습니다." },
    { command: "!궁합 <유저1> <유저2>", description: "궁합을 볼 수 있습니다. 유저 간의 궁합을 시험해보세요." },
    { command: "!로또참여", description: "10만원을 내고 로또에 참가할 수 있습니다. 당신의 운을 시험해보세요." },
    { command: "!랭킹", description: "총 자산의 순위을 볼 수 있습니다. 유저들의 자산을 확인해보세요." },
    { command: "!세율", description: "세율을 볼 수 있습니다. 현행 세율을 확인해보세요." },
    { command: "!주식그래프 <거래소> <주식코드>", description: "주가의 변화를 그래프로 볼 수 있습니다. 주가의 변동을 확인하여 투자 해보세요." },
    { command: "!기부 <금액>", description: "기부할 수 있습니다. 기부금은 교육, 의료, 식량, 의류, 주거, 봉사자나 재능기부자의 \n활동비나 실비 지원, 환경, 사회복지, 문화예술, 지방지역사회 활성화 등을 위해 사용됩니다." },
    { command: "!일당정기소득보기", description: "나의 일급을 볼 수 있습니다. 소득에 맞춰 소비수준을 계획해보세요." }
  ];

  return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="overflow-x-auto">
          <h1 className="text-2xl font-semibold mb-4">User Information</h1>
            <div className="text-center">
              <table className="min-h-screen bg-gray-50 flex items-center justify-center">
                <Header/>
                <main className="p-6 space-y-12">
                  <Section
                      title="📖 봇 사용법"
                      commands={commands}/>
                </main>
                <Footer/>
              </table>
            </div>
          </div>
        </div>
        );
        };

        export default App;