export function coreBuilder(params: { key1: string; key2: number }) {
  console.log("- core builder func executed with params -", params)
  return Math.random() * 100
}
