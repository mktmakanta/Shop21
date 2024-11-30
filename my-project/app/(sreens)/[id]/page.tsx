import { notFound } from "next/navigation";
import { perfumes } from "@/app/constants/Perfumes";
import ProductDetails from "../../components/ProductDetails";

const ProductPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const product = perfumes.find((product) => product._id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductPage;
