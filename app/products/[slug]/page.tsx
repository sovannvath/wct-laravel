import { client } from "@/app/lib/sanity";
import ImageGallery from "@/components/ImageGallery";
import { Button } from "@/components/ui/button";
import { ProductPageTypes } from "@/lib/interface";
import { ShoppingBasket, ShoppingCart } from "lucide-react";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
          _id,
            images,
            price,
            name,
            description,
            "slug": slug.current,
            "category": category->name,
            price_id
        }`;

  const data = await client.fetch(query);

  return data;
}

const Product = async ({ params }: { params: { slug: string } }) => {
  const product: ProductPageTypes = await getData(params.slug);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={product.images} />
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-gray-500 mb-2">{product.description}</p>
            <p className="font-bold text-gray-500">
              Category: {product.category}
            </p>
            <p className="font-bold text-gray-500">Price: ${product.price}</p>
            <div className="flex gap-5 ">
              <Button
                className="rounded-lg bg-gray-900 px-4 py-2 text-white"
                id="checkout-button"
                role="link"
              >
                <ShoppingBasket className="mr-4" size={20} />
                Buy Now
              </Button>
              <Button
                className="flex-1 rounded-lg bg-gray-900 px-4 py-2 text-white"
                id="checkout-button"
                role="link"
              >
                <ShoppingCart className="mr-4" size={20} />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
