const crm={
    setUserId(obj){
        window.localStorage.setItem("USER_ID",obj);
    },
    setRoles(obj){
        window.localStorage.setItem("ROLES",obj);
    },
    setModules(obj){
        window.localStorage.setItem("MODULE",obj);
    },
    setToken(obj){
            window.localStorage.setItem("TOKEN",obj);
    },
    getToken(){
       return window.localStorage.getItem("TOKEN");
    },
    getModules(){
        return window.localStorage.getItem("MODULE")
    }
}