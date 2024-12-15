export default function MealDetail({ params }) {
    const { someName } = params;
  
    return (
      <main>
        <h1>Posiłek: {someName}</h1>
        <p>Wyświetlasz szczegóły dla: {someName}.</p>
      </main>
    );
  }
  
  export async function generateStaticParams() {
    return [
      { someName: 'burger' },
      { someName: 'curry' },
      { someName: 'dumplings' },
      { someName: 'macncheese' },
      { someName: 'pizza' },
      { someName: 'schnitzel' },
      { someName: 'tomato-salad' },
    ];
  }
  