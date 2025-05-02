// app/admin/layout.tsx
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-gray-800 text-white p-4">Admin Header</header>
      <main>{children}</main>
      <footer className="bg-gray-700 text-white p-4">Admin Footer</footer>
    </>
  );
}
