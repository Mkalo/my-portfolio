export interface IAwartItemProps {
  name: string;
  year: number;
}
const AwardItem = ({ name, year }: IAwartItemProps) => {
  return (
    <article className="relative w-full">
      <header className="flex w-full flex-col">
        <div className="flex h-fit flex-shrink-0 items-center text-xs text-zinc-500 dark:text-zinc-400">
          {year}
        </div>
        <h3 className="pt-[6px] text-base font-semibold">{name}</h3>
      </header>
    </article>
  );
};

export default AwardItem;
