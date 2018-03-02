// Default export
export default () => {
    console.log('Hi from the default export!');
  };
  
  // Named export `doStuff`
  export const doStuff = () => {
    console.log('Doing stuff…');
  };


  export async function heloo(){
    try {
      const a = await dosomething();
      //console.log(a())
    }
    catch(e){
      console.log(e)
    }
  }

  const bye =  async()=>{
    console.log("bye")
  }

  const dosomething =()=>{
    console.log("dosomething")
  }
  export {bye,dosomething}