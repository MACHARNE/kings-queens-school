'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { BookOpenCheck, Eye, EyeOff, GraduationCap, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { portalCredentials, type PortalRole } from '@/lib/portal-config';
import type { PortalSession } from '@/types';

type LoginFormValues = {
  role: PortalRole;
  email: string;
  password: string;
};

const roleIcons = {
  'school-staff': ShieldCheck,
  student: BookOpenCheck,
  parent: GraduationCap,
};

export default function PortalLoginExperience() {
  const router = useRouter();
  const [activeRole, setActiveRole] = useState<PortalRole>('student');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: {
      role: 'student',
      email: 'student@kqis.edu.ng',
      password: 'Student@123',
    },
  });

  const selectedRole = watch('role');
  const currentRole = portalCredentials.find((item) => item.role === activeRole)!;

  const handleRoleSelection = (role: PortalRole) => {
    const credential = portalCredentials.find((item) => item.role === role)!;
    setActiveRole(role);
    setValue('role', role);
    setValue('email', credential.email);
    setValue('password', credential.password);
    setAuthError('');
  };

  const onSubmit = handleSubmit((values) => {
    setIsSubmitting(true);
    setAuthError('');

    const match = portalCredentials.find(
      (item) => item.role === values.role && item.email === values.email.trim() && item.password === values.password
    );

    window.setTimeout(() => {
      if (!match) {
        setAuthError('Invalid temporary login. Use one of the demo account details shown below.');
        setIsSubmitting(false);
        return;
      }

      const session: PortalSession = {
        role: match.role,
        roleLabel: match.roleLabel,
        email: match.email,
      };

      sessionStorage.setItem('kqis-portal-session', JSON.stringify(session));
      router.push(`/portal/dashboard?role=${match.role}`);
    }, 700);
  });

  return (
    <section className="min-h-screen bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_42%,#fff7ed_100%)] pt-32 pb-16">
      <div className="container-custom">
        <div className="grid overflow-hidden rounded-[2rem] border border-primary-100 bg-white shadow-[0_28px_90px_rgba(15,23,42,0.16)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className={`relative overflow-hidden bg-gradient-to-br ${currentRole.accent} p-8 text-white md:p-12`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.25),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(147,197,253,0.22),transparent_30%)]" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="mb-8 inline-flex items-center gap-4 rounded-3xl bg-white/12 px-5 py-4 backdrop-blur-md">
                  <div className="rounded-2xl bg-white p-2.5 shadow-lg">
                    <Image src="/images/logo.png" alt="KQIS Logo" width={64} height={64} className="h-14 w-14 object-contain" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-gold-400">KQIS Portals</p>
                    <h1 className="text-2xl font-bold">Kings & Queens School</h1>
                  </div>
                </div>

                <motion.h2
                  key={activeRole}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="max-w-xl text-4xl font-bold leading-tight md:text-5xl"
                >
                  Secure access to the KQIS learning and school operations portal.
                </motion.h2>
                <motion.p
                  key={`${activeRole}-description`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.08 }}
                  className="mt-5 max-w-xl text-lg text-white/82"
                >
                  Sign in as a student, parent, or staff member to explore a production-style dashboard with LMS tools,
                  progress visibility, communication modules, and digital school workflows.
                </motion.p>
              </div>

              <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">Portal Capabilities</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 px-4 py-4">Learning materials and assignment tracking</div>
                  <div className="rounded-2xl bg-white/10 px-4 py-4">Parent visibility and school notices</div>
                  <div className="rounded-2xl bg-white/10 px-4 py-4">Attendance, grading, and staff tools</div>
                  <div className="rounded-2xl bg-white/10 px-4 py-4">Role-based dashboard cards and quick actions</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-gold-600">Portal Sign In</p>
              <h2 className="text-3xl font-bold text-primary-950">Choose a role and continue</h2>
              <p className="mt-3 text-gray-600">
                Demo access is enabled so you can review the KQIS portal flow and dashboard components.
              </p>
            </div>

            <div className="mb-6 grid gap-3 sm:grid-cols-3">
              {portalCredentials.map((credential) => {
                const Icon = roleIcons[credential.role];
                const isActive = selectedRole === credential.role;

                return (
                  <button
                    key={credential.role}
                    type="button"
                    onClick={() => handleRoleSelection(credential.role)}
                    className={`rounded-[1.5rem] border px-4 py-4 text-left transition-all ${
                      isActive
                        ? 'border-primary-200 bg-primary-50 shadow-[0_14px_30px_rgba(30,58,138,0.12)]'
                        : 'border-gray-200 bg-white hover:border-primary-100 hover:bg-gray-50'
                    }`}
                  >
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-900 to-primary-700 text-gold-400 shadow-[0_12px_30px_rgba(30,58,138,0.22)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="font-semibold text-primary-950">{credential.roleLabel}</p>
                    <p className="mt-1 text-sm text-gray-600">{credential.email}</p>
                  </button>
                );
              })}
            </div>

            <form onSubmit={onSubmit} className="rounded-[1.75rem] border border-primary-100 bg-gray-50 p-6 shadow-inner">
              <div className="grid gap-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-primary-900">Role</label>
                  <select
                    {...register('role', {
                      onChange: (event) => handleRoleSelection(event.target.value as PortalRole),
                    })}
                    className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-primary-500"
                  >
                    {portalCredentials.map((credential) => (
                      <option key={credential.role} value={credential.role}>
                        {credential.roleLabel}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-primary-900">Email</label>
                  <input
                    type="email"
                    {...register('email', { required: 'Email is required.' })}
                    className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-primary-500"
                    placeholder="Enter email"
                  />
                  {errors.email ? <p className="mt-2 text-sm text-red-600">{errors.email.message}</p> : null}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-primary-900">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      {...register('password', { required: 'Password is required.' })}
                      className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 pr-12 outline-none focus:border-primary-500"
                      placeholder="Enter password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((current) => !current)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.password ? <p className="mt-2 text-sm text-red-600">{errors.password.message}</p> : null}
                </div>

                {authError ? <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">{authError}</p> : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-2xl bg-primary-900 px-5 py-3 font-semibold text-white transition-colors hover:bg-primary-800 disabled:opacity-60"
                >
                  {isSubmitting ? 'Signing in...' : 'Login to Portal'}
                </button>
              </div>
            </form>

            <div className="mt-6 rounded-[1.75rem] border border-gold-200 bg-amber-50 p-6">
              <h3 className="text-lg font-bold text-primary-950">Temporary Demo Access</h3>
              <div className="mt-4 space-y-3">
                {portalCredentials.map((credential) => (
                  <div key={credential.role} className="rounded-2xl bg-white px-4 py-4 shadow-sm">
                    <p className="font-semibold text-primary-900">{credential.roleLabel}</p>
                    <p className="text-sm text-gray-600">Email: {credential.email}</p>
                    <p className="text-sm text-gray-600">Password: {credential.password}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600">Use these temporary accounts while the full production portal is being integrated.</p>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              Need admissions support? <Link href="/admissions" className="font-semibold text-primary-800">Go to Admissions</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
