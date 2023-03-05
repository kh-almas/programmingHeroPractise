function checkAge(){
    const ageField = document.getElementById('age');
    const ageValue = ageField.value;
    const errorTag = document.getElementById('error');
    try {
         const age = parseInt(ageValue);
         if (isNaN(age))
         {
             throw "Enter a number";
         }

         if(age < 18 || age > 35)
         {
             throw "not allowed";
         }
        errorTag.innerText = '';
    }catch (e){
        errorTag.innerText = 'Error: ' + e;
    }finally {
        console.log('all done');
    }
    console.log('111');
}