import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";

export default function MessagesPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Messages</h2>
            <Card>
                <CardHeader>
                    <CardTitle>Inbox</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">No new messages.</p>
                </CardContent>
            </Card>
        </div>
    );
}
