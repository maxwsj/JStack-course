const http = require('http');
// const url = require('url'); // Old node version
const { URL } = require('url'); // New form

const bodyParser = require('./helpers/bodyParser');
const routes = require('./routes');

const server = http.createServer((request, response) => {
   // const parsedUrl = url.parse(request.url, true); // old way
   const parsedUrl = new URL(`http://localhost:3000${request.url}`);

   let { pathname } = parsedUrl;
   let id = null;

   const splitEndpoint = pathname.split('/').filter(Boolean);

   if (splitEndpoint.length > 1) {
      pathname = `/${splitEndpoint[0]}/:id`;
      id = splitEndpoint[1];
   }

   console.log(`Request method: ${request.method} | Endpoint: ${pathname}`);

   const route = routes.find(
      (routeObj) =>
         routeObj.endpoint === pathname && routeObj.method === request.method
   );

   if (route) {
      request.query = Object.fromEntries(parsedUrl.searchParams);
      request.params = { id };

      response.send = (statusCode, body) => {
         response.writeHead(statusCode, { 'content-type': 'text/html' });
         response.end(JSON.stringify(body));
      };

      if (['POST', 'PUT', 'PATCH'].includes(request.method)) {
         bodyParser(request, () => route.handler(request, response));
      } else {
         route.handler(request, response);
      }
   } else {
      response.writeHead(404, { 'content-type': 'text/html' });
      response.end(`Cannot ${request.method} ${pathname}`);
   }
});

server.listen(3000, () =>
   console.log('Server started at http://localhost:3000')
);
