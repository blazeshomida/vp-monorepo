export interface GreetingOptions {
  name: string;
}

export function createGreeting(options: GreetingOptions): string {
  return `Hello, ${options.name}.`;
}
