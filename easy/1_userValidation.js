export const userValidation = (str) => {

    if(
        str.length >=4 && str.length <= 25 &&
        (/[a-zA-Z]/).test(str.charAt(0)) &&
        (/^\w+$/).test(str) &&
        (/[a-zA-Z0-9]/).test(str.slice(-1))
    ) {
        return true;
    }
    else {
        return false;
    }

}

//^ Regular Expression

//^ (/[a-zA-Z]/) => Sadece Boyuk ve Kicik Harfler => Olmalidir !

//^ (/[a-zA-Z0-9]/) => Sadece Boyuk ve Kicik Harfler ve Rakamlar => Olmalidir !

//^ (/^\w+$/) => Sadece Harfler, Rakamlar ve Alt cizgi => ola biler demekdir !