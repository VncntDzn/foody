export namespace I_ServerSideTypes {
  export interface I_GetServerSideProps {
    context: {} | any;
    params: {
      meals: string;
    };
    mealResults: object;
  }
}
