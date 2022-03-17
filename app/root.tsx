import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { MetaFunction } from 'remix';
import { createGlobalStyle } from 'styled-components';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Mixing it up',
  viewport: 'width=device-width,initial-scale=1',
});

const GlobalStyle = createGlobalStyle`
  html {
    width: 100vw;
    height: 100vh;
  }
  body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
  }
`;

export default function App() {
  return (
    <html lang="en">
      <GlobalStyle />
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
