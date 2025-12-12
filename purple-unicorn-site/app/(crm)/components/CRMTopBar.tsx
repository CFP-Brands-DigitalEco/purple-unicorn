import Link from 'next/link';
import { EmployeeUser } from '@/lib/mockUser';

interface CRMTopBarProps {
  user: EmployeeUser;
}

export function CRMTopBar({ user }: CRMTopBarProps) {
  return (
    <header className="bg-white border-b border-slate-200 px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - could be page title or breadcrumbs */}
        <div className="flex-1">
          {/* Page-specific titles will be rendered by children */}
        </div>

        {/* Right side - User info and logout */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-semibold text-slate-800">{user.name}</p>
              <p className="text-xs text-slate-500 capitalize">{user.role}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
              <span className="text-[#4f2170] font-semibold text-sm">
                {user.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase()
                  .slice(0, 2)}
              </span>
            </div>
          </div>

          <Link
            href="/"
            className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#4f2170] hover:bg-slate-50 rounded-lg transition-colors"
          >
            Log out
          </Link>
        </div>
      </div>
    </header>
  );
}
