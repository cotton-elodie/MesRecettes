
export class Instructions {
    id!: Number;
    instructions!: string;
}

export class Ingredient {
    id!: number;
    quantity!: number;
    unit!: string;
    name!: string;

    public constructor(id: number, quantity: number, unit: string, name: string) {
        this.id = id;
        this.quantity = quantity;
        this.unit = unit;
        this.name = name;
    }
}

export class Recipe {

    id!: number;
    title!: string;
    slug!: string;
    description!: string;
    thumbnail!: string;
    author!: string;
    difficulty!: string;
    ingredients!: Ingredient[];
    instructions!: Instructions[];

}

export class RecipeItem {
    recipe!: Recipe;
}