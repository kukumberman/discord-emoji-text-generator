export default {
  "singleCharacter": function(target, char) {
    return target.replace("*", char)
  },
  "indexBasedArray": function(target, char) {
    return target[+char]
  },
  "target": function(target, char) {
    return target
  }
}
