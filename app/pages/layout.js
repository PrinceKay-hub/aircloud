import Header from "../components/Header";
import ProtectedRoute from "../components/ProtectedRoute";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <ProtectedRoute>
      <div className="dashboard-layout">
        <div className=" flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex flex-col flex-1 overflow-auto">
            <div className="max-w-7xl mx-auto w-full">
              <Header />
              {children}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
