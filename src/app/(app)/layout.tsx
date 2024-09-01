import Header from "@/components/parts/site-header"

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Header />
      <main className="">{children}</main>
    </>
  )
}
