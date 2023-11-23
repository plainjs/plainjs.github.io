import presetWind from "https://esm.sh/@unocss/preset-wind@0.57.7";
import presetUno from "https://esm.sh/@unocss/preset-uno@0.57.7";
import presetTypography from "https://esm.sh/@unocss/preset-typography@0.57.7";
import { createGenerator } from "https://esm.sh/@unocss/core@0.57.7";

const uno = createGenerator({
  presets: [presetUno(), presetWind(), presetTypography()],
});

const style = document.querySelector("style#uno");

const container = document.body.parentElement.innerHTML;
const { css } = await uno.generate(container, {
  id: "index.html",
});

style.innerHTML = css;
