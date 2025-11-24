import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";

export default function BankingSupportPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Banking Support</h2>
            <Card>
                <CardHeader>
                    <CardTitle>Partner Banks</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Banking partners and application status will appear here.</p>
                </CardContent>
            </Card>
        </div>
    );
}
