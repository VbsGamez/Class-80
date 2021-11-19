student_array=[];
function submit()
{
    var display_student=[];
    for(var j=1; j<=4; j++)
    {
        var student_name=document.getElementById("name_of_the_student_"+j).value;
        student_array.push(student_name);
    }
    var Length_Student_Array=student_array.length;
    for(var k=0; k<Length_Student_Array; k++)
    {
        display_student.push("<h4>"+student_array[k]+"</h4>");
        
    }
    document.getElementById("display_name_with_commas").innerHTML=display_student;

}