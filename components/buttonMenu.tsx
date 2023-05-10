import Link from "next/link";

interface ButtonMenu {
  title: string;
  url?: string;
  options?: { title: string; url: string }[];
  open?: boolean;
  onHover?: any;
}

export default function ButtonMenu({
  title,
  url,
  options,
  open,
  onHover,
}: ButtonMenu) {
  return (
    <div className="relative text-[16px] text-leemon-purple-dark dark:text-white font-semibold20">
      {url ? (
        <Link
          href={url}
          className={`
          flex items-center justify-center h-[27px] rounded-2xl px-4
          transition ease-in-out duration-100
          hover:bg-gradient-to-r hover:from-leemon-yellow hover:to-leemon-green hover:scale-110 hover:dark:text-leemon-purple-dark2
      `}
          onMouseOver={() => onHover()}
        >
          {title}
        </Link>
      ) : (
        <button
          className={`
          flex items-center justify-center h-[27px] rounded-2xl px-4
          transition ease-in-out duration-100
          hover:bg-gradient-to-r hover:from-leemon-yellow hover:to-leemon-green hover:scale-110 hover:dark:text-leemon-purple-dark2
          ${
            open &&
            "bg-gradient-to-r from-leemon-yellow to-leemon-green dark:text-leemon-purple-dark2"
          }
      `}
          onMouseOver={() => onHover()}
        >
          {title}
        </button>
      )}
      <div
        className={`
          absolute top-[32px] left-0 z-20
          flex flex-col min-w-[182.3px] pt-[15px] pb-[30px] px-[22px] 
          bg-white dark:bg-leemon-purple-dark3 border-[0.5px] 
          border-leemon-purple-dark rounded-[30px] drop-shadow-shape mt-[5px]
          gap-[15px]
          transition ease-out duration-200
          ${open && !url ? "scale-100" : "scale-0"}
        `}
      >
        {options?.map((option, index) => (
          <Link
            key={index}
            href={option.url}
            className="
              flex items-center w-max p-2 h-[32px] rounded-lg 
              hover:bg-leemon-yellow hover:dark:text-leemon-purple-dark2
            "
          >
            {option.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
