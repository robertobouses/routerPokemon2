import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //Clase ACTIVA: sirve para que el botón que represente la pantalla en la que estás, se quede marcado
  //linkActiveClass: "active",
  routes: [
    
    {
      path: "/",
      name: "home",
      component: () => import('../views/HomeView.vue')
    },

    {
      path: "/about",
      name: "about",
      component: () => import('../views/AboutView.vue')
    },

    {
      path: "/pokemons",
      name: "pokemons",
      component: () => import('../views/PokemonsView.vue')
    },
    {
      path: "/pokemons/:name",
      name: "poke",
      component: () => import("../views/PokeView.vue")
    },
  
    {
      path: "/favoritos",
      name: "favoritos",
      component: () => import('../views/FavoritosView.vue')
    },


    {//este pad sirve para que si el cliente se equivoca en la URL salga mensaje 404 not found. Ponerlo de último porque debe ir primero buscando la ruta en anteirors
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue")
    },
  
  ]
})

export default router
