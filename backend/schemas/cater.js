export default {
    name:'cater',
    title:'Cater',
    type:'document',
    fields:[
        {
            name:'first',
            title:'First Name',
            type:'string'
        },
        {
            name:'last',
            title:'Last Name',
            type:'string'
        },
        {
            name:'email',
            title:'Email',
            type:'string'
        },
        {
            name:'subject',
            title:'Subject',
            type:'string'
        },

        {
            name:'message',
            title:'Message',
            type:'text'
        },
        {
            name:'phone',
            title:'Phone',
            type:'string'
        },
        {
            title: 'date',
            name: 'Date',
            type: 'date'
          },
          {
            title: 'time',
            name: 'Time',
            type: 'date'
          }
    ]
}