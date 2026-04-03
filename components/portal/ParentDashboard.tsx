'use client';

import { Bell, ChartColumnBig, CreditCard, Users } from 'lucide-react';
import { parentDashboard } from '@/lib/portal-config';
import { ChildOverview, ModuleGrid, PortalNotices, PortalQuickLinks, PortalStatGrid, PortalTimeline } from './PortalWidgets';

export default function ParentDashboard() {
  return (
    <div className="space-y-8">
      <PortalStatGrid stats={parentDashboard.stats} />

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <ChildOverview children={parentDashboard.children} />
        <PortalTimeline title="Upcoming Family Schedule" items={parentDashboard.timeline} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <ModuleGrid
          modules={parentDashboard.modules}
          icons={[ChartColumnBig, Bell, CreditCard, Users]}
        />
        <div className="space-y-6">
          <PortalQuickLinks links={parentDashboard.quickLinks} />
          <PortalNotices notices={parentDashboard.notices} />
        </div>
      </div>
    </div>
  );
}
