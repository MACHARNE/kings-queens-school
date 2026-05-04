type SiteAccessPageProps = {
  searchParams: Promise<{
    error?: string
    redirect?: string
  }>
}

export default async function SiteAccessPage({ searchParams }: SiteAccessPageProps) {
  const params = await searchParams
  const redirect = params.redirect?.startsWith('/') ? params.redirect : '/'
  const hasError = params.error === '1'

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-md flex-col justify-center">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30">
          <h1 className="text-3xl font-bold leading-tight">
            Sorry, the site access is no longer available.
          </h1>

          <form action="/api/site-access/login" method="post" className="mt-6 space-y-4">
            <input type="hidden" name="redirect" value={redirect} />
            <label className="block">
              <span className="text-sm font-medium text-slate-200">Admin email</span>
              <input
                className="mt-2 w-full rounded-md border border-white/10 bg-slate-900 px-3 py-3 text-white outline-none transition focus:border-amber-300"
                name="email"
                type="email"
                autoComplete="username"
                required
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-200">Password</span>
              <input
                className="mt-2 w-full rounded-md border border-white/10 bg-slate-900 px-3 py-3 text-white outline-none transition focus:border-amber-300"
                name="password"
                type="password"
                autoComplete="current-password"
                required
              />
            </label>
            {hasError ? (
              <p className="rounded-md border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm text-red-100">
                The admin email or password is incorrect, or the environment credentials are not configured yet.
              </p>
            ) : null}
            <button
              type="submit"
              className="w-full rounded-md bg-amber-300 px-4 py-3 font-semibold text-slate-950 transition hover:bg-amber-200"
            >
              Login as admin
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
