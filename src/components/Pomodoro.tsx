import { useState, useEffect } from 'react';

export default function Pomodoro() {
    const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
    const [isRunning, setIsRunning] = useState(false);
    const [isFocus, setIsFocus] = useState(true);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsRunning(false);
            // Could add notification here
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isRunning, timeLeft]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleStart = () => setIsRunning(true);
    const handleReset = () => {
        setIsRunning(false);
        setTimeLeft(isFocus ? 25 * 60 : 5 * 60);
    };
    const handleFocus = () => {
        setIsFocus(true);
        setIsRunning(false);
        setTimeLeft(25 * 60);
    };
    const handleBreak = () => {
        setIsFocus(false);
        setIsRunning(false);
        setTimeLeft(5 * 60);
    };

    return (
        <div className="flex flex-col h-full min-w-[320px]">
            <h2 className="text-lg font-semibold text-center mb-4">Pomodoro Timer</h2>
            
            <div className="flex-1 flex items-center justify-center">
                <div className="text-4xl sm:text-3xl font-mono font-bold text-slate-800">
                    {formatTime(timeLeft)}
                </div>
            </div>
            
            <div className="space-y-4 sm:space-y-3">
                <div className="flex gap-2 justify-center">
                    <button
                        onClick={handleStart}
                        disabled={isRunning}
                        className="px-6 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    >
                        Start
                    </button>
                    <button
                        onClick={handleReset}
                        className="px-6 sm:px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-gray-700 transition"
                    >
                        Reset
                    </button>
                </div>
                
                <div className="flex gap-[12.3rem] justify-center">
                    <button
                        onClick={handleFocus}
                        className={`px-5 sm:px-4 py-2 rounded-lg transition ${
                            isFocus
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                        Focus
                    </button>
                    <button
                        onClick={handleBreak}
                        className={`px-5 sm:px-4 py-2 rounded-lg transition ${
                            !isFocus
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                        Break
                    </button>
                </div>
            </div>
        </div>
    );
}