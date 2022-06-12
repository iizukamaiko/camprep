<template>
  <div class="front-form">
    <label>label</label>
    <input
      type="text">
  </div>
</template>

<style lang="scss">
.front-form {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  min-width: 258px;
  max-width: 360px;
  width: 70%;
  
  label {
    font-size: 0.875em
  }
  input {
    padding: 8px 1em;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 4px;
    box-shadow: 2px 2px $yellow;
    &:focus {
      outline: none;
    }
  }
}
</style>