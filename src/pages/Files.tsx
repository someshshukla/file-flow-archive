
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  FileArchive,
  Folder,
  MoreVertical,
  Grid,
  List,
  Download,
  Trash,
  FileImage,
  FileText,
  FileCode,
  Edit,
  File,
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import FileUploadForm from "@/components/FileUploadForm";

type FileItem = {
  id: number;
  name: string;
  type: string;
  size: string;
  modified: string;
  icon: React.ElementType;
};

type FolderItem = {
  id: number;
  name: string;
  files: number;
  modified: string;
};

const fileItems: FileItem[] = [
  { id: 1, name: "Annual Report.pdf", type: "PDF", size: "4.2MB", modified: "Today, 10:32 AM", icon: FileText },
  { id: 2, name: "Project Screenshots.zip", type: "Archive", size: "12.8MB", modified: "Yesterday, 2:15 PM", icon: FileArchive },
  { id: 3, name: "Budget Spreadsheet.xlsx", type: "Spreadsheet", size: "1.5MB", modified: "Apr 20, 9:45 AM", icon: FileText },
  { id: 4, name: "Team Photo.jpg", type: "Image", size: "3.7MB", modified: "Apr 19, 11:30 AM", icon: FileImage },
  { id: 5, name: "index.html", type: "HTML", size: "28KB", modified: "Apr 18, 3:22 PM", icon: FileCode },
  { id: 6, name: "Contract Template.docx", type: "Document", size: "546KB", modified: "Apr 17, 5:15 PM", icon: FileText },
  { id: 7, name: "Logo Design.png", type: "Image", size: "2.3MB", modified: "Apr 16, 1:45 PM", icon: FileImage },
  { id: 8, name: "Project Timeline.pptx", type: "Presentation", size: "8.1MB", modified: "Apr 15, 11:20 AM", icon: FileText },
];

const folderItems: FolderItem[] = [
  { id: 1, name: "Marketing Assets", files: 12, modified: "Today, 3:45 PM" },
  { id: 2, name: "Financial Reports", files: 8, modified: "Yesterday, 9:30 AM" },
  { id: 3, name: "Project Documents", files: 24, modified: "Apr 19, 5:20 PM" },
  { id: 4, name: "Client Contracts", files: 6, modified: "Apr 17, 2:15 PM" },
];

const Files = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Files</h1>
          <p className="text-muted-foreground">
            Browse and manage your digital assets
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <FileArchive className="mr-2 h-4 w-4" />
                Upload Files
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload Files</DialogTitle>
              </DialogHeader>
              <FileUploadForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-3 justify-between">
          <Input
            placeholder="Search files..."
            className="md:max-w-xs"
          />
          <div className="flex items-center gap-2">
            <Tabs defaultValue="all" className="w-fit">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="favorites">Favorites</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="border rounded-md p-1 flex">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
                className="h-8 w-8"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("list")}
                className="h-8 w-8"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {folderItems.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-3">Folders</h2>
              <div className={`grid gap-4 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : ""}`}>
                {viewMode === "grid" ? (
                  <>
                    {folderItems.map((folder) => (
                      <div
                        key={folder.id}
                        className="bg-card rounded-lg border p-4 hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Folder className="h-10 w-10 text-blue-500" />
                            <div>
                              <h3 className="font-medium truncate">{folder.name}</h3>
                              <p className="text-xs text-muted-foreground">
                                {folder.files} files
                              </p>
                            </div>
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Rename
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Download className="mr-2 h-4 w-4" />
                                Download
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        <p className="text-xs text-muted-foreground mt-4">
                          Last modified: {folder.modified}
                        </p>
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="border rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y">
                      <thead className="bg-muted/50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Name
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Files
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Modified
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Actions</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-card divide-y">
                        {folderItems.map((folder) => (
                          <tr key={folder.id} className="hover:bg-muted/50 cursor-pointer">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <Folder className="h-5 w-5 text-blue-500 mr-3" />
                                <span className="font-medium">{folder.name}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              {folder.files} files
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                              {folder.modified}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MoreVertical className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <Edit className="mr-2 h-4 w-4" />
                                    Rename
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Download className="mr-2 h-4 w-4" />
                                    Download
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-destructive">
                                    <Trash className="mr-2 h-4 w-4" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-xl font-semibold mb-3">Files</h2>
            <div className={`grid gap-4 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : ""}`}>
              {viewMode === "grid" ? (
                <>
                  {fileItems.map((file) => (
                    <div
                      key={file.id}
                      className="bg-card rounded-lg border p-4 hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <file.icon className="h-10 w-10 text-blue-500" />
                          <div>
                            <h3 className="font-medium truncate">{file.name}</h3>
                            <p className="text-xs text-muted-foreground">
                              {file.type} • {file.size}
                            </p>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Rename
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="mr-2 h-4 w-4" />
                              Download
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <Trash className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <p className="text-xs text-muted-foreground mt-4">
                        Last modified: {file.modified}
                      </p>
                    </div>
                  ))}
                </>
              ) : (
                <div className="border rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y">
                    <thead className="bg-muted/50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Type
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Size
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Modified
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-card divide-y">
                      {fileItems.map((file) => (
                        <tr key={file.id} className="hover:bg-muted/50 cursor-pointer">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <file.icon className="h-5 w-5 text-blue-500 mr-3" />
                              <span className="font-medium">{file.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {file.type}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {file.size}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                            {file.modified}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Rename
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Download className="mr-2 h-4 w-4" />
                                  Download
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">
                                  <Trash className="mr-2 h-4 w-4" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Files;
