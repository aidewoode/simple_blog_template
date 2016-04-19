<template lang='jade'>
  .loader
</template>
<style>
  .loader {
    position: relative;
    height: 1.33rem;
    width:  1.33rem;

    border-radius: 50%;
    background: linear-gradient(to right, #86c166 10%, #fff 50%);

    margin-left: auto;/* let loader float right */
    animation: load .7s infinite linear;
  }

  .loader:after {
    position: absolute;
    content: '';

    width:  80%;
    height: 80%;

    border-radius: 50%;
    background: #fff;
    margin: auto;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  @keyframes load {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
