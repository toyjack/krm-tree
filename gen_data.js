const fs=require('fs')

var data = fs.readFileSync('ninbu.tsv', 'utf-8')

data=data.split('\n')

let result={
  name:'root',
  children:[]
}

for(let i=0;i<data.length;i++){
  let line= data[i].split('\t')
  let temp={}
  temp.name=line[0]
  temp.children=[]
  if(line[1]=='P'){
    result.children.push(temp)
  }else{
    if(result.children[result.children.length-1]){
      result.children[result.children.length-1].children.push(temp)
    }
    
  }
}
var json = JSON.stringify(result);
console.log(json)