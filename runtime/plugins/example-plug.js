
export default defineNitroPlugin((nitro)=>{
    nitro.hooks.hook("rollup:before",()=>{
        console.log("rollup before")
    })

    nitro.hooks.hook("rollup:before",()=>{
        console.log("rollup before")
    })

    nitro.hooks.hook("compiled",()=>{
        console.log("rollup compiled")
    })
})