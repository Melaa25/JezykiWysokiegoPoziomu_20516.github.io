import Image from 'next/image';


export default function MealsPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const meals = [
    { name: 'Burger', src: `${basePath}/images/burger.jpg` },
    { name: 'Curry', src: `${basePath}/images/curry.jpg` },
    { name: 'Dumplings', src: `${basePath}/images/dumplings.jpg` },
    { name: 'Mac and Cheese', src: `${basePath}/images/macncheese.jpg` },
    { name: 'Pizza', src: `${basePath}/images/pizza.jpg` },
    { name: 'Schnitzel', src: `${basePath}/images/schnitzel.jpg` },
    { name: 'Tomato Salad', src: `${basePath}/images/tomato-salad.jpg` },
  ];
  return (
    <main style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Nasze Posiłki</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {meals.map((meal, index) => (
          <div
            key={index}
            style={{
              textAlign: 'center',
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              backgroundColor: '#fff',
            }}
          >
            <Image
              src={meal.image}
              alt={meal.name}
              width={300}
              height={200}
              style={{ objectFit: 'cover' }}
            />
            <h2 style={{ margin: '10px 0', fontSize: '1.2rem' }}>{meal.name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
