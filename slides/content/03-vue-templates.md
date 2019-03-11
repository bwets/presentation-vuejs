Vue - Templates

***
	DC
	Template are HTML-based
	Bind the rendered DOM with the Vue instance's data
	All vue tempaltes can by parsed by HTML parsers
	Multiple ways to include templates in your HTML project


:::
# Inline 
- Just add inline-template attribute
- Rendered on page load
- Separate the template from the component definition

*** 
	DC
	The first one is directly in your HTML page by adding a attribute on the component.
	Vue will use the inner content as a template.
	Permtits to integrate Vue quickly but not recommanded.
	As a best practice, prefer defining templates inside the component 
   
   
:::
# .vue export 

``` html
<template>
  <div>
    <p>{{ firstname }} {{ lastname }}</p>
    <p>{{ fullname }}</p>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        firstname: 'John',
        lastname: 'Doe'
      }
    },
    computed: {
      fullname: function() {
        return this.firstname + ' ' + this.lastname;
      }
    }
  }
</script>
```

:::
# .vue export 

``` js
import ComponentA from './ComponentA'
import ComponentC from './ComponentC'

export default {
  components: {
    ComponentA,
    ComponentC
  },
  // ...
}
```

*** 
LC

Using a module system need to import each component you'd like to use before you locally register it.

	
:::
# .vue Class 

*** 
    GK
	
	
:::
# Interpolation
- Plain text
``` json
{{ variable }}
```
- attribute
``` json
<a v-bind:href="url"> ... </a>
```
- Integration of javascript
``` json
{{ ok ? 'YES' : 'NO' }}
<div v-bind:id="'list-' + id"></div>
```

*** 
    DC
	Display plain text. variable will be replaced by the value of the object. It will also be updated whenever the variable property changes
	v-bind binds element’s href attribute to the value of the expression url. A shorcut is to use only the : (colon)
	
	
:::
# Directives

## Data binding

### One-way

 - {{ note.title }}
 - v-bind:title="noteTitle"

## Two-way

v-model

``` html
<v-text-field v-model="note.title" required></v-text-field>
``` 
:::
## Conditional Rendering
 - v-if 
 - v-else-if 
 - v-else

``` html
<div v-if="notes.length === 0">
  No note found
</div>
<div v-else-if="notes.length === 1">
  One note found 
</div>
<div v-else>
  Few notes found
</div>
```

 - v-show

:::
## List Rendering
v-for
``` html
<div v-for="n in notes" :key="n.title">
    <note-view :note="n" />
</div>
```

index
``` html
<div v-for="(n, index) in notes" :key="index">
    Note {{ index }}: 
    <note-view :note="n" />
</div>
```

:::
## Event Handling
v-on or @
``` html
<note-view :note="n" v-on:remove="remove" @edit="edit" @share="share" />
```

*** 
    LC

	
:::
# Reuse/Mixins

*** 
    GK
	
