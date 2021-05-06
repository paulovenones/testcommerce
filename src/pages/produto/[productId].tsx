import { GetStaticPaths, GetStaticProps } from "next";
import axios from "../../axios";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const productId = context.params.productId;

  const response = await axios.get(`api/getProductById/${productId}`);

  const productData = await response.data;

  console.log(productData);

  return {
    props: {
      product: productData,
    },
  };
};

export default function Produto({ product }) {
  return (
    <div>
      <h1>
        Produto {product.name} - id: {product.id}
      </h1>
    </div>
  );
}
