import type {
  AssignmentItem,
  ChildSnapshot,
  LearningResource,
  PortalCredential,
  PortalModule,
  PortalNotice,
  PortalQuickLink,
  PortalRole,
  PortalStat,
  PortalTimelineItem,
} from '@/types';

interface DashboardContent {
  stats: PortalStat[];
  modules: PortalModule[];
  timeline: PortalTimelineItem[];
  quickLinks: PortalQuickLink[];
  notices: PortalNotice[];
}

interface StudentDashboardContent extends DashboardContent {
  resources: LearningResource[];
  assignments: AssignmentItem[];
}

interface ParentDashboardContent extends DashboardContent {
  children: ChildSnapshot[];
}

export type { PortalRole };

export const portalCredentials: PortalCredential[] = [
  {
    role: 'school-staff',
    roleLabel: 'School Staff',
    email: 'staff@kqis.edu.ng',
    password: 'Staff@123',
    headline: 'School Operations Dashboard',
    description: 'Manage classes, staff tools, grading workflows, attendance, and school-wide communication.',
    accent: 'from-primary-950 via-primary-900 to-primary-700',
  },
  {
    role: 'student',
    roleLabel: 'Student',
    email: 'student@kqis.edu.ng',
    password: 'Student@123',
    headline: 'Student LMS Portal',
    description: 'Access courses, assignments, recorded lessons, schedules, and learning resources in one place.',
    accent: 'from-primary-950 via-primary-900 to-sky-700',
  },
  {
    role: 'parent',
    roleLabel: 'Parent',
    email: 'parent@kqis.edu.ng',
    password: 'Parent@123',
    headline: 'Parent Visibility Portal',
    description: "Monitor your child's progress, school notices, attendance, and communication updates.",
    accent: 'from-primary-950 via-primary-900 to-emerald-700',
  },
];

export function getCredentialByRole(role: PortalRole) {
  return portalCredentials.find((item) => item.role === role);
}

export const staffDashboard: DashboardContent = {
  stats: [
    { label: 'Active Classes', value: '18', helper: 'Across junior and senior sections this week' },
    { label: 'Pending Scores', value: '12', helper: 'Assessments waiting for moderation and release' },
    { label: 'Attendance Logs', value: '96%', helper: 'Current staff-class attendance reporting rate' },
  ],
  modules: [
    { title: 'Class Management', detail: 'Coordinate timetables, assign teachers, and oversee departmental activity.', tone: 'from-primary-900 to-primary-700' },
    { title: 'Attendance Logs', detail: 'Track punctuality, attendance trends, and escalations from one dashboard.', tone: 'from-primary-900 to-sky-700' },
    { title: 'Assessment & Grading', detail: 'Review score entry, continuous assessment, and report publishing workflows.', tone: 'from-primary-900 to-indigo-700' },
    { title: 'Announcements', detail: 'Broadcast circulars, reminders, and school-wide communication professionally.', tone: 'from-primary-900 to-gold-500' },
  ],
  timeline: [
    { time: '08:00 AM', title: 'Morning briefing', detail: 'Department heads review lesson coverage and duty schedules.' },
    { time: '11:15 AM', title: 'Assessment moderation', detail: 'Finalize CA entries for Basic 5 and JSS2 classes.' },
    { time: '02:30 PM', title: 'Parent communication window', detail: 'Respond to flagged portal messages and update notices.' },
  ],
  quickLinks: [
    { title: 'Upload Result Sheet', description: 'Publish updated term performance to the role dashboards.', href: '/portal/dashboard?role=school-staff' },
    { title: 'Open Attendance View', description: 'Check attendance records and intervention flags.', href: '/portal/dashboard?role=school-staff' },
    { title: 'Contact School Front Desk', description: 'Escalate portal or schedule issues to admin support.', href: '/contact' },
  ],
  notices: [
    { title: 'Mid-term review in progress', detail: 'Ensure all subject teachers complete score validation before Friday.' },
    { title: 'Digital classroom audit', detail: 'Smart classroom devices will be reviewed for the next learning cycle.' },
  ],
};

