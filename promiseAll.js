const posts = [
    {title: 'Post One',
     createdAt: new Date()
    },
    {title: 'Post Two', 
     createdAt: new Date()
    }
];
const user=[{username:'Supriya',lastActivityTime: new Date()}];

const updateLastUserActivityTime =new Promise((resolve,reject)=>{
    setTimeout(()=>{
       const error=false;
       if(!error){
            user.lastActivityTime=new Date()
            console.log('User Last activity Time:'+ user.lastActivityTime);
        resolve();
       }else{
        reject('Error in updating last seen')
       }
    },1000);
 });


const CreatePost=new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log('After creating Post>>>>>>>')
        posts.push({title:'New Post',createdAt:new Date()});
        const error=false;
        if(!error){
            resolve();
        }else{
            reject('Error:In Create Post')
        }
        },2000);
    });

const getPost= new Promise((resolve,reject)=>{
    setTimeout(()=>{
   posts.forEach((post)=>{
    console.log(post)
   })
   const error=false;
   if(!error){
       resolve();
   }else{
       reject('Error in getting post')
   }
},2000);
});

const deletePost=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(posts.length >0){
        console.log('Deleting Post')
        resolve(posts.pop());
      }else{
        reject('Array is Empty')
      }
    },2000);
});

    user.forEach((user1)=>{ 
        console.log('Before Creating Post Last seen of User:'+user1.lastActivityTime);
    });

// CreatePost()
// .then(getPost)
// .then(updateLastUserActivityTime)
// .then(deletePost)
// .then(getPost)
// .catch(err=>console.log(err))

Promise.all([CreatePost,getPost,updateLastUserActivityTime,deletePost]).then((res)=>{console.log(res)})
.catch((err)=>console.log(err));