<template>
  <header>
    <nav>
      <div class="logo_wrapper">
        <h1>
          <router-link to="/"
            >Train<br />
            With<br />
            A Coach</router-link
          >
        </h1>
        <img
          src="../../assets/350flexedbiceps2_100913.png"
          alt="big bicep icon"
        />
      </div>
      <ul>
        <li><router-link to="/coaches">Coaches</router-link></li>
        <li><router-link to="/requests">Requests</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #74c1e8;
  border-radius: 10px;
  margin: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.26);
}

header nav {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

li a {
  text-decoration: none;
  color: #252424;
  font-weight: bold;
}

a.router-link-active {
  text-decoration: underline #f78513 2px;
}

img {
  height: auto;
  width: auto;
  max-width: 60px;
  max-height: 60px;
  position: absolute;
  margin: 1rem 0 0 5rem;
}

h1 {
  margin: 1rem 1rem;
  letter-spacing: 0.1rem;
}

h1 a {
  text-decoration: none;
  color: #252424;
  font-size: 1.3rem;
}

h1 a:hover {
  -webkit-text-fill-color: #fff;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #252424;
}

.logo_wrapper {
  display: flex;
  /* align-items: center; */
}

@media screen and (min-width: 480px) {
  li a {
    font-size: 1.1rem;
    background-color: #fff;
    padding: 1.2rem;
    border-radius: 10px;
    border: 2px solid #fff;
  }

  li {
    margin: 0 1rem;
  }

  li a:hover {
    border: 2px solid #f78513;
  }

  a.router-link-active {
    text-decoration: none;
    border: 2px solid #f78513;
  }

  h1 a {
    font-size: 1.6rem;
  }
}
</style>
