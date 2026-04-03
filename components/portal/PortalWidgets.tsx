'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import type {
  AssignmentItem,
  ChildSnapshot,
  LearningResource,
  PortalModule,
  PortalNotice,
  PortalQuickLink,
  PortalStat,
  PortalTimelineItem,
} from '@/types';

type IconCardProps = {
  title: string;
  detail: string;
  icon: LucideIcon;
  tone?: string;
};

export function PortalStatGrid({ stats }: { stats: PortalStat[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="rounded-[1.75rem] border border-primary-100 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">{item.label}</p>
          <p className="mt-3 text-4xl font-bold text-primary-950">{item.value}</p>
          <p className="mt-2 text-sm text-gray-600">{item.helper}</p>
        </motion.div>
      ))}
    </div>
  );
}

export function PortalIconCard({ title, detail, icon: Icon, tone = 'from-primary-900 to-primary-700' }: IconCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45 }}
      className="rounded-[1.75rem] border border-primary-100 bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
    >
      <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tone} text-gold-400 shadow-[0_18px_36px_rgba(30,58,138,0.28)]`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-3 text-2xl font-bold text-primary-950">{title}</h3>
      <p className="text-gray-600">{detail}</p>
    </motion.div>
  );
}

export function PortalQuickLinks({ links }: { links: PortalQuickLink[] }) {
  return (
    <div className="rounded-[1.75rem] border border-primary-100 bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
      <h2 className="text-2xl font-bold text-primary-950">Quick Actions</h2>
      <div className="mt-5 space-y-4">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="flex items-center justify-between rounded-2xl border border-gray-200 px-4 py-4 transition-all hover:border-primary-200 hover:bg-primary-50"
          >
            <div>
              <p className="font-semibold text-primary-950">{link.title}</p>
              <p className="mt-1 text-sm text-gray-600">{link.description}</p>
            </div>
            <ArrowRight className="h-5 w-5 text-primary-700" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export function PortalTimeline({ title, items }: { title: string; items: PortalTimelineItem[] }) {
  return (
    <div className="rounded-[1.75rem] border border-primary-100 bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
      <h2 className="text-2xl font-bold text-primary-950">{title}</h2>
      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <div key={`${item.time}-${item.title}`} className="rounded-2xl bg-gray-50 px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">{item.time}</p>
            <p className="mt-2 font-semibold text-primary-950">{item.title}</p>
            <p className="mt-1 text-sm text-gray-600">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PortalNotices({ notices }: { notices: PortalNotice[] }) {
  return (
    <div className="rounded-[1.75rem] border border-primary-100 bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
      <h2 className="text-2xl font-bold text-primary-950">Announcements</h2>
      <div className="mt-5 space-y-4">
        {notices.map((notice) => (
          <div key={notice.title} className="rounded-2xl border border-gold-100 bg-amber-50 px-4 py-4">
            <p className="font-semibold text-primary-950">{notice.title}</p>
            <p className="mt-1 text-sm text-gray-700">{notice.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ModuleGrid({ modules, icons }: { modules: PortalModule[]; icons: LucideIcon[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {modules.map((module, index) => {
        const Icon = icons[index % icons.length];
        return <PortalIconCard key={module.title} title={module.title} detail={module.detail} icon={Icon} tone={module.tone} />;
      })}
    </div>
  );
}

export function LearningMaterials({ resources }: { resources: LearningResource[] }) {
  return (
    <div className="rounded-[1.75rem] border border-primary-100 bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
      <h2 className="text-2xl font-bold text-primary-950">Learning Materials</h2>
      <div className="mt-5 space-y-4">
        {resources.map((resource) => (
          <div key={resource.title} className="rounded-2xl border border-gray-200 px-4 py-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-primary-950">{resource.title}</p>
                <p className="mt-1 text-sm text-gray-600">
                  {resource.subject} · {resource.type}
                </p>
              </div>
              <span className="rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-800">{resource.progress}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AssignmentList({ assignments }: { assignments: AssignmentItem[] }) {
  return (
    <div className="rounded-[1.75rem] border border-primary-100 bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
      <h2 className="text-2xl font-bold text-primary-950">Assignments & Assessments</h2>
      <div className="mt-5 space-y-4">
        {assignments.map((assignment) => (
          <div key={assignment.title} className="rounded-2xl bg-gray-50 px-4 py-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-primary-950">{assignment.title}</p>
                <p className="mt-1 text-sm text-gray-600">
                  {assignment.course} · Due {assignment.due}
                </p>
              </div>
              <span className="rounded-full bg-gold-100 px-3 py-1 text-sm font-semibold text-gold-700">{assignment.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChildOverview({ children }: { children: ChildSnapshot[] }) {
  return (
    <div className="rounded-[1.75rem] border border-primary-100 bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
      <h2 className="text-2xl font-bold text-primary-950">Children Overview</h2>
      <div className="mt-5 space-y-4">
        {children.map((child) => (
          <div key={child.name} className="rounded-2xl border border-gray-200 px-4 py-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-primary-950">{child.name}</p>
                <p className="mt-1 text-sm text-gray-600">{child.className}</p>
              </div>
              <div className="flex gap-3 text-sm">
                <span className="rounded-full bg-primary-50 px-3 py-1 font-semibold text-primary-800">{child.attendance} attendance</span>
                <span className="rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-700">{child.average} average</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
