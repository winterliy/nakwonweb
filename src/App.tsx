import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

// @ts-ignore
const App: React.FC = () => {

  const commands = [
    { command: "현호야 생일 축하해~", description: "" }
  ];

  return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">User Information</h1>
          <div className="overflow-x-auto">
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