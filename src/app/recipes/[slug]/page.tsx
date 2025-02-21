import { getApi } from "@/app/api/api-utils/utils";
import Link from "next/link";

interface RecipeProps {
  params: Promise<{ slug: string }>;
}

const recipesPath = "/recipes";
const path = getApi(recipesPath);

export default async function Recipe({ params }: RecipeProps) {
  const slug = (await params).slug;
  const data = await fetch(`${path}/${slug}`);
  const recipe = await data.json();

  return (
    <div className="flex justify-center p-8">
      <div className="max-w-4xl overflow-hidden shadow-lg bg-teal-600 p-5 rounded">
        <Link href="/recipes">
          <h3 className="text-teal-600 mb-3 font-bold border bg-teal-100 border-teal-600 rounded p-2">
            {"< back to recipes"}
          </h3>
        </Link>
        <div className="flex flex-col sm:items-center items-start sm:w-full sm:h-auto">
          <div className="font-bold text-xl mb-2">{recipe.name}</div>
          <img
            className="w-auto lg:max-w-lg rounded"
            src={recipe.image}
            alt={recipe.name}
          />
        </div>
        <div className="py-4">
          <p className="text-teal-100 text-base">Ingredients:</p>
          <p>{recipe.ingredients.join(", ")}</p>
        </div>
        <div className="py-4">
          <p className="text-teal-100 text-base">Difficulty:</p>
          <p>{recipe.difficulty}</p>
        </div>
        <div className="py-4">
          <p className="text-teal-100 text-base">Calories:</p>
          <p>{recipe.caloriesPerServing}</p>
        </div>
        <div className="py-4">
          <p className="text-teal-100 text-base">instructions:</p>
          {recipe.instructions.map((step: string) => {
            return <p key={step}>{`- ${step}`}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
