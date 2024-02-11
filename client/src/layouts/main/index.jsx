import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="container mx-auto min-h-screen">
      <Outlet />
    </div>
  );
}
