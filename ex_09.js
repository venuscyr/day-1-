let type;
if (typeof input_var === "string") { 
type = "String";
} else if (typeof input_var === "boolean") { 
type = "Boolean";
} else if (Number.isInteger(input_var)){ 
type = "Integer";
}else if (typeof input_var === "number") { 
type = "Float";
}

displayThisText(`variable value is '${input_var}'`);
displayThisText(`the type is '${type}'`);

if (input_var === 42 || input_var === 42) {
displayThisText(" It is the meaning of life");
}
