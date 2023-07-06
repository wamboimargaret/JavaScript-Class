let userDetails = true;

let promise = new Promise(function(resolve,reject){
    if(userDetails){
        setTimeout (() => {resolve('User details available')}, 5000);
    }
    else{
        setTimeout  (() => {reject('User details available')}, 5000);
    }
});

const getUserDetails = async ()=>{
    let response = await promise;
    console.log({response});
};
getUserDetails()