
const or = (a, b) => {
a=Boolean(a);
b=Boolean(b);
if (a===false&&b==false)	return false
if (a===true&&b==false)	return true
if (a===false&&b==true)	return true
if (a===true&&b==true)	return true
};

const xor = (a, b) => {
a=Boolean(a);
b=Boolean(b);
if (a===false&&b==false)	return false
if (a===true&&b==false)	return true
if (a===false&&b==true)	return true
if (a===true&&b==true)	return false
};
