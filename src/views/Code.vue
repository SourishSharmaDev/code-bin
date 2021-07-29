<template>
  <div class="home">
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a
              target="_blank"
              href="https://github.com/SourishSharmaDev/code-bin"
              >Github</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <div class="container center-align">
      <h1>Code Bin</h1>

      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <textarea
                id="textarea1"
                class="materialize-textarea"
                data-length="120"
                v-model="code"
              ></textarea>
              <label for="textarea1">Type stuff here</label>
            </div>
          </div>
        </form>
      </div>
      <div v-html="markdown()"></div>
    </div>
  </div>
</template>

<script>
import highlight from "highlight.js";
import "highlight.js/styles/night-owl.css";
export default {
  setup() {
    const code = ref("");
    const markdown = () => {
      return marked(code.value, {
        highlight(md) {
          return highlight.highlightAuto(md).value;
        },
      });
    };

    watch(code.value, () => {
      markdown();
    });

    return { code, markdown };
  },
};
</script>

<style>
pre {
  background: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 5px;
  box-shadow: 2px 1px 1px grey;
}
</style>
