import Link from "next/link";
import Image from "next/image";

interface Banner {
  href: string;
  src: string;
  visible?: boolean;
}
export default function Banner({ href, src, visible = false }: Banner) {
  return (
    <div
      className={`${
        visible ? "flex" : "hidden"
      } flex-col w-full self-center px-4 lg:px-0`}
      // className={`hidden ${
      //   visible ? "xl:flex" : "xl:hidden"
      // } flex-col w-full max-w-[1067.06px] min-h-[284.28px] self-center relative`}
    >
      <Link href={href}>
        <Image src={src} alt={href} width={1067.06} height={284.28} />
      </Link>
    </div>
  );
}
