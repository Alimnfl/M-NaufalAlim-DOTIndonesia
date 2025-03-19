import ElementCardAuth from "./_component/ElementCardAuth";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full h-screen flex flex-col relative overflow-hidden gap-4 justify-center items-center bg-gradient-to-br from-green-500 via-green-700 to-green-600">
      <ElementCardAuth />
      {children}
    </main>
  );
}
