class FamilyTree {
  constructor (value) {
    this.value = value;
    this.children = [];
    if(!this.value || typeof this.value !== 'string'){
      throw('');
    }
  }
  insert(child){
    child = new FamilyTree(child);
    this.children.push(child);

  }
  familySize(){
    let valueSize = 0;
    if(this.value){
      valueSize = 1;
    }
    return valueSize + this.children.length;
  }
  findMember(name){
    for(let index = 0; index < this.children.length; index++){
      if(this.children[index].value === name) return this.children[index];
    }
  }

  log(){
    let returnedLog = '';
    if(this.value){
      returnedLog = `-- ${this.value}\n`;
     }
    for(let index = 0; index < this.children.length; index++){
      if(this.children[index].value){
        returnedLog += `---- ${this.children[index].value}\n`;
      }
      for(let secindex = 0; secindex < this.children[index].children.length; secindex++){
        if(this.children[index].children[secindex])
        returnedLog += `------ ${this.children[index].children[secindex].value}\n`;
      }
    }
     return returnedLog;
  }
}

module.exports = FamilyTree;
