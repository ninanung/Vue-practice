# Simple package made by vue-cli  
## For study.  

v-model.html : Write input(text) and h2 tag, when write in input tag, it change h2 same as input value.  
v-for.html : Using v-bind, v-model, v-for, make simple phone book. Can insert new info.  
computed.html : Using computed in vue object, make real time search function.  
watch.html  
watch-fetch.html : Using watch property to make some table. In watch_fetch, use fetch to read json from server.  
!!Notice!! - 'watch' don't need to return, 'computed' need to return.  

v-on.html : Using v-on to control event. When click -> v-on:click or just @click.  
preventDefault.html : Learn how to control event more in detail. In 'a'tag, there's default click event and preventDefault() will block that.  
!!Notice!! - Not only preventDefault(), there's many other details. stopPropagation() will stop event propagation. Even use like this, @click.once.self.prevent.stop="mehodName"   
!!Notice!! - Using with v-on:keyup : .enter, .tab, .delete, .esc, .space, .up, .down, .ctrl, .alt, .shift, .meta and .(keycode number)  