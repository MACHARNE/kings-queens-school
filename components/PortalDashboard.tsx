'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LogOut } from 'lucide-react';
import ParentDashboard from '@/components/portal/ParentDashboard';
import StaffDashboard from '@/components/portal/StaffDashboard';
import StudentDashboard from '@/components/portal/StudentDashboard';
import { getCredentialByRole, portalCredentials } from '@/lib/portal-config';
import type { PortalRole, PortalSession } from '@/types';

interface PortalDashboardProps {
  initialRole?: PortalRole;
}

export default function PortalDashboard({ initialRole = 'student' }: PortalDashboardProps) {
  const router = useRouter();
  const [session, setSession] = useState<PortalSession | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem('kqis-portal-session');
    if (!raw) {
      router.replace('/portal');
      return;
    }

    try {
      const parsed = JSON.parse(raw) as PortalSession;
      setSession(parsed);
    } catch {
      sessionStorage.removeItem('kqis-portal-session');
      router.replace('/portal');
    }
  }, [router]);

  const role = session?.role ?? initialRole;
  const credential = getCredentialByRole(role) ?? portalCredentials[1];

  const handleLogout = () => {
    sessionStorage.removeItem('kqis-portal-session');
    router.push('/portal');
  };

  const renderDashboard = () => {
    if (credential.role === 'school-staff') {
      return <StaffDashboard />;
    }

    if (credential.role === 'parent') {
      return <ParentDashboard />;
    }

    return <StudentDashboard />;
  };

  return (
    <section className="min-h-screen bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_42%,#f8fafc_100%)] pt-32 pb-16">
      <div className="container-custom">
        <div className={`mb-8 overflow-hidden rounded-[2rem] bg-gradient-to-r ${credential.accent} text-white shadow-[0_28px_80px_rgba(15,23,42,0.18)]`}>
          <div className="grid gap-8 px-8 py-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
            <div>
              <div className="mb-6 inline-flex items-center gap-4 rounded-3xl bg-white/12 px-5 py-4 backdrop-blur-md">
                <div className="rounded-2xl bg-white p-2.5 shadow-lg">
                  <Image src="/images/logo.png" alt="KQIS Logo" width={64} height={64} className="h-14 w-14 object-contain" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-gold-400">{credential.roleLabel}</p>
                  <h1 className="text-2xl font-bold">KQIS Portal Suite</h1>
                </div>
              </div>

              <h2 className="text-3xl font-bold md:text-4xl">{credential.headline}</h2>
              <p className="mt-4 max-w-2xl text-white/82">{credential.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {portalCredentials.map((item) => (
                  <Link
                    key={item.role}
                    href={`/portal/dashboard?role=${item.role}`}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                      item.role === credential.role
                        ? 'bg-white text-primary-950'
                        : 'bg-white/10 text-white hover:bg-white/16'
                    }`}
                  >
                    {item.roleLabel}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between gap-4">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.22em] text-white/65">Signed in as</p>
                <p className="mt-2 text-lg font-semibold">{session?.email ?? credential.email}</p>
                <p className="mt-2 text-sm text-white/75">Temporary portal access for demonstration and stakeholder review.</p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.22em] text-gold-400">Included Modules</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 px-4 py-3">LMS content access</div>
                  <div className="rounded-2xl bg-white/10 px-4 py-3">Assessment visibility</div>
                  <div className="rounded-2xl bg-white/10 px-4 py-3">Parent and staff workflows</div>
                  <div className="rounded-2xl bg-white/10 px-4 py-3">Communication and notices</div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gold-500 px-4 py-3 font-semibold text-white transition-colors hover:bg-gold-600"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </div>

        {renderDashboard()}
      </div>
    </section>
  );
}
