import Cooking from 'assets/home/steps/Cooking.jpg';
import Meal from 'assets/home/steps/Meal.jpg';
import Ingredients from 'assets/home/steps/Ingredients.jpg';

const stepsData = [
  {
    id: 1,
    name: 'CHOOSE',
    img: Ingredients,
    content: `Choose from our wide variety of deliciously clean meal plans at
    manageable prices, with options to feed two people or family of four.`,
  },
  {
    id: 2,
    name: 'COOK',
    img: Cooking,
    content: `Our premium ingredients come pre-measured and prepped, saving you
    time. All you have to do is follow easy step by step instructions with
    photos.`,
  },
  {
    id: 3,
    name: 'ENJOY',
    img: Meal,
    content: `Go ahead, pat yourself on the back. You'll be amazed by the tasty,
    restaurant-worthy meal you cooked.`,
  },
];

export default stepsData;
