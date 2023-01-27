import AlertBanner from 'components/Blog/AlertBanner';

export default function BlogLayout({
  preview,
  loading,
  children,
}: {
  preview: boolean;
  loading?: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="lg:container lg:mx-auto min-h-screen flex flex-col items-center">
        <AlertBanner preview={preview} loading={loading} />
        <header className="text-center m-4">
          <h1 className="font-['Dancing_Script'] mt-2 mb-4 text-3xl lg:text-4xl font-bold">
            Fresh Beginnings Blog
          </h1>
        </header>
        {/* <div className="border border-blue-500 w-full">
        Filter and search bar here
      </div> */}
        <section className="container mx-auto px-5">{children}</section>
      </div>
    </>
  );
}
