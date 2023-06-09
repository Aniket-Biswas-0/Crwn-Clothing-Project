import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
	height: 100vh;
	margin: 0;
	font-family: 'Carter One' 'Tilt Warp', 'Michroma', 'Genos', 'Pacifico';
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background: rgb(86, 237, 5);
	background: radial-gradient(circle, rgba(86, 237, 5, 1) -10%, rgba(5, 83, 135, 1) 42%, rgba(1, 33, 40, 1) 80%);
	scrollbar-width: none;

	&::-webkit-scrollbar {
		width: 0em;
	  }
	&::-webkit-scrollbar-thumb {
		background-color: transparent;
	  }
  }

  code {
	font-family: 'Tilt Warp', 'Michroma', 'Genos', 'Pacifico', source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
	  monospace;
  }

  a {
	text-decoration: none;
	color: rgb(255, 255, 255);
  }

  span {
	color: rgb(255, 255, 255);
  }

  * {
  box-sizing: border-box;
}
`;
