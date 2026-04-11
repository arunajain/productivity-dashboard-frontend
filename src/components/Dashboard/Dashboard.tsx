import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import "./Dashboard.css";

export default function Dashboard(){

    return (
        <div className="dashboard-container">
            <Header className="dashboard-header" notification={12}/>
            <aside className="dashboard-sidebar">
                <Sidebar />
            </aside>
            
            <main className="dashboard-main">
                <div className="dashboard-component" style={{ gridRow: '1 / 4', gridColumn: '1 / 4' }}>
                    Todo List
                </div>
                <div className="dashboard-component" style={{ gridRow: '1 / 3', gridColumn: '4 / 6' }}>
                    Habit Tracker
                </div>
                <div className="dashboard-component" style={{ gridRow: '4 / 6', gridColumn: '1 / 3' }}>
                    Pomodoro Timer
                </div>
                <div className="dashboard-component" style={{ gridRow: '4 / 5', gridColumn: '3 / 4' }}>
                    Weather
                </div>
                <div className="dashboard-component" style={{ gridRow: '5 / 6', gridColumn: '3 / 4' }}>
                    Temperature & DateTime
                </div>
                <div className="dashboard-component" style={{ gridRow: '3 / 5', gridColumn: '4 / 6' }}>
                    Progress Overview
                </div>
                <div className="dashboard-component" style={{ gridRow: '5 / 6', gridColumn: '4 / 6' }}>
                    Motivational Quote
                </div>
            </main>
            
            <footer className="dashboard-footer">
                <Footer />
            </footer>
        </div>
    );
}