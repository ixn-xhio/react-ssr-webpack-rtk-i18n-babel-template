//CORE
import express, { Request, Response } from 'express';
import React from 'react';
import path from "path";
//SEO
import Helmet from "react-helmet";
//SSR
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
//Redux
import { Provider } from 'react-redux';
import store from '../client/services/store';
import { fetchUser } from '../client/services/user';
//MAIN
import Routing from '../client/routing';

const app = express();

app.use(express.static('public'));
app.use("/", express.static(path.join(__dirname, "public")));

app.get('*', async (req: Request, res: Response) => {

  await store.dispatch(fetchUser());
  const helmet = Helmet.renderStatic();
  const preloadedState = store.getState();

  let didError = false;
  
  const { pipe } = renderToPipeableStream(
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <Routing />
        </StaticRouter>
      </Provider>, 
    {
      onShellError(error) {
        res.statusCode = 500;
        res.setHeader('content-type', 'text/html');
        res.send('<h1>Something went wrong</h1>'); 
      },
      onAllReady() {
        res.statusCode = didError ? 500 : 200;
        res.setHeader('content-type', 'text/html');
        res.write(`<!DOCTYPE html`);
        res.write(
        `<html ${helmet.htmlAttributes.toString()}>
          <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
          </head>
        <body>`)
        res.write(`<div id="root">`);
        pipe(res);
        res.write(`</div>`);
        res.write(`<script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g,'\u003c')}
      </script>`)
        res.write(`</body></html>`);
        res.end();
      },
    }
  );
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

