<template>
  <div>
    <change-log></change-log>
  </div>
</template>
<script>
  import changeLog from '../../CHANGELOG.md';
  export default {
    name: 'changelog',
    components: {
      changeLog
    }
  };
</script>