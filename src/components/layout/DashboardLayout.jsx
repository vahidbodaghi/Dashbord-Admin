import React from "react";
import { Outlet } from "react-router";
import Sidbar from "../../features/Sidbar/Sidbar";
import Topbar from "../../features/Topbar/Topbar";
import BackgroundOverlay from "../../features/BackgroundOverlay";

export default function DashboardLayout() {
  return (
    <main className="flex">
      <Sidbar />

      <section className="grow *:px-6">
        <Topbar />

        <div className="mt-6 container mx-auto">
          <div className="z-10">
            <Outlet />
          </div>
          <BackgroundOverlay />
        </div>
      </section>
    </main>
  );
}
