import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { FileText, Download, Folder } from "lucide-react";

const documents = [
    { name: "Certificate of Incorporation.pdf", date: "Jan 15, 2020", size: "1.2 MB", type: "Certificate" },
    { name: "Memorandum of Association.pdf", date: "Jan 15, 2020", size: "2.4 MB", type: "Legal" },
    { name: "Articles of Association.pdf", date: "Jan 15, 2020", size: "1.8 MB", type: "Legal" },
    { name: "Share Certificate - J. Doe.pdf", date: "Jan 20, 2020", size: "0.5 MB", type: "Shareholder" },
    { name: "Annual Return 2023.pdf", date: "Oct 12, 2023", size: "0.8 MB", type: "Filing" },
    { name: "Board Resolution - Q1 2024.pdf", date: "Mar 30, 2024", size: "0.3 MB", type: "Minutes" },
];

export default function DocumentsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Documents</h2>
                <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">
                    Upload Document
                </button>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
                <Card className="md:col-span-3">
                    <CardHeader>
                        <CardTitle>Company Files</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="relative w-full overflow-auto">
                            <table className="w-full caption-bottom text-sm">
                                <thead className="[&_tr]:border-b">
                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Name</th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Type</th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Date</th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Size</th>
                                        <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="[&_tr:last-child]:border-0">
                                    {documents.map((doc) => (
                                        <tr key={doc.name} className="border-b transition-colors hover:bg-muted/50">
                                            <td className="p-4 align-middle font-medium">
                                                <div className="flex items-center">
                                                    <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                                                    {doc.name}
                                                </div>
                                            </td>
                                            <td className="p-4 align-middle">{doc.type}</td>
                                            <td className="p-4 align-middle">{doc.date}</td>
                                            <td className="p-4 align-middle">{doc.size}</td>
                                            <td className="p-4 align-middle text-right">
                                                <button className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-input bg-background text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                                                    <Download className="h-4 w-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Folders</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="flex items-center justify-between rounded-md border p-3 hover:bg-muted/50 cursor-pointer">
                                <div className="flex items-center space-x-3">
                                    <Folder className="h-5 w-5 text-blue-500" />
                                    <span className="text-sm font-medium">Corporate</span>
                                </div>
                                <span className="text-xs text-muted-foreground">12 files</span>
                            </div>
                            <div className="flex items-center justify-between rounded-md border p-3 hover:bg-muted/50 cursor-pointer">
                                <div className="flex items-center space-x-3">
                                    <Folder className="h-5 w-5 text-yellow-500" />
                                    <span className="text-sm font-medium">Financials</span>
                                </div>
                                <span className="text-xs text-muted-foreground">8 files</span>
                            </div>
                            <div className="flex items-center justify-between rounded-md border p-3 hover:bg-muted/50 cursor-pointer">
                                <div className="flex items-center space-x-3">
                                    <Folder className="h-5 w-5 text-green-500" />
                                    <span className="text-sm font-medium">Legal</span>
                                </div>
                                <span className="text-xs text-muted-foreground">5 files</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
