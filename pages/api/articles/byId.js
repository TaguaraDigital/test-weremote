export default async function handler(req, res) {
  try {
    const res = await fetch(
      "https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts/" + id
    );
    const data = await res.json();
    console.log(data);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error });
  }
}
