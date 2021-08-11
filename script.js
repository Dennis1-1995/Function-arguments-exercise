function painting (direction, color){
    console.log('The ' + direction + ' wall has been painted ' + color );
}

painting('north','green');
painting('south-east','blue');
painting(); // Undefined

painting('green','north');

// Single argument:
// 7. what happens if we call the function without an argument?
// Undefined

// Multiple arguments:
// 6. does the order of the arguments matter when calling the function?
// Yes
// 7. what happens if you switch them in the function definition?
// The outcome is not correct.
// 8. what happens if you change the order of the arguments in the function definition and when calling the function?
// The outcome is not correct.