export const studentDashboard: StudentDashboardContent = {
  stats: [
    { label: 'Active Courses', value: '9', helper: 'Current subjects and learning tracks available' },
    { label: 'Assignments Due', value: '4', helper: 'Tasks and revision checkpoints due this week' },
    { label: 'Attendance', value: '96%', helper: 'Overall attendance and punctuality performance' },
  ],
  modules: [
    { title: 'My Courses', detail: 'Open your subject spaces, class notes, and teacher guidance for each week.', tone: 'from-primary-900 to-primary-700' },
    { title: 'Assignments', detail: 'See pending tasks, submission dates, and assessment reminders in one place.', tone: 'from-primary-900 to-sky-700' },
    { title: 'Recorded Lessons', detail: 'Revise with lesson recordings and targeted support content after class.', tone: 'from-primary-900 to-indigo-700' },
    { title: 'Results & Progress', detail: 'Monitor your learning growth, continuous assessment, and exam readiness.', tone: 'from-primary-900 to-gold-500' },
  ],
  timeline: [
    { time: '08:30 AM', title: 'English Language live class', detail: 'Essay structure and comprehension practice.' },
    { time: '12:00 PM', title: 'Recorded revision block', detail: 'Watch the mathematics revision clip before prep.' },
    { time: '04:00 PM', title: 'Assignment submission', detail: 'Upload Basic Science project notes to the LMS.' },
  ],
  quickLinks: [
    { title: 'Open Academics Page', description: 'Review programme information and curriculum direction.', href: '/academics' },
    { title: 'Request Admission Info', description: 'Share portal questions with the admissions team.', href: '/admissions' },
    { title: 'View Digital Learning', description: 'See how KQIS blends classroom and e-learning support.', href: '/digital-learning' },
  ],
  notices: [
    { title: 'WAEC / NECO revision support', detail: 'Senior students can now access the updated exam prep library.' },
    { title: 'Library upload complete', detail: 'New science and mathematics revision videos are now available.' },
  ],
  resources: [
    { title: 'Mathematics Revision Pack', subject: 'Mathematics', type: 'Recorded Lesson', progress: '82% complete' },
    { title: 'English Comprehension Clinic', subject: 'English Language', type: 'Slide Deck', progress: 'New' },
    { title: 'Basic Science Experiment Notes', subject: 'Basic Science & Technology', type: 'PDF Resource', progress: 'Available' },
  ],
  assignments: [
    { title: 'Essay Writing Exercise', course: 'English Language', due: 'April 5', status: 'Pending' },
    { title: 'Chemistry Objective Drill', course: 'Chemistry', due: 'April 6', status: 'In Review' },
    { title: 'Civic Education Reflection', course: 'Civic Education', due: 'April 8', status: 'Upcoming' },
  ],
};

export const parentDashboard: ParentDashboardContent = {
  stats: [
    { label: 'Children Linked', value: '2', helper: 'Profiles connected to this family account' },
    { label: 'Average Attendance', value: '98%', helper: 'Combined attendance visibility across your children' },
    { label: 'Unread Notices', value: '3', helper: 'Recent updates shared from school management' },
  ],
  modules: [
    { title: 'Child Progress', detail: 'Monitor assessment trends, subject strength, and academic growth with clarity.', tone: 'from-primary-900 to-primary-700' },
    { title: 'Attendance View', detail: 'See punctuality, presence records, and attendance alerts in real time.', tone: 'from-primary-900 to-sky-700' },
    { title: 'Payments & Fees', detail: 'Track payment prompts, term balances, and request support with ease.', tone: 'from-primary-900 to-emerald-700' },
    { title: 'Communication Hub', detail: 'Read notices, school reminders, and direct family-facing updates from KQIS.', tone: 'from-primary-900 to-gold-500' },
  ],
  timeline: [
    { time: 'Tomorrow', title: 'Parents virtual briefing', detail: 'Digital learning update session for families at 6:00 PM.' },
    { time: 'April 8', title: 'Assessment feedback release', detail: 'Continuous assessment summaries will be published to the portal.' },
    { time: 'April 12', title: 'School visit window', detail: 'Campus appointment slots available for booked families.' },
  ],
  quickLinks: [
    { title: 'Book a School Tour', description: 'Schedule a guided visit to speak with the school team.', href: '/contact' },
    { title: 'Open Admissions', description: 'Start or continue an application for another child.', href: '/admissions/apply-now' },
    { title: 'Read Learning Hub', description: 'Explore helpful updates from the school learning hub.', href: '/blog' },
  ],
  notices: [
    { title: 'Term fees reminder', detail: 'Request the detailed fees schedule if you need a current payment breakdown.' },
    { title: 'Safety update', detail: 'School transport and dismissal monitoring procedures have been refreshed.' },
  ],
  children: [
    { name: 'Amanda Okeke', className: 'Primary 5', attendance: '99%', average: 'A-' },
    { name: 'Daniel Okeke', className: 'JSS 2', attendance: '97%', average: 'B+' },
  ],
};
