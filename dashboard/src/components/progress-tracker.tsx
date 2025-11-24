"use client";

import { CheckCircle2, Circle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
    id: string;
    name: string;
    status: "completed" | "current" | "upcoming";
}

interface ProgressTrackerProps {
    title: string;
    steps: Step[];
}

export function ProgressTracker({ title, steps }: ProgressTrackerProps) {
    return (
        <div className="space-y-4">
            <h3 className="text-lg font-medium">{title}</h3>
            <div className="relative">
                <div className="absolute left-4 top-0 h-full w-0.5 bg-muted" aria-hidden="true" />
                <ul className="space-y-6">
                    {steps.map((step, stepIdx) => (
                        <li key={step.id} className="relative flex gap-x-4">
                            <div
                                className={cn(
                                    "absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-background",
                                    step.status === "completed"
                                        ? "bg-green-500"
                                        : step.status === "current"
                                            ? "bg-blue-500"
                                            : "bg-muted"
                                )}
                            >
                                {step.status === "completed" ? (
                                    <CheckCircle2 className="h-5 w-5 text-white" aria-hidden="true" />
                                ) : step.status === "current" ? (
                                    <Clock className="h-5 w-5 text-white" aria-hidden="true" />
                                ) : (
                                    <Circle className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                                )}
                            </div>
                            <div className="flex-auto py-0.5 pl-10">
                                <span
                                    className={cn(
                                        "block text-sm font-medium",
                                        step.status === "completed"
                                            ? "text-green-600"
                                            : step.status === "current"
                                                ? "text-blue-600"
                                                : "text-muted-foreground"
                                    )}
                                >
                                    {step.name}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
