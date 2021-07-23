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
    strCategory: string;
    strMeal: string;
  }
}
