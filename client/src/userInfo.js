export const userInfo = () => {

    const userName = localStorage.getItem('user');
    if(userName){
        return true; 
    }
    else{
        return false;
    }

}