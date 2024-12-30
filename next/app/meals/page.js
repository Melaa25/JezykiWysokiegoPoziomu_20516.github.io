import BackToHomeButton from '@/components/BackToHomeButton';
import MealsGrid from '@/components/meals/meals-grid';

const meals = [
  {
    title: 'Juicy Burger',
    slug: 'burger',
    image: '/assets/burger.jpg',
    summary: 'A delicious and juicy burger for any occasion.',
    creator: 'Chef John',
  },
  {
    title: 'Spicy Curry',
    slug: 'curry',
    image: '/assets/curry.jpg',
    summary: 'A flavorful and spicy curry to warm your soul.',
    creator: 'Chef Anne',
  },
  {
    title: 'Tasty Dumplings',
    slug: 'dumplings',
    image: '/assets/dumplings.jpg',
    summary: 'Steamed dumplings filled with rich flavor.',
    creator: 'Chef Mei',
  },
  {
    title:'Pizza',
    slug: 'pizza',
    image: '/assets/pizza.jpg',
    summary: 'Test',
    creator: 'Chef Jin',
  },
];

export default function MealsPage() {
  return (
    <main>
      <img
        src="/assets/icons/meal.png" 
        alt="Logo"
        style={{ width: '150px', height: '150px', marginBottom: '1rem' }}
      />
      <h1 style={{ textAlign: 'center', margin: '2rem 0', color: 'white' }}>Our Meals</h1>
      
      <MealsGrid meals={meals} />
      <BackToHomeButton />
    </main>
  );
}
