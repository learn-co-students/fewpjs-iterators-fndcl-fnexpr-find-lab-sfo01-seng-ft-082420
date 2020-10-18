const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){

  let winner = record.find(record => record.result === 'W') 
  return !!winner ? winner.year : undefined

}
