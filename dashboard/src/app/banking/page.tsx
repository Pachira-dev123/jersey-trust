import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { ArrowUpRight, ArrowDownLeft, Building2, CreditCard, Wallet } from "lucide-react";

const transactions = [
    {
        id: "TX-9823",
        description: "Payment from Client A",
        date: "Today, 10:23 AM",
        amount: "+$12,500.00",
        type: "incoming",
        status: "Completed",
    },
    {
        id: "TX-9822",
        description: "Server Hosting Fees",
        date: "Yesterday, 2:15 PM",
        amount: "-$250.00",
        type: "outgoing",
        status: "Completed",
    },
    {
        id: "TX-9821",
        description: "Consulting Services",
        date: "Nov 16, 2024",
        amount: "+$4,200.00",
        type: "incoming",
        status: "Completed",
    },
    {
        id: "TX-9820",
        description: "Office Rent - Nov",
        date: "Nov 01, 2024",
        amount: "-$3,500.00",
        type: "outgoing",
        status: "Completed",
    },
    {
        id: "TX-9819",
        description: "Software Licenses",
        date: "Oct 28, 2024",
        amount: "-$899.00",
        type: "outgoing",
        status: "Completed",
    },
];

export default function BankingPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Banking</h2>
                <div className="flex space-x-2">
                    <button className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground">
                        Download Statement
                    </button>
                    <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">
                        Make Transfer
                    </button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                        <Wallet className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$142,384.21</div>
                        <p className="text-xs text-muted-foreground">
                            Available for withdrawal
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Income (MTD)</CardTitle>
                        <ArrowUpRight className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$45,231.89</div>
                        <p className="text-xs text-muted-foreground">
                            +20.1% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Expenses (MTD)</CardTitle>
                        <ArrowDownLeft className="h-4 w-4 text-red-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$12,405.00</div>
                        <p className="text-xs text-muted-foreground">
                            -4.3% from last month
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Recent Transactions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {transactions.map((tx) => (
                                <div
                                    key={tx.id}
                                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${tx.type === 'incoming' ? 'bg-green-100' : 'bg-red-100'}`}>
                                            {tx.type === 'incoming' ? (
                                                <ArrowUpRight className="h-5 w-5 text-green-600" />
                                            ) : (
                                                <ArrowDownLeft className="h-5 w-5 text-red-600" />
                                            )}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium leading-none">{tx.description}</p>
                                            <p className="text-xs text-muted-foreground mt-1">{tx.date}</p>
                                        </div>
                                    </div>
                                    <div className={`text-sm font-medium ${tx.type === 'incoming' ? 'text-green-600' : 'text-red-600'}`}>
                                        {tx.amount}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>My Cards</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-700 p-4 text-white shadow-lg">
                                <div className="flex justify-between">
                                    <Building2 className="h-6 w-6" />
                                    <span className="font-mono text-lg font-bold">VISA</span>
                                </div>
                                <div className="mt-4">
                                    <p className="text-xs text-zinc-300">Card Number</p>
                                    <p className="font-mono text-lg tracking-widest">**** **** **** 4242</p>
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <p className="text-xs text-zinc-300">Card Holder</p>
                                        <p className="text-sm font-medium">John Doe</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-300">Expires</p>
                                        <p className="text-sm font-medium">12/28</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between rounded-lg border p-3">
                                <div className="flex items-center space-x-3">
                                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                                    <span className="text-sm font-medium">Corporate Expense Card</span>
                                </div>
                                <span className="text-xs text-muted-foreground">Active</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
