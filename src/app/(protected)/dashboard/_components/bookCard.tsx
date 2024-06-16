import Image from "next/image";
import Link from "next/link";
import { truncate } from "~/lib/utils";

interface BookCardProps {
  image: string;
  author: string;
  title: string;
}

function BookCard({ image, author, title }: BookCardProps) {
  return (
    <Link href="/">
      <div className="flex w-[145px] flex-col items-center">
        <Image alt="" width={145} height={96} src={image} />
        <p className="pt-4">{truncate(author)}</p>
        <p className="overflow-ellipsis text-center text-lg font-semibold leading-tight">
          {truncate(title)}
        </p>
      </div>
    </Link>
  );
}

export default BookCard;
