import { Router } from "bun-serve-router";

Bun.serve({
    async fetch(req) {
        const response = await router.match(req);
        if (response) {
            return response
        } else {
            throw new Error("woops!");
        }
    },
    port: 8000
});

const router = new Router();
router.add("GET", "/", (request, params) => {
    return new Response("Hello Bun!");
})

router.add("GET", "/user", (request, params) => {
    let userinfo = {"firstname": "Molly", "lastname": "Feral" }
    return new Response(JSON.stringify(userinfo));
})