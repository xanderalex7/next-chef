import Card from "@/components/Card";
import Header from "@/components/Header";
import Link from "next/link";
import { getApi } from "../api/api-utils/utils";

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

const recipesPath = "/recipes";
const path = getApi(recipesPath);

export default async function Recipes() {
  const data = await fetch(path);
  const recipes = await data.json();

  return (
    <div>
      <header>
        <Header pathName={recipesPath} />
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center py-5 px-10">
        {recipes.recipes.map((recipe: Recipe) => {
          return (
            <Link key={recipe.id} href={`${recipesPath}/${recipe.id}`}>
              <Card
                title={recipe.name}
                text={recipe.ingredients.join(", ")}
                image={{ src: recipe.image, alt: `${recipe.name} image` }}
              />
            </Link>
          );
        })}
      </main>
    </div>
  );
}
