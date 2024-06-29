import { ThemeProvider } from "@/components/parts/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Data engineer",
    "AI engineer",
    "Sacha Choumiloff",
    "Sacha Choumiloff portfolio",
    "portfolio",
    "portfolio-Sacha Choumiloff",
    "portfolio-Sacha Choumiloff portfolio",
    "paragliding",
    "credit agricole",
    "cacb",
    "cacb-banque",
    "La forge",
    "La forge AI",
    "La forge CACB",
    "Enedis",
    "alpes française",
    "mountains",
    "alpinisme",
    "ski",
    "paragliding",
    "hiking",
    "climbing",
    "mountaineering",
  ],
  authors: [
    {
      name: "SChoumiloff",
      url: "https://dataelevation.dev",
    },
  ],
  creator: "SChoumiloff",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@SachaChoumiloff",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head></head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div vaul-drawer-wrapper="">
              <div className="relative flex min-h-screen flex-col bg-background">
                {children}
              </div>
            </div>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
