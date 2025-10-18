export default async function Page() {
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(4000);
  return <p>Customers Page</p>;
}