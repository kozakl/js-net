export default class Cookie
{
    private static date = new Date();
    
    public static set(name:string, value:string, days?:number)
    {
        if (days) {
            this.date.setTime(Date.now() + days * 24*60*60*1000);
            
            const expires = this.date.toUTCString();
            document.cookie = `${name}=${value}; expires=${expires}; path=/`;
        }
        else
            document.cookie = `${name}=${value}; path=/`;
    }
    
    public static get(name:string)
    {
        const cookie = document.cookie;
        const begin = cookie.indexOf(name),
              end = cookie.indexOf(';', begin);
        if (begin === -1)
            return null;
        else if (end === -1)
            return cookie.substring(begin + name.length + 1);
        else
            return cookie.substring(begin + name.length + 1, end);
    }
    
    public static remove(name:string) {
        this.set(name, '', -1);
    }
}
