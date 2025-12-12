import { getMockUser } from '@/lib/mockUser';
import Link from 'next/link';
import { CRMSidebar } from './components/CRMSidebar';
import { CRMTopBar } from './components/CRMTopBar';

export default async function CRMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getMockUser();

  // Not authenticated - show simple message
  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-12 max-w-md text-center">
          <div className="mb-6">
            <svg
              className="w-16 h-16 mx-auto text-slate-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-3">
            Not Authenticated
          </h1>
          <p className="text-slate-600 mb-6">
            Real authentication will be added later. For now, this is a placeholder.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-[#4f2170] text-white font-semibold rounded-lg hover:bg-[#3d1958] transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  // Authenticated - render full CRM layout
  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <CRMSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <CRMTopBar user={user} />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
