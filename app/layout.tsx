// ==========================================
// FILE: app/layout.tsx
// ==========================================
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import { getPortfolioProfile } from "@/lib/db"
import { ThemeProvider } from "@/components/theme-provider"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

// Generate dynamic metadata from database
export async function generateMetadata(): Promise<Metadata> {
  const profile = await getPortfolioProfile()

  if (!profile) {
    // Fallback metadata if database is unavailable
    return {
      title: "Portfolio website",
      description: "Personal portfolio website",
      generator: "v0.app",
    }
  }

  const siteName = `${profile.name} - ${profile.title}`
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || profile.website_url || "https://gobindapoudel.com.np"
  const ogImage = profile.profile_image_url || "/default-og.jpg"

  return {
    title: {
      default: siteName,
      template: `%s | ${profile.name}`,
    },
    description: profile.bio,
    keywords: ["developer", "designer", "portfolio", profile.title.toLowerCase()],
    authors: [{ name: profile.name, url: siteUrl }],
    creator: profile.name,
    openGraph: {
      title: siteName,
      description: profile.bio,
      type: "website",
      url: siteUrl,
      siteName: profile.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${profile.name} - Portfolio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteName,
      description: profile.bio,
      images: [ogImage],
    },
    generator: "v0.app",
  }
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Fetch profile data for Navbar and Footer
  const profile = await getPortfolioProfile()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} font-sans antialiased`}>
        <ThemeProvider>
          <Navbar profile={profile} />
          <main>{children}</main>
          <Footer profile={profile} />
        </ThemeProvider>
      </body>
    </html>
  )
}