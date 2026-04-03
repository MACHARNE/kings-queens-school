'use client';

import { Bell, ChartColumnBig, ClipboardList, Users } from 'lucide-react';
import { staffDashboard } from '@/lib/portal-config';
import { ModuleGrid, PortalNotices, PortalQuickLinks, PortalStatGrid, PortalTimeline } from './PortalWidgets';

export default function StaffDashboard() {
  return (
    <div className="space-y-8">
      <PortalStatGrid stats={staffDashboard.stats} />

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <ModuleGrid
          modules={staffDashboard.modules}
          icons={[Users, ClipboardList, ChartColumnBig, Bell]}
        />
        <div className="space-y-6">
          <PortalTimeline title="Operations Agenda" items={staffDashboard.timeline} />
          <PortalQuickLinks links={staffDashboard.quickLinks} />
        </div>
      </div>

      <PortalNotices notices={staffDashboard.notices} />
    </div>
  );
}
