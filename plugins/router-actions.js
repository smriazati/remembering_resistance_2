export default ({ app: { router, store } }) => {
    router.afterEach((to, from) => {
        // console.log(to.path, from.path)
        if (from.path == '/2') {
            if (store.state.occupation.isFlyoverCompleted) {
                store.commit(`occupation/setFirstVisit`);
            }
        }
    })
  }