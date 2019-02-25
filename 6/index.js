module.exports =(command)=> {
    let contact= {name:''};
    let arr = [];
    let contacts=[];
    const regex = /((?:[A-Z]|_)+)(?: )?([A-Za-z]+)?(?::)?(?: )?((?:\d|-)+)?(,(?:\d+|-)+)*/gm;
    let msg = {
        name: '',
        person: '',
        phone: '',
        anotherPhone: ''
    };
    let m;

    while ((m = regex.exec(command)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        if (m[1]==='ADD'){
            contact.phone = [];
            contact.name=m[2];
            contact.phone.push(m[3]);
            msg.name= m[1];
            msg.person= m[2];
            msg.phone = m[3];
            if (m[4]!==undefined) {
                msg.anotherPhone = m[4];
                contact.phone.push(m[4].slice(1))
            }
            arr.push(msg);
        }
        if (m[1]==='REMOVE_PHONE'){
            msg.name= m[1];
            msg.phone = m[3];
            arr.push(msg);
            deleteUser(m[3])
        }
        if (m[1]==='SHOW'){
            msg.name= m[1];
            arr.push(msg);
        }
        // The result can be accessed through the `m`-variable.
    }

    deleteUser = (phone) =>{
        for (let x=0;x<contact.phone.length;x++){
         if (contact.phone[x] === phone){
             contact.name = ''
         }
        }
    };

console.log(contact)
};