export const GET = (request: Request) => {
    const url = new URL(request.url);
    return new Response(`Hello! Request URL: ${url.href}`);
};