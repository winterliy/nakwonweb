import fs from 'fs';
import Chart from 'chart.js/auto';

// 파일 경로 (Windows에서 경로 구분자 문제를 피하려면 슬래시(`/`)를 사용합니다)
const filePath = `${process.env.HOME}/Desktop/NAKWON/economics/history.json`;

// JSON 파일 읽기
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('파일을 읽는 중 오류가 발생했습니다:', err);
        return;
    }

    // JSON 파싱
    const jsonData = JSON.parse(data);

    // 데이터 변환
    const labels = jsonData.stocks.map((stock: { time: string }) => stock.time); // x축 (날짜)
    const prices = jsonData.stocks.map((stock: { price: number }) => stock.price); // y축 (가격)

    // 차트 설정
    const config = {
        type: 'line', // 라인 차트
        data: {
            labels: labels, // x축 레이블
            datasets: [{
                label: 'Stock Price',
                data: prices, // y축 데이터 (가격)
                borderColor: 'rgba(75, 192, 192, 1)', // 선 색상
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // 배경 색상
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date' // x축 제목
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Price' // y축 제목
                    }
                }
            }
        }
    };

    // 차트 생성 (HTMLCanvasElement를 찾는 방법은 웹에서 실행 시와 동일)
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    // @ts-ignore
    new Chart(ctx, config);
});