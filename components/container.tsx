import { ReactElement } from "react";

interface Container {
  extraClass?: string;
  children: ReactElement | ReactElement[];
}

export default function Container({ extraClass, children }: Container) {
  return (
    <div className="flex flex-col w-full h-full">
      <div
        className={`flex w-full h-full xl:w-[1200px] xl:max-w-[1200px] xl:self-center ${
          extraClass ? extraClass : "flex-col"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
