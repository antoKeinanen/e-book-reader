import BookCarousel from "./_components/bookCarousel";
import NewBookModal from "./_components/newBookModal";

function DashboardPage() {
  return (
    <main>
      <section className="flex justify-end px-8 pt-4">
        <NewBookModal />
      </section>
      <BookCarousel />
      <BookCarousel />
      <BookCarousel />
    </main>
  );
}

export default DashboardPage;
