export default {
  "singleCharacter": function(target, char) {
    return target.replace("*", char)
  },
  "indexBasedArray": function(target, char) {
    return target[+char]
  },
  "space": function(target, char) {
    return " "
  }
}
