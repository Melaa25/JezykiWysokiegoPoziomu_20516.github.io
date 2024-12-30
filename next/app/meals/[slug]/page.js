'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const mealDetails = {
  burger: {
    title: 'Juicy Burger',
    description: 'A delicious, juicy burger made with fresh ingredients.',
    ingredients: ['Beef patty', 'Cheddar cheese', 'Lettuce', 'Tomato', 'Brioche bun'],
    steps: [
      'Season the beef patty with salt and pepper.',
      'Grill the patty for 3-4 minutes on each side.',
      'Toast the brioche bun and assemble with lettuce, tomato, and cheese.',
      'Serve with fries or your favorite side dish.',
    ],
    image: '/assets/burger.jpg',
  },
  curry: {
    title: 'Spicy Curry',
    description: 'A flavorful and spicy curry made with aromatic spices.',
    ingredients: ['Chicken', 'Coconut milk', 'Curry powder', 'Garlic', 'Ginger', 'Rice'],
    steps: [
      'Heat oil and sauté garlic and ginger.',
      'Add curry powder and chicken, then cook until browned.',
      'Stir in coconut milk and simmer for 20 minutes.',
      'Serve over steamed rice.',
    ],
    image: '/assets/curry.jpg',
  },
  dumplings: {
    title: 'Tasty Dumplings',
    description: 'Steamed dumplings filled with flavorful pork and vegetables.',
    ingredients: ['Ground pork', 'Cabbage', 'Soy sauce', 'Ginger', 'Dumpling wrappers'],
    steps: [
      'Mix pork, cabbage, soy sauce, and ginger in a bowl.',
      'Place a small amount of filling in each dumpling wrapper and seal the edges.',
      'Steam dumplings for 8-10 minutes.',
      'Serve with soy sauce or your favorite dipping sauce.',
    ],
    image: '/assets/dumplings.jpg',
  },
  pizza: {
    title: 'Pizza',
    desription: 'test',
    ingredients: ['test','test'],
    steps:[
      'test',
      'test ',
    ],
    image:'/assets/pizza.jpg',
  },
};

export default function MealDetailPage() {
  const pathname = usePathname();
  const slug = pathname.split('/').pop();
  const meal = mealDetails[slug];

  if (!meal) {
    return (
      <main style={{ padding: '2rem', textAlign: 'center', color: 'white' }}>
        <h1>Meal Not Found</h1>
        <Link
          href="/meals"
          style={{
            textDecoration: 'none',
            backgroundColor: '#ff8a05',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '5px',
            fontSize: '1rem',
            fontWeight: 'bold',
          }}
        >
          Back to Meals
        </Link>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', color: 'white' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>{meal.title}</h1>
      <img
        src={meal.image}
        alt={meal.title}
        style={{
          width: '100%',
          maxWidth: '600px',
          borderRadius: '10px',
          margin: '0 auto',
          display: 'block',
          marginBottom: '1.5rem',
        }}
      />
      <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '2rem' }}>{meal.description}</p>

      {/* Ingredients */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Ingredients</h2>
        <ul style={{ listStyleType: 'circle', paddingLeft: '20px', fontSize: '1rem' }}>
          {meal.ingredients.map((ingredient, index) => (
            <li key={index} style={{ marginBottom: '0.5rem' }}>
              {ingredient}
            </li>
          ))}
        </ul>
      </section>

      {/* Steps */}
      <section>
        <h2 style={{ marginBottom: '1rem' }}>Preparation Steps</h2>
        <ol style={{ paddingLeft: '20px', fontSize: '1rem' }}>
          {meal.steps.map((step, index) => (
            <li key={index} style={{ marginBottom: '1rem' }}>
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Back to Meals button */}
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link
          href="/meals"
          style={{
            textDecoration: 'none',
            backgroundColor: '#0070f3',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '5px',
            fontSize: '1rem',
            fontWeight: 'bold',
          }}
        >
          Back to Meals
        </Link>
      </div>
    </main>
  );
}
