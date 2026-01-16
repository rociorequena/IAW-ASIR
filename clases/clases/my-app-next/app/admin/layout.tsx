// app/admin/layout.tsx
export default function AdminLayout({ children, }: { children: React.ReactNode})
{
 return (
 <div className="flex h-screen">
 {/* Sidebar de admin */}
 <aside className="w-64 bg-gray-800 text-white p-4">
 <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
 <nav className="space-y-2">
 <a href="/admin" className="block p-2 hover:bg-gray-700">
 Dashboard
 </a>
 <a href="/admin/users" className="block p-2 hover:bg-gray-700">
 Usuarios
 </a>
 <a href="/admin/settings" className="block p-2 hover:bg-gray-700">
 Configuración
 </a>
 </nav>
 </aside>

 {/* Contenido de admin */}
 <main className="flex-1 overflow-y-auto p-8 bg-gray-100">
 {children}
 </main>
 </div>
 )
}