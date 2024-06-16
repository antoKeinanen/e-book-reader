import { BookOpenIcon } from "lucide-react";

function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex h-14 items-center border-b border-b-muted px-4 shadow-sm">
        <div className="flex gap-4">
          <BookOpenIcon />
          <p className="text-lg font-bold text-primary">E-Book-Reader</p>
        </div>
      </header>
      {children}
    </>
  );
}

export default ProtectedLayout;
