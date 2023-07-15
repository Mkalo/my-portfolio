interface ITagsContainerProps {
  tags: string[];
}

const TagsContainer = ({ tags }: ITagsContainerProps) => {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-1">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded border border-zinc-300 px-2 py-0.5 text-xs dark:border-zinc-600"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagsContainer;
