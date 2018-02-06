export function repeatClicks(node, count) {
  for (let i = 0; i < count; i++) {
    node.simulate('click')
  }
}

export function delay(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration)
  })
}
