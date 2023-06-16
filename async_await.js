function addWater(){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      res('Water added ')
    },1000)
  })
}
function addSugar(){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      res('Sugar added')
    },1000)
  })
}
function addTeaLeaves(){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      res('Tea leaves added')
    },1000)
  })
}
function addMilk(){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      res('Milk added')
    },1000)
  })
}

async function makeTea(){
  let tea = await addWater()
  console.log(tea)
  tea = await addSugar()
  console.log(tea)
  tea = await addTeaLeaves()
  console.log(tea)
  tea = await addMilk()
  console.log(tea)
  console.log("Tea prepared")
}

makeTea()