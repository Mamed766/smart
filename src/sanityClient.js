import { createClient } from "@sanity/client";

console.log("Dataset:", process.env.REACT_APP_SANITY_DATASET);

const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET,
  token: process.env.REACT_APP_SANITY_TOKEN,
  useCdn: false,
});

export default client;
