interface ITagsContainerProps {
  tags: string[];
}

const TagsContainer = ({ tags }: ITagsContainerProps) => {
  return (
    <div className="@container">
      <div className="flex w-full flex-wrap gap-x-2 gap-y-1 @md:gap-x-3 @md:gap-y-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-zinc-300 px-2 py-0.5 text-xs @md:text-sm dark:border-zinc-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagsContainer;
