export const AuthCardContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="grid min-h-svh lg:grid-cols-2">{children}</div>;
};

export const AuthCardContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-4 p-6 md:p-10">
      <div className="flex justify-center gap-2 md:justify-start">
        <div className="flex h-screen w-screen items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export const CoverImage = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative hidden lg:block">{children}</div>;
};
