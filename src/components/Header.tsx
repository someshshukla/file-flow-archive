
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search, Bell, Upload } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import FileUploadForm from "./FileUploadForm";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border h-16 flex items-center px-4 md:px-6">
      <Button
        variant="outline"
        size="icon"
        className="md:hidden mr-4"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </Button>
      
      <div className="flex-1 flex items-center">
        <form className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search files..."
              className="w-full bg-background pl-8 focus-visible:ring-primary"
            />
          </div>
        </form>
      </div>
      
      <div className="flex items-center space-x-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center">
              <Upload className="mr-2 h-4 w-4" />
              <span>Upload</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Upload Files</DialogTitle>
            </DialogHeader>
            <FileUploadForm />
          </DialogContent>
        </Dialog>
        
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
