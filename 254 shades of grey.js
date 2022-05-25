function shadesOfGrey(n) {
  const shades = []
  
  for (const i = 1; i <= Math.min(n, 254); i++) {
    const grey = ('0' + i.toString(16)).slice(-2)
    shades.push('#' + grey + grey + grey)
  }
  
  return shades
}
