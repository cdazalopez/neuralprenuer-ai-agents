interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

const PageHeader = ({ title, subtitle, description }: PageHeaderProps) => {
  return (
    <header className="pt-32 pb-16 bg-gradient-hero">
      <div className="container mx-auto px-6 text-center">
        {subtitle && (
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-neural bg-clip-text text-transparent">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
