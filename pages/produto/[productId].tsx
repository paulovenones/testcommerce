import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const productId = context.params.productId;

  const response = await axios.post(
    `http://localhost:3000/api/getProductById/${productId}`
  );

  const productData = response.data;

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
      <h1>Produto {product.name}</h1>
    </div>
  );
}
