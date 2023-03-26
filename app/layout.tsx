import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  themeColor: "#cdacff",
  icons: "/assets/images/icon.ico"
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
