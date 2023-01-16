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
        <h2 className="lg:text-1xl md:text-xl mt-6">Fresh Beginnings</h2>
        <h1 className="font-['Dancing_Script'] mt-2 mb-4 text-3xl lg:text-4xl font-bold">
          The Blog
        </h1>
        {/* <div className="border border-blue-500 w-full">
        Filter and search bar here
      </div> */}
        <section>{children}</section>
      </div>
    </>
  );
}
