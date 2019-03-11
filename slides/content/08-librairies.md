Librairies


:::
# Vuex
State management pattern 

Centralized store for all the components

***
Vuex is a state management pattern. 

It serves as a centralized store for all the components in an application. 

:::
## State
Vuex uses a single state tree

This single object contains all your application level state

Serves as the "single source of truth".

``` js
const store = new Vuex.Store({
    state: {
        notes: [
            { id: 1, text: '...' },
            { id: 2, text: '...' }
        ]
    }
})
```

:::
## Getters
Compute derived state based on store state

***
Sometimes we may need to compute derived state based on store state.

``` js
const store = new Vuex.Store({
    state: {
        notes: [
            { id: 1, text: '...' },
            { id: 2, text: '...' }
        ]
    },
    getters: {
        noteNumber: state => {
            return state.notes.length
        }
    }
})
```

:::
## Mutations
The only way to actually change state

***
The only way to actually change state in a Vuex store is by committing a mutation.

``` js 
const store = new Vuex.Store({
    state: {
        count: 1
    },
    mutations: {
        increment (state) {
            // mutate state
            state.count++
        }
    }
})
```

:::
## Actions
Similar to mutations, but:
 - Instead of mutating the state, actions commit mutations.
 - Actions can contain arbitrary asynchronous operations.

***
Actions are similar to mutations, the differences being that:
 - Instead of mutating the state, actions commit mutations.
 - Actions can contain arbitrary asynchronous operations.

 ``` js
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    actions: {
        increment (context) {
            context.commit('increment')
        }
    }
})
```

:::
## Modules
Due to using a single state tree, all state of our application is contained inside one big object

``` js
const moduleA = {
    state: { ... },
    mutations: { ... },
    actions: { ... },
    getters: { ... }
}

const moduleB = {
    state: { ... },
    mutations: { ... },
    actions: { ... }
}

const store = new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB
    }
})

store.state.a // -> `moduleA`'s state
store.state.b // -> `moduleB`'s state
```


