import { Router, iArgs } from "./practice";
import { render } from "./history-api";

const createRender =
  (content: string) =>
  (...args: iArgs[]) => {
    console.info(`${content} args=${JSON.stringify(args)}`);
    (
      document.getElementById("root") as HTMLElement
    ).innerHTML = `<h2>${content}</h2>`;
  };

const router = Router();

let unsubscribe = router.on(/.*/, createRender("/.*"));

router.on(
  "/",
  () => {
    console.log("home");
  }, // onEnter
  unsubscribe(), // onLeave
  () => {
    unsubscribe = router.on(/.*/, createRender("/.*"));
  } // onBeforeEnter
);

router.on(
  (path) => path === "/contacts",
  createRender("/contacts"),
  console.log("[leaving] /contacts")
);

router.on("/about", createRender("/about"));

router.on("/about/us", createRender("/about/us"));

document.body.addEventListener("click", (event) => {
  if (event.target && !(event.target as HTMLElement).matches("a")) {
    return;
  }
  event.preventDefault();
  const url = (event.target as HTMLElement).getAttribute("href") as string;
  router.go(url);
  unsubscribe();
});

window.addEventListener("popstate", () => {
  render();
});
