import Router from "./components/router.js";

function App($container) {
  this.$container = $container;

  new Router($container);
}
export default App;