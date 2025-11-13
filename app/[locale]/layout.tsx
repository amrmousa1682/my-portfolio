
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Cairo } from "next/font/google";
import { AnimatedBackground } from "../../components/AnimatedBackground";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";
import { notFound } from 'next/navigation';
import { routing } from "@/i18n/routing";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "arabic"],
  display: "swap",
  weight: ["400", "500", "700"], // optional: choose what you need
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  
  return (
    <html lang={locale}>
      <body className={`${cairo.variable} font-sans antialiased`}>
        <NextIntlClientProvider>
          <div className={`min-h-screen relative overflow-hidden`}>
            <AnimatedBackground />
            <LanguageSwitcher />
            <div className="relative z-10">{children}</div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
