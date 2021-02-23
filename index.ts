import { config } from "https://deno.land/x/dotenv/mod.ts";


const query = `query GetName {
    viewer {
        name
    }
}`;

console.log(config())

fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `bearer ${config().TOKEN}`,
    Accept: 'application/json',
  },
  body: JSON.stringify({
    query
  }),
})
  .then((r) => r.json())
  .then((data) => console.log('data returned:', data));

