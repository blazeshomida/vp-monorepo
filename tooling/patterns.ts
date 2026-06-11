// Output directories are tool-owned and can be deleted or recreated by commands.
export const outputPatterns = ["dist", ".output", "build", "coverage"];

// Local cache/temp directories are not source inputs.
export const localToolPatterns = [".cache", ".temp", "tmp"];

// Dependency directories are restored by the package manager, not maintained as source.
export const dependencyPatterns = ["node_modules", ".pnpm-store"];

// Generated files are derived from source files. Add package-specific generated
// files here later when the template creates them.
export const generatedPatterns: string[] = [];
