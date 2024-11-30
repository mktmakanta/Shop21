import Products from "../components/ProductCards";

export default function Home() {
  return (
    <main>
      <div className="max-w-7xl mx-auto py-10 px-5  space-y-5">
        <h1 className="text-lg lg:text-2xl "> Latest Products </h1>
        <Products />
      </div>
    </main>
  );
}
