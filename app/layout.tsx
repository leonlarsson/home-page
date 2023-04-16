import { Metadata } from "next";
import Script from "next/script";

const pageTitle = "Leon San José Larsson";
const pageDescription = "Landing page for Leon San José Larsson. Includes links to CV and projects.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  icons: "/favicon.ico",
  themeColor: "#cdacff",
  metadataBase: new URL("https://leonlarsson.com"),
  openGraph: {
    type: "website",
    url: "https://leonlarsson.com",
    title: pageTitle,
    description: pageDescription,
    images: "/assets/images/avatar.png"
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription,
    creator: "@mozzyfx",
    images: "/assets/images/avatar.png"
  }
};

export default ({ children }) => {
  return (
    <html lang="en">
      <body className="is-loading">
        <Script src="https://kit.fontawesome.com/7ebec69507.js" />
        <Script strategy="afterInteractive" src="/assets/js/handleLoading.js" />
        {children}
      </body>
    </html>
  );
};
