import BackToHomeButton from '@/components/BackToHomeButton';
import ImageSlideshow from '@/components/images/image-slideshow';

export default function CommunityPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', color: 'white' }}>
      <img
        src="/assets/icons/community.png" 
        alt="Logo"
        style={{ width: '150px', height: '150px', marginBottom: '1rem' }}
      />
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Join Our Community!</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Welcome to the Foodies Community! Here, we share our passion for food. Explore recipes, connect with like-minded
        food lovers, and participate in exclusive events. Join us and bring your taste buds to life!
      </p>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Discover Our Recipes</h2>
        <ImageSlideshow />
      </section>

      <BackToHomeButton />
    </main>
  );
}
