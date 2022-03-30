export const getStaticPaths = async () => {
  const res = await fetch(
    "https://beta.mejorconsalud.com/wp-json/mc/v3/posts?orderby=date&order=desc"
  );
  const resJSON = await res.json();

  const paths = resJSON.data.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
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
