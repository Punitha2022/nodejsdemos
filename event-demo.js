const  EventEmitter =require('events')
const event=new EventEmitter();
event.on('click',()=>{
    console.log('Click event occurred....')
})

event.emit('click')//triggering the event
