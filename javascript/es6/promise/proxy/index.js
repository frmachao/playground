
const persistenceList = ['pageSize', 'innerHideColumns', 'sortDirection', 'sortBy'];
const obj= new Proxy({},{
    get:(target, property)=>{
        console.log(' get property',property)
    },
    set:(target,property,value)=>{
        console.log('set property',property,persistenceList.includes(property))
        console.log('set value',value)
    }
})
console.log(obj.name)
console.log('=======')
obj.innerHideColumn=111



