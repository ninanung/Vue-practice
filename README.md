# Simple package made by vue-cli  
## HTML form practice  

__v-model.html :__ Write input(text) and h2 tag, when write in input tag, it change h2 same as input value.  
__v-for.html :__ Using v-bind, v-model, v-for, make simple phone book. Can insert new info.  
__computed.html :__ Using computed in vue object, make real time search function.  
__watch.html__  
__watch-fetch.html :__ Using watch property to make some table. In watch_fetch, use fetch to read json from server.  
_!!Notice!!_ - 'watch' don't need to return, 'computed' need to return.  

__v-on.html :__ Using v-on to control event. When click -> v-on:click or just @click.  
__preventDefault.html :__ Learn how to control event more in detail. In 'a'tag, there's default click event and preventDefault() will block that.  
_!!Notice!!_ - Not only preventDefault(), there's many other details. stopPropagation() will stop event propagation. Even use like this, @click.once.self.prevent.stop="mehodName"   
_!!Notice!!_ - Using with v-on:keyup : .enter, .tab, .delete, .esc, .space, .up, .down, .ctrl, .alt, .shift, .meta and .(keycode number)  

__inLineStyle.html :__ Inline style in Vue, make change with method.  
__class.html :__ Change style by v-bind:class. In Vue obj, setting style using checkbox.  
__styleExample.html :__ Make Todo List! with everything i got.  
_!!Notice!!_ - v-model.trim="something" delete whitespace.  

__props.html :__ Practice how to toss props from parent component.  
__propsAndAction.html :__ Practice using props and action in child, parent component. Using fetch for data.  
__todoComponent.html :__ Doing same function with "styleExample.html" but made by Vue component. To make "component to component communication", use '$emit' and '$on'.
_!!Notice!!_ - While coding todolist, i find out that i forgot 'v-bind:class="createdMethod()"'form can control class. It could be usful, so don't forget.  

## Webpack project form practice  
__webpacktest :__ Test file for webpack and package config. Practice how to set webpack and packages.  
__webpacktest2 :__ Made by 'vue-cli'module with 'webpack-simple'package for webpack and vue practice.  Just project file, no contents.  
__component-example :__ Doing same function with "styleExample.html" and "todoComponent.html" but made by single file component.  
_!!Noice!!_ - If each component have same class name, just one style will applied. For prevent this, can use style tag like "<style scoped></style>". But if component have child component, scoped style affect to child. Remember this.  
_!!Notice!!_ - Also, can write style as a module like "<style module></style>", even can use like this "v-bind:class="$style.className"".  
