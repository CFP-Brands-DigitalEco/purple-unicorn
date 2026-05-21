import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="bg-white border-b border-slate-100 py-3">
      <div className="mx-auto max-w-6xl px-4">
        <ol className="flex items-center gap-2 text-sm text-slate-500">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && <span className="text-slate-300">/</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-[#4f2170] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-800 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
