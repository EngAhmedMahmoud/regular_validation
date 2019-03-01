# Regular Expression
A regular expression is a special text for describing a search pattern. Regular expression written between `/Pattern/`
## Testing 
To test matching between pattern text and pattern follow the structure 
```javascript
function validate(testedString){
    const pattern = /^[a-z]{5,10}$/;
    return pattern.test(testedString);
}
console.log(validate("ahmed")); //output will be true
```