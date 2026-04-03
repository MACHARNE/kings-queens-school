'use client';

import { BookOpenCheck, CalendarRange, ChartColumnBig, ClipboardList } from 'lucide-react';
import { studentDashboard } from '@/lib/portal-config';
import { AssignmentList, LearningMaterials, ModuleGrid, PortalNotices, PortalQuickLinks, PortalStatGrid, PortalTimeline } from './PortalWidgets';

export default function StudentDashboard() {
  return (
    <div className="space-y-8">
      <PortalStatGrid stats={studentDashboard.stats} />

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <ModuleGrid
          modules={studentDashboard.modules}
          icons={[BookOpenCheck, ClipboardList, ChartColumnBig, CalendarRange]}
        />
        <div className="space-y-6">
          <PortalTimeline title="Today's Learning Plan" items={studentDashboard.timeline} />
          <PortalQuickLinks links={studentDashboard.quickLinks} />
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <LearningMaterials resources={studentDashboard.resources} />
        <AssignmentList assignments={studentDashboard.assignments} />
      </div>

      <PortalNotices notices={studentDashboard.notices} />
    </div>
  );
}
