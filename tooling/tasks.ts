import type { UserConfig } from "vite-plus";

import {
  dependencyPatterns,
  generatedPatterns,
  localToolPatterns,
  outputPatterns,
} from "./patterns";

type Tasks = NonNullable<NonNullable<UserConfig["run"]>["tasks"]>;
type TaskInput = { auto: true } | string;

function ignoredDirectoryInput(pattern: string): string[] {
  return [`!**/${pattern}`, `!**/${pattern}/**`];
}

function ignoredFileInput(pattern: string): string {
  return `!**/${pattern}`;
}

// Automatic input tracking keeps task cache keys accurate without manually
// listing every source/config file. The exclusions remove dependency, output,
// generated, and local tool paths that can be read and rewritten during a task.
const taskInput = [
  { auto: true },
  ...dependencyPatterns.flatMap(ignoredDirectoryInput),
  ...outputPatterns.flatMap(ignoredDirectoryInput),
  ...localToolPatterns.flatMap(ignoredDirectoryInput),
  ...generatedPatterns.map(ignoredFileInput),
] satisfies TaskInput[];

export const tasks = {
  // Formatting mutates source files, so it should always run instead of using a
  // cached result.
  "task:workspace:fmt": {
    command: "vp fmt",
    cache: false,
  },

  "task:workspace:lint": {
    command: "vp lint",
    input: taskInput,
  },

  // Vite+ check runs formatting, linting, and TypeScript checks together.
  "task:workspace:check": {
    command: "vp check",
    input: taskInput,
  },

  "task:ready": {
    command: ["vp run task:workspace:check"],
  },
} satisfies Tasks;
