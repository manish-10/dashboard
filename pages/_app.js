import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="overflow-hidden">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
