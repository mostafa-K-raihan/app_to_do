<template>
    <div class="apps">
        <div class="app_card">
            <h3 class="app_title"> App Title</h3>
            <p class="app_description">Lorem ipsum doler amet Lorem ipsum doler amet Lorem ipsum doler amet 
                Lorem ipsum doler amet Lorem ipsum doler amet Lorem ipsum doler amet Lorem ipsum doler amet Lorem ipsum doler amet 
                Lorem ipsum doler amet Lorem ipsum doler amet Lorem ipsum doler amet Lorem ipsum doler amet Lorem ipsum doler amet 
                Lorem ipsum doler amet Lorem ipsum doler amet Lorem ipsum doler amet Lorem ipsum doler amet Lorem ipsum doler amet 
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "All Apps",
    data(){
        return {

        }
    },
    methods: {

    }
}
</script>
<style scoped>

.apps {
    /* display: grid; */
    /* width: 100vw; */
    box-sizing: border-box;
    display: grid;
    grid-template-columns: .5fr;
    grid-template-rows: auto;
    grid-gap: 1rem;
    justify-content: center;
    
    
}

.app_card {
    background: #236788;
    height: 20vh;
    padding: 1.2rem; 
    margin: .5rem;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    border-radius: 1.125rem;
    box-shadow: 0.2rem .2rem 10px #334554;


}

.app_title, .app_description {
    color: #abbccd;
    filter: brightness(230%);
}
.app_title{
    font-weight: bold;
    text-transform: uppercase;
}
</style>