const app = Vue.createApp({
    data(){
        return{
            cards:[
                {
                    title:"Vue",
                    link:{
                        url: "https://vuejs.org",
                        src: "https://vuejs.org/images/logo.png"
                    },
                    text: "Framework completo basado en componentes para Interfaz de Usuario. Incluye la mayoría de funcionalidades base. Es la más común en compañía startup."
                },
                {
                    title:"React",
                    link:{
                        url: "https://reactjs.org",
                        src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" 
                    },
                    text: "Libreria ligera basada en componentes para interfaz de usuario. Desarrollada por Facebook, las features debes ser agregadas a través de paquetes"
                },
                {
                    title:"Angular",
                    link:{
                        url: "https://angular.io",
                        src: "https://angular.io/assets/images/logos/angular/angular.png"
                    },
                    text: "Framework completo basado en componentes para Interfaz de Usuario. Codificado con TypeScript. Incluye de base features para proyectos muy grandes."
                }
            ]
        }
    }
})

app.component("cards-component",{
    props:["title", "link", "text"],
    template:`
    <div class="card">
        <h2>{{title}}</h2>

        <img v-bind:src="link.src"/>

        <p>{{text}}</p>

        <a :href="link.url">
            <button>
                {{title}} website
            </button>
        </a>
    </div>
    `
})

app.mount("#cards-div")
