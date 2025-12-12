export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-4 font-oswald">
        Dashboard
      </h1>
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <p className="text-slate-600">
          This is the internal dashboard. We will later add stats for jobs,
          applications, and clients here.
        </p>
      </div>
    </div>
  );
}
