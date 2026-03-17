<script setup lang="ts">
const props = defineProps<{
  home:number
  draw:number
  away:number
}>()

function percent(v:number){
  return (v*100).toFixed(0)+"%"
}
</script>

<template>
<div class="density">

  <div class="row">
    <span>Home</span>
    <div class="bar"><div class="fill home" :style="{width:percent(home)}"></div></div>
    <span>{{ percent(home) }}</span>
  </div>

  <div class="row">
    <span>Draw</span>
    <div class="bar"><div class="fill draw" :style="{width:percent(draw)}"></div></div>
    <span>{{ percent(draw) }}</span>
  </div>

  <div class="row">
    <span>Away</span>
    <div class="bar"><div class="fill away" :style="{width:percent(away)}"></div></div>
    <span>{{ percent(away) }}</span>
  </div>

</div>
</template>

<style scoped>

.row{
  display:grid;
  grid-template-columns:60px 1fr 40px;
  gap:8px;
  align-items:center;
}

.bar{
  height:8px;
  background:#eee;
  border-radius:4px;
}

.fill{height:100%;}
.home{background:#16a34a;}
.draw{background:#6b7280;}
.away{background:#2563eb;}

</style>
