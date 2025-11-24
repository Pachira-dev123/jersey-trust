import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { CheckCircle2, Clock, AlertCircle, FileText, ChevronRight } from "lucide-react";

const filings = [
    {
        id: "FIL-2024-001",
        name: "Annual Return 2024",
        date: "Oct 12, 2024",
        status: "Approved",
        submittedBy: "John Doe",
        fee: "$150.00",
    },
    {
        id: "FIL-2024-002",
        name: "Change of Director (Form 12)",
        date: "Nov 01, 2024",
        status: "Pending",
        submittedBy: "Jane Smith",
        fee: "$50.00",
    },
    {
        id: "FIL-2024-003",
        name: "Allotment of Shares",
        date: "Nov 05, 2024",
        status: "Pending",
        submittedBy: "John Doe",
        fee: "$75.00",
    },
    {
        id: "FIL-2023-089",
        name: "Annual Return 2023",
        date: "Oct 10, 2023",
        status: "Approved",
        submittedBy: "John Doe",
        fee: "$150.00",
    },
    {
        id: "FIL-2023-045",
        name: "Change of Registered Office",
        date: "Jun 15, 2023",
        status: "Rejected",
        submittedBy: "Jane Smith",
        fee: "$0.00",
    },
];

function StatusBadge({ status }: { status: string }) {
    if (status === "Approved") {
        return (
            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                <CheckCircle2 className="mr-1 h-3 w-3" />
                Approved
            </span>
        );
    }
    if (status === "Pending") {
        return (
            <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                <Clock className="mr-1 h-3 w-3" />
                Pending
            </span>
        );
    }
    return (
        <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
            <AlertCircle className="mr-1 h-3 w-3" />
            Rejected
        </span>
    );
}

export default function FilingsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Filings</h2>
                <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">
                    New Filing
                </button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Filing History</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {filings.map((filing) => (
                            <div
                                key={filing.id}
                                className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                                        <FileText className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium leading-none">{filing.name}</p>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            ID: {filing.id} • Submitted on {filing.date} by {filing.submittedBy}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-6">
                                    <div className="text-right">
                                        <p className="text-sm font-medium">{filing.fee}</p>
                                    </div>
                                    <StatusBadge status={filing.status} />
                                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
