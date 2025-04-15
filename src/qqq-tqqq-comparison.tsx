// qqq-tqqq-comparison.tsx
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function QQQTQQQComparison() {
    // 데이터 처리
    const rawQQQData = [
        {date: '2025-01-14', price: 504.33},
        {date: '2025-01-15', price: 515.93},
        {date: '2025-01-16', price: 512.32},
        {date: '2025-01-17', price: 520.96},
        {date: '2025-01-21', price: 524.02},
        {date: '2025-01-22', price: 530.72},
        {date: '2025-01-23', price: 531.85},
        {date: '2025-01-24', price: 528.84},
        {date: '2025-01-27', price: 513.44},
        {date: '2025-01-28', price: 521.03},
        {date: '2025-01-29', price: 520.05},
        {date: '2025-01-30', price: 522.27},
        {date: '2025-01-31', price: 521.51},
        {date: '2025-02-03', price: 517.34},
        {date: '2025-02-04', price: 523.69},
        {date: '2025-02-05', price: 526.07},
        {date: '2025-02-06', price: 528.81},
        {date: '2025-02-07', price: 522.14},
        {date: '2025-02-10', price: 528.46},
        {date: '2025-02-11', price: 527.20},
        {date: '2025-02-12', price: 527.51},
        {date: '2025-02-13', price: 535.10},
        {date: '2025-02-14', price: 537.35},
        {date: '2025-02-18', price: 538.57},
        {date: '2025-02-19', price: 538.72},
        {date: '2025-02-20', price: 536.43},
        {date: '2025-02-21', price: 525.30},
        {date: '2025-02-24', price: 519.10},
        {date: '2025-02-25', price: 512.56},
        {date: '2025-02-26', price: 513.79},
        {date: '2025-02-27', price: 499.53},
        {date: '2025-02-28', price: 507.41},
        {date: '2025-03-03', price: 496.31},
        {date: '2025-03-04', price: 494.81},
        {date: '2025-03-05', price: 501.26},
        {date: '2025-03-06', price: 487.47},
        {date: '2025-03-07', price: 491.06},
        {date: '2025-03-10', price: 472.03},
        {date: '2025-03-11', price: 470.90},
        {date: '2025-03-12', price: 476.21},
        {date: '2025-03-13', price: 467.64},
        {date: '2025-03-14', price: 478.95},
        {date: '2025-03-17', price: 482.05},
        {date: '2025-03-18', price: 473.83},
        {date: '2025-03-19', price: 480.17},
        {date: '2025-03-20', price: 478.55},
        {date: '2025-03-21', price: 480.12},
        {date: '2025-03-24', price: 490.66},
        {date: '2025-03-25', price: 493.46},
        {date: '2025-03-26', price: 484.38},
        {date: '2025-03-27', price: 481.62},
        {date: '2025-03-28', price: 468.94},
        {date: '2025-03-31', price: 468.92},
        {date: '2025-04-01', price: 472.70},
        {date: '2025-04-02', price: 476.15},
        {date: '2025-04-03', price: 450.66},
        {date: '2025-04-04', price: 422.67},
        {date: '2025-04-07', price: 423.69},
        {date: '2025-04-08', price: 416.06},
        {date: '2025-04-09', price: 466.00},
        {date: '2025-04-10', price: 446.18},
        {date: '2025-04-11', price: 454.40}
    ];

    const rawTQQQData = [
        {date: '2025-01-14', price: 75.54},
        {date: '2025-01-15', price: 80.64},
        {date: '2025-01-16', price: 79.00},
        {date: '2025-01-17', price: 82.90},
        {date: '2025-01-21', price: 84.27},
        {date: '2025-01-22', price: 87.54},
        {date: '2025-01-23', price: 88.08},
        {date: '2025-01-24', price: 86.49},
        {date: '2025-01-27', price: 78.91},
        {date: '2025-01-28', price: 82.41},
        {date: '2025-01-29', price: 81.90},
        {date: '2025-01-30', price: 82.93},
        {date: '2025-01-31', price: 82.48},
        {date: '2025-02-03', price: 80.48},
        {date: '2025-02-04', price: 83.40},
        {date: '2025-02-05', price: 84.49},
        {date: '2025-02-06', price: 85.76},
        {date: '2025-02-07', price: 82.49},
        {date: '2025-02-10', price: 85.39},
        {date: '2025-02-11', price: 84.78},
        {date: '2025-02-12', price: 84.95},
        {date: '2025-02-13', price: 88.53},
        {date: '2025-02-14', price: 89.57},
        {date: '2025-02-18', price: 90.12},
        {date: '2025-02-19', price: 90.13},
        {date: '2025-02-20', price: 89.04},
        {date: '2025-02-21', price: 83.46},
        {date: '2025-02-24', price: 80.46},
        {date: '2025-02-25', price: 77.39},
        {date: '2025-02-26', price: 77.89},
        {date: '2025-02-27', price: 71.43},
        {date: '2025-02-28', price: 74.70},
        {date: '2025-03-03', price: 69.87},
        {date: '2025-03-04', price: 69.11},
        {date: '2025-03-05', price: 71.80},
        {date: '2025-03-06', price: 65.85},
        {date: '2025-03-07', price: 67.21},
        {date: '2025-03-10', price: 59.63},
        {date: '2025-03-11', price: 58.94},
        {date: '2025-03-12', price: 60.95},
        {date: '2025-03-13', price: 57.62},
        {date: '2025-03-14', price: 61.71},
        {date: '2025-03-17', price: 62.90},
        {date: '2025-03-18', price: 59.73},
        {date: '2025-03-19', price: 62.06},
        {date: '2025-03-20', price: 61.42},
        {date: '2025-03-21', price: 62.00},
        {date: '2025-03-24', price: 65.94},
        {date: '2025-03-25', price: 67.11},
        {date: '2025-03-26', price: 63.38},
        {date: '2025-03-27', price: 62.30},
        {date: '2025-03-28', price: 57.34},
        {date: '2025-03-31', price: 57.30},
        {date: '2025-04-01', price: 58.62},
        {date: '2025-04-02', price: 59.93},
        {date: '2025-04-03', price: 50.30},
        {date: '2025-04-04', price: 41.09},
        {date: '2025-04-07', price: 41.25},
        {date: '2025-04-08', price: 38.90},
        {date: '2025-04-09', price: 52.61},
        {date: '2025-04-10', price: 46.14},
        {date: '2025-04-11', price: 48.58}
    ];

    // 합친 데이터 생성
    const combinedData = rawQQQData.map((item, index) => {
        return {
            date: item.date,
            QQQ: item.price,
            TQQQ: rawTQQQData[index].price
        };
    });

    // 수정된 정규화 데이터 생성 (첫 날 = 100)
    // 수정 포인트: 100을 곱하지 않고 그냥 상대 비율만 계산
    const normalizedData = combinedData.map((item, index) => {
        if (index === 0) {
            return {
                date: item.date,
                QQQ: 100,
                TQQQ: 100
            };
        }

        return {
            date: item.date,
            QQQ: (item.QQQ / combinedData[0].QQQ) * 100,
            TQQQ: (item.TQQQ / combinedData[0].TQQQ) * 100
        };
    });

    // 이론적 3배 레버리지 계산
    const theoreticalData = [];
    let theoreticalValue = 100;

    for (let i = 0; i < combinedData.length; i++) {
        if (i === 0) {
            theoreticalData.push({
                date: combinedData[i].date,
                QQQ: 100,
                TQQQ: 100,
                Theoretical3x: 100
            });
        } else {
            const qqq_daily_return = (combinedData[i].QQQ / combinedData[i-1].QQQ) - 1;
            theoreticalValue = theoreticalValue * (1 + (qqq_daily_return * 3));

            theoreticalData.push({
                date: combinedData[i].date,
                QQQ: normalizedData[i].QQQ,
                TQQQ: normalizedData[i].TQQQ,
                Theoretical3x: theoreticalValue
            });
        }
    }
    type DataItem = {
        date: string;
        QQQ: number;
        TQQQ: number;
        displayDate?: string;
    };

    // 날짜 레이블 간소화
    const formatChartData = (data: DataItem[]) => {
        return data.map((item) => ({
            ...item,
            displayDate: item.date
        }));
    };

    const [dataType, setDataType] = useState('normalized');

    return (
        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">QQQ와 TQQQ 3개월 비교 (2025-01-14 ~ 2025-04-11)</h2>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
                <button
                    className={`px-4 py-2 rounded ${dataType === 'normalized' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setDataType('normalized')}
                >
                    정규화된 가격 (%)
                </button>
                <button
                    className={`px-4 py-2 rounded ${dataType === 'raw' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setDataType('raw')}
                >
                    실제 가격 ($)
                </button>
                <button
                    className={`px-4 py-2 rounded ${dataType === 'theoretical' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setDataType('theoretical')}
                >
                    이론적 vs 실제 레버리지
                </button>
            </div>

            <div className="w-full h-96 mb-6" style={{ height: '500px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    {dataType === 'normalized' ? (
                        <LineChart data={formatChartData(normalizedData)} margin={{ top: 5, right: 30, left: 20, bottom: 35 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                dataKey="displayDate"
                                angle={-45}
                                textAnchor="end"
                                height={60}
                                tick={{ fontSize: 11 }}
                                interval={0}
                            />
                            <YAxis
                                domain={[50, 130]}
                                tickFormatter={(value) => `${typeof value === 'number' ? value.toFixed(0) : parseFloat(value).toFixed(0)}%`}
                            />
                            <Tooltip
                                formatter={(value: string | number) => `${typeof value === 'number' ? value.toFixed(2) : parseFloat(value as string).toFixed(2)}%`} // 배열이 아닌 단일 문자열을 반환
                                labelFormatter={(label) => `날짜: ${label || ''}`} // 문자열만 반환
                            />

                            <Legend />
                            <Line type="monotone" dataKey="QQQ" stroke="#0066cc" strokeWidth={2} name="QQQ %" dot={false} />
                            <Line type="monotone" dataKey="TQQQ" stroke="#ff0000" strokeWidth={2} name="TQQQ %" dot={false} />
                        </LineChart>
                    ) : dataType === 'raw' ? (
                        <LineChart data={formatChartData(combinedData)} margin={{ top: 5, right: 30, left: 20, bottom: 35 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                dataKey="displayDate"
                                angle={-45}
                                textAnchor="end"
                                height={60}
                                tick={{ fontSize: 11 }}
                                interval={0}
                            />
                            <YAxis yAxisId="left" orientation="left" stroke="#0066cc" domain={['auto', 'auto']} tickFormatter={(value) => `$${typeof value === 'number' ? value.toFixed(2) : parseFloat(value).toFixed(2)}`} />
                            <YAxis yAxisId="right" orientation="right" stroke="#ff0000" domain={['auto', 'auto']} tickFormatter={(value) => `$${typeof value === 'number' ? value.toFixed(2) : parseFloat(value).toFixed(2)}`} />
                            <Tooltip
                                formatter={(value: string | number) => `$${typeof value === 'number' ? value.toFixed(2) : parseFloat(value as string).toFixed(2)}`} // 배열이 아닌 단일 문자열을 반환
                                labelFormatter={(label) => `날짜: ${label || ''}`} // 문자열만 반환
                            />

                            <Legend />
                            <Line yAxisId="left" type="monotone" dataKey="QQQ" stroke="#0066cc" strokeWidth={2} name="QQQ 가격" dot={false} />
                            <Line yAxisId="right" type="monotone" dataKey="TQQQ" stroke="#ff0000" strokeWidth={2} name="TQQQ 가격" dot={false} />
                        </LineChart>
                    ) : (
                        <LineChart data={formatChartData(theoreticalData)} margin={{ top: 5, right: 30, left: 20, bottom: 35 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                dataKey="displayDate"
                                angle={-45}
                                textAnchor="end"
                                height={60}
                                tick={{ fontSize: 11 }}
                                interval={0}
                            />
                            <YAxis
                                domain={[45, 125]}
                                tickFormatter={(value) => `${typeof value === 'number' ? value.toFixed(0) : parseFloat(value).toFixed(0)}%`}
                            />
                            <Tooltip
                                formatter={(value: string | number) => `${typeof value === 'number' ? value.toFixed(2) : parseFloat(value as string).toFixed(2)}%`} // 배열이 아닌 단일 문자열을 반환
                                labelFormatter={(label) => `날짜: ${label || ''}`} // 문자열만 반환
                            />

                            <Legend />
                            <Line type="monotone" dataKey="QQQ" stroke="#0066cc" strokeWidth={2} name="QQQ %" dot={false} />
                            <Line type="monotone" dataKey="TQQQ" stroke="#ff0000" strokeWidth={2} name="TQQQ %" dot={false} />
                            <Line type="monotone" dataKey="Theoretical3x" stroke="#00cc66" strokeWidth={2} name="이론적 3x %" dot={false} />
                        </LineChart>
                    )}
                </ResponsiveContainer>
            </div>



            <div className="w-full max-w-lg bg-white p-4 rounded shadow">
                <h3 className="text-lg font-semibold mb-2">레버리지 ETF의 문제점 분석</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>경로 의존성:</strong> QQQ는 3개월간 -9.90% 하락했지만, TQQQ는 -35.69% 하락했습니다 (3배인 -29.7%보다 더 크게 하락).</li>
                    <li><strong>변동성 침식:</strong> 시장이 등락을 반복할수록 레버리지 ETF는 원금을 더 빠르게 잃습니다.</li>
                    <li><strong>복리 효과의 비대칭성:</strong> 하락 후 같은 비율로 상승해도 원금 회복이 어렵습니다 (예: 30% 하락 후 30% 상승해도 원금의 91%만 회복).</li>
                    <li><strong>장기 투자 부적합:</strong> 이런 특성들로 인해 레버리지 ETF는 단기 거래용으로 설계되었습니다.</li>
                </ul>
            </div>
        </div>
    );

}
