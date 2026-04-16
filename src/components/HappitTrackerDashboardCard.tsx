import { useState } from 'react';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const initialHabits = ['Morning walk', 'Drink water', 'Read', 'Sleep by 11pm'];

export default function HappitTrackerDashboardCard() {
    const [checks, setChecks] = useState<boolean[][]>(
        initialHabits.map(() => Array(days.length).fill(false))
    );

    const toggleCheck = (habitIndex: number, dayIndex: number) => {
        setChecks((current) => {
            const next = current.map((row) => [...row]);
            next[habitIndex][dayIndex] = !next[habitIndex][dayIndex];
            return next;
        });
    };

    return (
        <div className="flex flex-col h-full w-full">
            <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">Habit Tracker</h3>
                <button
                    type="button"
                    onClick={() => setChecks(initialHabits.map(() => Array(days.length).fill(false)))}
                    className="text-sm text-slate-600 hover:text-slate-900 transition"
                >
                    Reset
                </button>
            </div>

            <div className="flex-1 min-h-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                <div className="grid grid-cols-[150px_repeat(7,minmax(0,1fr))] border-b border-slate-200 bg-slate-50 text-sm font-semibold text-slate-700">
                    <div className="px-3 py-3">Habit</div>
                    {days.map((day) => (
                        <div key={day} className="px-2 py-3 text-center">
                            {day}
                        </div>
                    ))}
                </div>

                <div className="max-h-[calc(100%-3rem)] overflow-y-auto">
                    {initialHabits.map((habit, habitIndex) => (
                        <div
                            key={habit}
                            className="grid grid-cols-[150px_repeat(7,minmax(0,1fr))] items-center border-b border-slate-200 text-sm text-slate-800"
                        >
                            <div className="px-3 py-3 font-medium">{habit}</div>
                            {days.map((_, dayIndex) => (
                                <div key={dayIndex} className="flex items-center justify-center px-2 py-3">
                                    <button
                                        type="button"
                                        onClick={() => toggleCheck(habitIndex, dayIndex)}
                                        className={`h-7 w-7 rounded-full border transition ${
                                            checks[habitIndex][dayIndex]
                                                ? 'bg-slate-900 border-slate-900 text-white'
                                                : 'bg-white border-slate-300 text-slate-500 hover:border-slate-400'
                                        }`}
                                    >
                                        {checks[habitIndex][dayIndex] ? '✓' : ''}
                                    </button>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
