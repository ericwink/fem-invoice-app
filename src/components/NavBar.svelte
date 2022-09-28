<script>
  import { theme } from "../store";

  // toggle dark/light theme for application
  const toggleTheme = () => {
    theme.update(current => (current === "light" ? (current = "dark") : (current = "light")));
  };
</script>

<nav>
  <div class="logo-box-dark-purple">
    <img class="logo" src="/logo.svg" alt="main logo" />
    <div class="logo-box-pale-purple" />
  </div>
  <button on:click={toggleTheme}>
    {#if $theme === "light"}
      <img src="/icon-moon.svg" alt="moon icon - dark mode" />
    {:else}
      <img src="/icon-sun.svg" alt="moon icon - dark mode" />
    {/if}
  </button>
  <img class="avatar" src="/image-avatar.jpg" alt="user avatar" />
</nav>

<style>
  nav {
    background-color: var(--clr-neutral-500);
    height: 72px;
    display: grid;
    grid-template-columns: 2fr 0.5fr 0.5fr;
    margin-bottom: 2em;
  }
  .logo-box-dark-purple {
    height: 72px;
    width: 72px;
    position: relative;
    z-index: 1;
    background-color: var(--clr-full-purple);
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo-box-pale-purple {
    height: 50%;
    width: 72px;
    background-color: var(--clr-pale-purple);
    position: absolute;
    bottom: 0;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }
  .logo {
    z-index: 2;
    max-width: 28px;
    max-height: 28px;
  }
  .avatar {
    border-radius: 50%;
    max-width: 32px;
    max-height: 32px;
    align-self: center;
    justify-self: center;
  }
  button {
    height: 100%;
    width: 100%;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid var(--clr-neutral-300);
  }

  @media (hover: hover) {
    button:hover {
      cursor: pointer;
    }
  }

  @media (min-width: 900px) {
    nav {
      position: absolute;
      left: 0;
      width: 100px;
      height: 100%;
      grid-template-columns: 1fr;
      grid-template-rows: 2fr 0.3fr 0.3fr;
      z-index: 9999;
    }
    .logo-box-dark-purple {
      width: 100%;
    }

    .logo-box-pale-purple {
      width: 100%;
    }

    .logo {
      width: 40px;
      height: 40px;
    }

    button {
      border-right: none;
      border-bottom: 1px solid var(--clr-neutral-300);
    }
  }
</style>
