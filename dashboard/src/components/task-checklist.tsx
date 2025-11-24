"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";

interface Task {
    id: string;
    label: string;
    completed: boolean;
}

interface TaskChecklistProps {
    tasks: Task[];
}

export function TaskChecklist({ tasks }: TaskChecklistProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Action Items</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {tasks.map((task) => (
                        <div key={task.id} className="flex items-center space-x-2">
                            <Checkbox id={task.id} checked={task.completed} disabled />
                            <Label
                                htmlFor={task.id}
                                className={task.completed ? "line-through text-muted-foreground" : ""}
                            >
                                {task.label}
                            </Label>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
