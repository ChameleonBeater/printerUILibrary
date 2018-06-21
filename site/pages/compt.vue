<template>
  <div>
    test test
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'compt',
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  };
</script>
