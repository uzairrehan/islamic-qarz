import UserNavbar from "@/components/UserNavbar";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <UserNavbar />
      <div className="h-16 bg-[#081b33]" />
      {children}
    </>
  );
}
