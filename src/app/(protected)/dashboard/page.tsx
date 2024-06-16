import { Button, buttonVariants } from "~/components/ui/button";
import BookCarousel from "./_components/bookCarousel";
import { PlusIcon } from "lucide-react";
import { cn } from "~/lib/utils";

function DashboardPage() {
  return (
    <main>
      <section className="flex justify-end pt-4 px-8">
        <Button className={cn(buttonVariants({size: "lg"}), "gap-2 text-lg font-semibold")}>
          <PlusIcon /> Add Book
        </Button>
      </section>
      <BookCarousel />
      <BookCarousel />
      <BookCarousel />
    </main>
  );
}

export default DashboardPage;
