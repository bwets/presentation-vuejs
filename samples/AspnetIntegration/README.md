# Create ASP NET Core project

```
mkdir AspnetIntegration
cd .\AspnetIntegration

dotnet new webapp -o AspnetIntegration.Web

cd .\AspnetIntegration.Web
```

# Copy slide example vue code in cshtml

``` html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
  {{ message }}
</div>

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

# Start

```
dotnet build
dotnet run
```
