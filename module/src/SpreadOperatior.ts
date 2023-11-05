// spread operatior
// destructaring 





// learn spread operator

const arry1: string[] = ['mominul', 'nahid', 'alamin']

const arry2: string[] = ['Rakibul', 'Fahim', 'brabo']

arry1.push(...arry2)

// how to emplement object spread operatior
const mentors1 = {
    typscript: 'mezba',
    redux: 'mir',
    js: 'jankar'

}
const mentors2 = {
    typscript: 'Fahim',
    redux: 'mir',
    Fs: 'Naimul'

}
const mentorList = {
    ...mentors1,
    ...mentors2
}


//learn rest operator

// const greetFriends = (friends1:string,friend2:string)=>{
//     console.log(friend2,friends1);

// }
const greetFriends = (...friends: string[]) => {
friends.forEach((friend:string)=>console.log('Hi', friend)
);
    
}
greetFriends('mominul','rajibur','sulthandine')


// destructaring

