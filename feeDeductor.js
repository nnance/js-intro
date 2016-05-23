var monica = {
  name: 'Monica Geller',
  total: 400,
  deductMontlyFee: function(fee){
     this.total = this.total - fee;
     return this.name + ' remaining balance is '+ this.total;
  }
}

console.log(rachelDeductor()); //"Rachel Green remaining balance is 1300"
