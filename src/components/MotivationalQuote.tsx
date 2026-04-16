import { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

interface Quote {
    content: string;
    author: string;
}

export default function MotivationalQuote() {
    const [quote, setQuote] = useState<Quote | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchQuote = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch('http://api.quotable.io/random');
            if (!response.ok) {
                throw new Error('Failed to fetch quote');
            }
            const data = await response.json();
            setQuote(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch quote');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2"></div>
                <p className="text-sm text-gray-600">Loading quote...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-red-600 mb-2">Failed to load quote</p>
                <button
                    onClick={fetchQuote}
                    className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full w-full">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800 text-left flex-1">
                    Motivational Quote
                </h3>
                <button
                    onClick={fetchQuote}
                    className="flex-none p-1 text-gray-600 hover:text-gray-800 transition-colors text-right"
                    title="Get new quote"
                >
                    <RefreshCw className="w-5 h-5" />
                </button>
            </div>

            <div className="flex-1 min-h-0">
                <div className="h-full flex flex-col justify-center text-center overflow-hidden">
                    <div className="max-h-full overflow-y-auto px-2">
                        <blockquote className="text-base sm:text-lg italic text-gray-700 mb-3 leading-relaxed break-words">
                            "{quote?.content}"
                        </blockquote>
                        <cite className="text-sm text-gray-600 font-medium block">
                            — {quote?.author}
                        </cite>
                    </div>
                </div>
            </div>
        </div>
    );
}