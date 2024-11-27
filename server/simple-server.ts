

import { serve } from "https://deno.land/std/http/server.ts";

const handler = (request: Request): Response => {
  return new Response("Hello World\n", { status: 200 });
};

const port = 8000;
console.log(`HTTP webserver running. Access it at: http://localhost:${port}/`);
serve(handler, { port });

/**

# Explicación del código

1- serve acepta el handler eque es una función que recibe un Reuest y devuelve un Response


*/
