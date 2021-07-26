import axios from 'axios';
export const getServerSideProps = async (context) => {
  const meal = context.params.meals;
  const res = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
  );
  return {
    props: { mealResults: res.data },
  };
};
