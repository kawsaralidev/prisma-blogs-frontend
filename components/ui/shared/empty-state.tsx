interface EmptyStateProps {
  title: string;
  description?: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex min-h-[300px] items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">{title}</h2>

        {description && (
          <p className="mt-2 text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}
