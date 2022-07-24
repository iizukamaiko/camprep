<template>
  <v-btn
		depressed
		color=#E4CC49
		:to="url">
		{{ text }}
	</v-btn>
</template>

<style lang="scss" scoped>
v-btn {
  background-color: $yellow;
	text-align: center;
}
</style>

<script lang="ts">
export default ({
	props: {
		text: {
      type: String,
      required: true
    },
    url: {
      type: String
    }
	}
})
</script>
