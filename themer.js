import { html, reactive, watch } from "https://esm.sh/@arrow-js/core";

const THEMER_CONSTANT = "themer";

const state = reactive({
  theme: getSimplifiedTheme(),
});

function getCurrentTheme() {
  const current = localStorage.getItem(THEMER_CONSTANT) || getSystemTheme();
  return current;
}

function setTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem(THEMER_CONSTANT, theme);
}

function getSystemTheme() {
  const darkPref =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
  if (darkPref.matches) {
    return "dark";
  } else {
    return "light";
  }
}

function getSimplifiedTheme() {
  const theme = getCurrentTheme();
  const windowDarkMedia = () =>
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
  if (theme === "default") {
    if (windowDarkMedia().matches) {
      return "dark";
    } else {
      return "light";
    }
  }
  return theme;
}

const toggleTheme = () => {
  const theme = getSimplifiedTheme();
  state.theme = theme === "dark" ? "light" : "dark";
};

watch(() => {
  setTheme(state.theme);
});

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
  let classList = [
    "h-full w-[50%] transition-all delay-75 bg-accent rounded-full flex items-center",
  ]
    .concat(theme === "dark" ? "ml-auto" : "mr-auto")
    .join(" ");
  return html` <div class="${() => classList}"></div> `;
};

toggleButton(toggleButtonContainer);
