class User{
	static getUser(){
		return localStorage.getItem('user');
	}
}
export default User;