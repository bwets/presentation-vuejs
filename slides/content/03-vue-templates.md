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

*** 
    LC

	
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

*** 
    LC

	
:::
# Reuse/Mixins

*** 
    GK
	