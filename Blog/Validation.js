function MyComment(){
    var name=document.myform.fname.value;
    var mail=document.myform.femail.value;
    var comment=document.myform.fcomment.value;
    
    if(name===null || name===""){
        alert("Enter a name");
        return false;
    }

    else if(mail===null || mail===""|| mail===isNaN){
        alert("Enter the mail");
        return false;
    }

    else if(comment===null || comment===""){
        alert("Enter the Comment");
        return false;
    }

    else{
       alert('your comment has been send successfully');
       return true;
    }
}
 export default MyComment;