import { config } from "https://deno.land/x/dotenv/mod.ts";

const logger = (log: any) => {
    console.log('data returned:', log)
}

const query = `query GetName {
    viewer {
       name
    }
}`;

const res = await fetch('https://api.github.com/graphql', {
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

const json = await res.json()

logger(json)

