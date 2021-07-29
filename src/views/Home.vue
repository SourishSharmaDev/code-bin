<template class="">
  <div class="home">
    <div class="container center-align">
      <h2 class="heading">
        Code <span><b>Bin</b></span>
      </h2>

      <div class="input-field col s6">
        <input id="last_name" type="text" class="validate" />
        <label for="last_name">Add Clip</label>
      </div>

      <div class="column">
        <div class="col s12 m6">
          <div v-for="(clip, index) in clips" :key="index">
            <div class="card blue ">
              <div class="card-content white-text">
                <span class="card-title">{{clip.title}}</span>
                <p>
                  {{clip.descr}}
                </p>
              </div>
              <div class="card-action">
                
                <router-link to="/about" target = "_blank">Open Clip</router-link>
              </div>
            </div>
          </div> 
        </div>
      </div>
      
    </div>
  </div>
</template>

// @ is an alias to /src import { ref, watch } from "vue"; import marked from
'marked';
<script>
import { ref } from 'vue';
export default {
  name: "Home",
  components: {},
  setup() {
    const clips = ref([{title:"Demo Clip", descr:"Here goes the description", content:""},{title:"Demo Clip", descr:"Here goes the description", content:""}]);
    return {clips} 
  },
};
</script>
<style>
body {
  padding: none;
  margin: none;
  box-sizing: border-box;
  background: #0e49b5;
}

.heading {
  color: #54e346;
}
.heading span {
  color: #fffaa4;
}
</style>
