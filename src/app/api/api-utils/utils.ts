export function getApi(path: string) {
  return `${process.env.NEXT_PUBLIC_API}${path}`;
}
