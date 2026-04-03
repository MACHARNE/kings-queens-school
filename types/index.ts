export type PortalRole = 'school-staff' | 'student' | 'parent';

export interface PortalCredential {
  role: PortalRole;
  roleLabel: string;
  email: string;
  password: string;
  headline: string;
  description: string;
  accent: string;
}

export interface PortalSession {
  role: PortalRole;
  roleLabel: string;
  email: string;
}

export interface PortalStat {
  label: string;
  value: string;
  helper: string;
}

export interface PortalQuickLink {
  title: string;
  description: string;
  href: string;
}

export interface PortalModule {
  title: string;
  detail: string;
  tone: string;
}

export interface PortalTimelineItem {
  time: string;
  title: string;
  detail: string;
}

export interface PortalNotice {
  title: string;
  detail: string;
}

export interface LearningResource {
  title: string;
  subject: string;
  type: string;
  progress: string;
}

export interface AssignmentItem {
  title: string;
  course: string;
  due: string;
  status: string;
}

export interface ChildSnapshot {
  name: string;
  className: string;
  attendance: string;
  average: string;
}
