class FamilyTree {
  constructor (value) {
    this.value = value;
    this.children = [];
    if(!this.value || typeof this.value !== 'string'){
      throw('');
    }
  }
  insert(child){
    this.children.push(child);
  }
  familySize(){

  }
  findMember(){

  }
  log(){

  }
}

module.exports = FamilyTree;
