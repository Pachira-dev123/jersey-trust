import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { Activity, AlertCircle, Calendar, CreditCard, DollarSign, FileText, ShieldCheck } from "lucide-react";
import { ProgressTracker } from "@/components/progress-tracker";
import { TaskChecklist } from "@/components/task-checklist";
import Link from "next/link";

export default function Home() {
  const formationSteps: { id: string; name: string; status: "completed" | "current" | "upcoming" }[] = [
    { id: "01", name: "Application Submitted", status: "completed" },
    { id: "02", name: "Compliance Review", status: "completed" },
    { id: "03", name: "Incorporation", status: "current" },
    { id: "04", name: "Bank Account Opening", status: "upcoming" },
  ];

  const onboardingTasks = [
    { id: "task-1", label: "Upload Passport Copy", completed: true },
    { id: "task-2", label: "Upload Proof of Address", completed: true },
    { id: "task-3", label: "Sign Terms of Business", completed: false },
    { id: "task-4", label: "Complete KYC Questionnaire", completed: false },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      {/* Alerts Section */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertCircle className="h-5 w-5 text-yellow-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <span className="font-medium">Action Required:</span> Your annual return is due in 15 days.
              <Link href="/filings" className="font-medium underline hover:text-yellow-600 ml-2">
                View Filings
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Entity Status
            </CardTitle>
            <ShieldCheck className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Active</div>
            <p className="text-xs text-muted-foreground">
              Good Standing
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Next Renewal
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Jan 15, 2025</div>
            <p className="text-xs text-muted-foreground">
              45 days remaining
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Filings</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              2 pending approval
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Bank Status
            </CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Pending</div>
            <p className="text-xs text-muted-foreground">
              Application in review
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Formation Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <ProgressTracker title="Jersey Trust Trading Ltd" steps={formationSteps} />
          </CardContent>
        </Card>

        <div className="col-span-3 space-y-4">
          <TaskChecklist tasks={onboardingTasks} />

          <Card>
            <CardHeader>
              <CardTitle>Key Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 hover:bg-muted rounded-md cursor-pointer transition-colors">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium">Certificate of Incorporation</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 hover:bg-muted rounded-md cursor-pointer transition-colors">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium">Memorandum of Association</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 hover:bg-muted rounded-md cursor-pointer transition-colors">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium">Share Certificate</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
