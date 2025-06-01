import Navbar from '@/components/dashboard/Navbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F2F0E9]">
      <Navbar />
      <main className="max-w-8xl mx-auto px-6 lg:px-12 py-8">
        {children}
      </main>
    </div>
  );
}