import { useRouter } from "next/router";

export const getStaticProps = async (context) => {
  const router = useRouter();
  const { pid } = router.query;

  console.log(router.asPath);
  console.log(router.query.name);

  const id = context.params.id;
  const res = await fetch(
    "https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts/" + id
  );
  const data = await res.json();

  return {
    props: { post: data },
  };
};

const ProductDetail = ({ post }) => {
  return (
    <>
      <div>Product Detail</div>
      <div>Product: {post.id}</div>
      <div>Product: {post.slug}</div>
      <div>Product: {post.link}</div>
      <div>Product: {post.author.name}</div>
    </>
  );
};

export default ProductDetail;
