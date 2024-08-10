import client from "../sanityClient";

const fetchGadgets = async (page = 1, limit = 10) => {
  try {
    const start = (page - 1) * limit;
    const end = start + limit;
    const query = `{
        "gadgets": *[_type == "gadget" && _id in path("drafts.**") == false] | order(_createdAt desc) [${start}...${end}],
        "total": count(*[_type == "gadget" && _id in path("drafts.**") == false])
      }`;
    const result = await client.fetch(query);
    return result;
  } catch (error) {
    console.error("Fetch failed:", error.message);
    return { gadgets: [], total: 0 };
  }
};

export default fetchGadgets;
