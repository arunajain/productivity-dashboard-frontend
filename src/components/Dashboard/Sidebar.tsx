export default function Sidebar() {
    return (
        <nav className="flex h-full flex-col justify-between gap-6 p-4 text-sm text-slate-700">
            <div className="space-y-6">
                <div className="space-y-2">
                    
                    <button className="flex w-full items-center rounded-2xl bg-slate-900 px-3 py-2 text-left text-white transition hover:bg-slate-800">
                        Dashboard
                    </button>
                    <button className="flex w-full items-center rounded-2xl px-3 py-2 text-left transition hover:bg-slate-100">
                        Habits
                    </button>
                </div>

                <div className="space-y-2">
                    <div className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Projects
                    </div>
                    <button className="flex w-full items-center rounded-2xl px-3 py-2 text-left transition hover:bg-slate-100">
                        All Projects
                    </button>
                    <button className="flex w-full items-center rounded-2xl px-3 py-2 text-left transition hover:bg-slate-100">
                        Active Projects
                    </button>
                    <button className="flex w-full items-center rounded-2xl px-3 py-2 text-left transition hover:bg-slate-100">
                        Create Project
                    </button>
                </div>

                <div className="space-y-2">
                    <div className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Goals
                    </div>
                    <button className="flex w-full items-center rounded-2xl px-3 py-2 text-left transition hover:bg-slate-100">
                        All Goals
                    </button>
                    <button className="flex w-full items-center rounded-2xl px-3 py-2 text-left transition hover:bg-slate-100">
                        Goals by Project
                    </button>
                    <button className="flex w-full items-center rounded-2xl px-3 py-2 text-left transition hover:bg-slate-100">
                        Create Goal
                    </button>
                </div>

                <div className="space-y-2">
                    <div className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Todo Lists
                    </div>
                    <button className="flex w-full items-center rounded-2xl px-3 py-2 text-left transition hover:bg-slate-100">
                        My Todo Lists
                    </button>
                    <button className="flex w-full items-center rounded-2xl px-3 py-2 text-left transition hover:bg-slate-100">
                        Create Todo List
                    </button>
                </div>
            </div>

            <div className="space-y-1 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                <div className="font-semibold text-slate-900">Need help?</div>
                <p className="text-xs leading-5 text-slate-500">
                    Use Projects to group goals, then attach todo lists to each goal.
                </p>
            </div>
        </nav>
    );
}