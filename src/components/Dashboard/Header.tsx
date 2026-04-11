import type { HTMLAttributes } from "react";
import { Bell } from "lucide-react";
type HeaderProps = HTMLAttributes<HTMLElement> & {
    notification?: number;
};
export default function Header({className, notification=0, ...props}: HeaderProps) {
    return (
        
        <header className={`flex items-center justify-between w-full h-full ${className || ''}`} {...props}>
            {/* Left side: Logo and Title */}
            <div className="flex items-center gap-4 ml-16">
                {/* Logo placeholder - you can replace with actual logo */}
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">P</span>
                </div>

                {/* Title */}
                <h1 className="text-xl font-semibold text-gray-800">
                    Productivity Dashboard
                </h1>
            </div>

            {/* Right side: User avatar and notification */}
            <div className="flex items-center gap-4">
                {/* Notification icon */}
                <button className="relative p-2 text-gray-600 hover:text-gray-800 transition-colors">
                    <Bell className="w-6 h-6" />
                    {notification > 0 ? (
                        <span className="absolute -top-0.5 -right-0.5 min-w-[1.1rem] h-4 px-1 text-[0.65rem] leading-none font-semibold text-white bg-red-500 rounded-full flex items-center justify-center">
                            {notification}
                        </span>
                    ) : null}
                </button>

                {/* User avatar */}
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-medium text-sm">JD</span>
                </div>
            </div>
        </header>
    );
}