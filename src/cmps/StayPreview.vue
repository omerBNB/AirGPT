<template>
  <pre>{{ stay.name }}</pre>
</template>

<script>
export default {
  name: 'StayPreview',
  props: {
    stay: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  created() {},
  components: {},
}
</script>

<style></style>
