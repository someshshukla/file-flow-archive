
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LayoutDashboard, FolderOpen, Database, FileArchive, HardDrive } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Files", href: "/files", icon: FileArchive },
  ];

  return (
    <div className="hidden md:flex h-full w-64 flex-col bg-sidebar border-r border-sidebar-border">
      <div className="flex h-16 items-center px-6">
        <Link to="/" className="flex items-center space-x-2">
          <Database className="h-6 w-6 text-sidebar-accent" />
          <span className="text-xl font-bold text-sidebar-foreground">FileFlow</span>
        </Link>
      </div>
      <div className="flex-1 px-3 py-4 space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={cn(
              "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
              item.href === location.pathname
                ? "bg-sidebar-accent/10 text-sidebar-accent hover:bg-sidebar-accent/20"
                : "text-sidebar-foreground/70 hover:bg-sidebar-accent/10 hover:text-sidebar-foreground"
            )}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </div>
      <div className="p-4">
        <div className="rounded-lg bg-sidebar-accent/10 p-4">
          <div className="flex items-center">
            <HardDrive className="h-5 w-5 text-sidebar-accent mr-2" />
            <div className="text-sm text-sidebar-foreground">Storage</div>
          </div>
          <div className="mt-3">
            <div className="flex justify-between text-xs text-sidebar-foreground/70 mb-1">
              <span>25.6 GB used</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-sidebar-border rounded-full h-2">
              <div className="bg-sidebar-accent h-2 rounded-full" style={{ width: "75%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
