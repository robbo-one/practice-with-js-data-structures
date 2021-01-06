function getPropTypes (obj) {
   const eagle = (Object.values(obj))
   const vulture = []

   for (i = 0; i < eagle.length; i++) {
    const sparrow = typeof(eagle[i]);
    vulture.push(sparrow)
   }

    return vulture;

}

module.exports = getPropTypes