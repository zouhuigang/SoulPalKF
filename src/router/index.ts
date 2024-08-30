import { createRouter, createWebHistory, RouterView } from "vue-router"


const coreRoutes = [
    {
        path: "/",
        component: () => import("../views/welcome/index.vue"),
        children: [
            {
                name: "test_1",
                path: "knowledge",
                component: () => import("../views/knowledge/index.vue"),
                meta: {
                // title: '对话'
                }
            }
        ]
    },
    {
        path: "/service",
        component: () => import("../views/knowledge/index.vue")
    }
  ]


const router = createRouter({
    history: createWebHistory(),
    routes: [
      ...coreRoutes,
    ] as any
  })

router.onError((error, to) => {
    if (
      error.message.includes("Failed to fetch dynamically imported module") ||
      error.message.includes("Importing a module script failed")
    ) {
      if (!to?.fullPath) {
        window.location.reload()
      } else {
        window.location.href = to.fullPath
      }
    }
  })
  
export default router