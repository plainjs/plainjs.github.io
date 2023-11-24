import { html, reactive } from "https://esm.sh/@arrow-js/core";

import {
    getCurrentTheme,
    init,
    setTheme,
} from "https://esm.sh/@barelyreaper/themer";

const state = reactive({
  theme: getCurrentTheme(),
});

init();

const toggleTheme = () => {
  state.theme = getCurrentTheme();
  setTheme(getCurrentTheme() === "dark" ? "light" : "dark");
};

const toggleButtonContainer = document.createElement("div");
toggleButtonContainer.classList.add("w-full");
toggleButtonContainer.classList.add("flex");
toggleButtonContainer.classList.add("items-center");
document.querySelector("header").append(toggleButtonContainer);

const toggleButton = html`
  <button class="ml-auto">
    <div
      class="h-1 w-[50px] rounded-full bg-light overflow-hidden"
      @click="${() => toggleTheme()}"
    >
      ${() => toggleable(state.theme)}
    </div>
  </button>
`;

const toggleable = (theme) => {
  let classList =
    "h-full w-[50%] transition-all delay-75 bg-accent rounded-full flex items-center ";
  classList += theme === "dark" ? "ml-auto" : "mr-auto";
  return html` <div class="${classList}"></div> `;
};

toggleButton(toggleButtonContainer);
