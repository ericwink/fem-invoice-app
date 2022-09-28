<div class="background" />

<style>
  @media (min-width: 600px) {
    .background {
      width: 100vw;
      /* height is full height of viewport minus the navbar */
      height: calc(100vh - 72px);
      background-color: black;
      opacity: 50%;
      position: absolute;
      z-index: 0;
      top: 72px;
      left: 0;
    }
  }

  @media (min-width: 950px) {
    .background {
      top: 0;
      height: 100%;
    }
  }
</style>
