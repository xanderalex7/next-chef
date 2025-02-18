import Header from "@/components/Header";
import { getApi } from "./api/api-utils/utils";

const homePath = "/";
const path = getApi('/quotes/random');

export default async function Home() {
  const data = await fetch(path);
  const quote = await data.json();

  return (
    <div>
      <Header pathName={homePath} />
      <div className="items-center justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col p-8 gap-8 row-start-2 items-center sm:items-start">
          <h1 className="text-2xl font-bold">Are you the next chef?</h1>
          <h1 className="text-lg font-bold">
            Go to recipes and start cooking
          </h1>
          <div>
            <p className="text-teal-400 text-base">{quote.quote}</p>
          </div>
          <div className="flex justify-end w-full">
            <p className="text-teal-400 text-base">{quote.author}</p>
          </div>
        </main>
      </div>
    </div>
  );
}
