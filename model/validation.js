const getEle = (id) => {
    return document.getElementById(id);
};

class Validation {
    emptyTest(value, errorId, mess) {
        if (value == "") {
            getEle(errorId).style.display = 'block';
            getEle(errorId).innerHTML = mess;
            return false;
        }

        getEle(errorId).style.display = 'none';
        getEle(errorId).innerHTML = "";
        return true;
    };

    characterLengthTest (value, errorId, mess, min, max) {
        if (min <= value.length && value.length <= max) {
            getEle(errorId).style.display = 'none';
            getEle(errorId).innerHTML = "";
            return true;
        }
        getEle(errorId).style.display = 'block';
        getEle(errorId).innerHTML = mess;
        return false;
    };

    characterStringTest(value, errorId, mess) {
        var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (value.match(letter)) {
            getEle(errorId).style.display = 'none';
            getEle(errorId).innerHTML = "";
            return true;
        }
        getEle(errorId).style.display = 'block';
        getEle(errorId).innerHTML = mess;
        return false;
    };

patternTest(value, pattern, errorId, mess) {
        if (value.match(pattern)) {
            getEle(errorId).style.display = 'none';
            getEle(errorId).innerHTML = "";
            return true;
        }
        getEle(errorId).style.display = 'block';
        getEle(errorId).innerHTML = mess;
        return false;
    };

    accountExistsTest (value, errorId, mess, arr) {
        var exist = false;

        for (let i = 0; i < arr.length; i++) {
            let person = arr[i];
            if(person.id === value) {
                exist = true;
                break;
            }
        }
        if(exist) {
            getEle(errorId).style.display = 'block';
        getEle(errorId).innerHTML = mess;
        return false;
        }
        getEle(errorId).style.display = 'none';
            getEle(errorId).innerHTML = "";
            return true;
    };


}
export default Validation;