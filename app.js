var say_hello = function () {};

window.say_hello();
// avoid declaring this type of function because this is global now with var
// the problem is when we call this function in another module/file then that function with same name will overried this function and we dont want that
