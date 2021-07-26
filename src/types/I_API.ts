export namespace I_API {
  export interface I_ByKeyword {
    context: {} | any;
    params: {
      meals: string;
    };
  }

  export interface I_Results {
    idMeal: any;
    strMealThumb: string;
    strMeal: string;
  }

  export interface I_Data {
    idMeal?: string;
    strYoutube?: string;

    strInstructions?: string;

    strSource?: string;
    data?: {
      idMeal?: string;
      strTags?: string;
      strInstructions?: string;
      strIngredient1?: string;
      strIngredient2?: string;
      strIngredient3?: string;
      strIngredient4?: string;
      strIngredient5?: string;
      strIngredient6?: string;
      strIngredient7?: string;
      strIngredient8?: string;
      strIngredient9?: string;
      strIngredient10?: string;
    };
  }
}
