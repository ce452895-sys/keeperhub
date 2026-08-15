"use client";

import { useState } from "react";

const steps = [
  {
    number: "1",
    title: "Connect your wallet",
    description:
      "Connect a wallet or sign in to your KeeperHub organization to get started.",
  },
  {
    number: "2",
    title: "Choose a network",
    description:
      "Start with a testnet while you're learning. You can switch networks later.",
  },
  {
    number: "3",
    title: "Create your first workflow",
    description:
      "Describe what you want to automate, then review the generated workflow before running it.",
  },
  {
    number: "4",
    title: "Run and verify",
    description:
      "Execute the workflow and review its execution status and transaction details.",
  },
];

export function FirstWorkflowGuide() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return (
      <button
        type="button"
        onClick={() => setDismissed(false)}
        className="rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-accent"
      >
        Show getting started
      </button>
    );
  }

  return (
    <section
      aria-labelledby="first-workflow-guide"
      className="rounded-2xl border border-border bg-card shadow-sm"
    >
      <div className="flex items-start justify-between gap-4 border-b border-border p-5">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Getting started
          </p>

          <h2
            id="first-workflow-guide"
            className="text-xl font-semibold tracking-tight"
          >
            Build your first workflow
          </h2>

          <p className="mt-1 max-w-xl text-sm text-muted-foreground">
            Follow these four steps to go from your first connection to a
            verified workflow execution.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss getting started guide"
          className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>

      <div className="grid gap-0 sm:grid-cols-2">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={[
              "p-5",
              index % 2 === 0 ? "sm:border-r" : "",
              index < 2 ? "border-b" : "",
              "border-border",
            ].join(" ")}
          >
            <div className="flex gap-4">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                {step.number}
              </div>

              <div>
                <h3 className="font-medium">{step.title}</h3>

                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 border-t border-border bg-muted/30 px-5 py-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <span className="text-muted-foreground">
          New to automation? Start with a testnet workflow.
        </span>

        <span className="font-medium text-foreground">
          You stay in control of execution.
        </span>
      </div>
    </section>
  );
}
