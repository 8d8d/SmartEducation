/**
 * ȥ������ո���
 * trim():ȥ�����߿ո� lTrim():ȥ����ո� rTrim(): ȥ���ҿո�
 * �÷���
 *     var str = "  hello ";
 *     str = str.trim();
 */
String.prototype.trim = function()
{
    return this.replace(/(^[\s]*)|([\s]*$)/g, "");
}
String.prototype.lTrim = function()
{
    return this.replace(/(^[\s]*)/g, "");
}
String.prototype.rTrim = function()
{
    return this.replace(/([\s]*$)/g, "");
}

/**
*У���ַ����Ƿ�Ϊ��
*����ֵ��
*�����Ϊ�գ�����У��ͨ��������true��У�鲻ͨ��������false
*/
function checkIsNotEmpty(str)
{
    if(str.trim() == "")
        return false;
    else
        return true;
}

/**
*У���ַ����Ƿ�Ϊ����
*����ֵ��
*���Ϊ�գ�����У�鲻ͨ����    ����true
*����ִ�ȫ��Ϊ���֣�У��ͨ��������true��У�鲻ͨ��������false
*/
function checkIsInteger(str)
{
    //���Ϊ�գ���ͨ��У��
    if(str.trim() == "")
        return true;
    if(/^(\-?)(\d+)$/.test(str))
        return true;
    else
        return false;
}
/**
*У��������Сֵ
*str��ҪУ��Ĵ���  val���Ƚϵ�ֵ
*
*����ֵ��
*���Ϊ�գ�����У�鲻ͨ����              ����true
*����������������ڵ��ڸ���ֵ��У��ͨ��������true��С�ڸ���ֵ������false
*/
function checkIntegerMinValue(str,val)
{
    //���Ϊ�գ���ͨ��У��
    if(str.trim() == "")
        return true;
    if(typeof(val) != "string")
        val = val + "";
    if(checkIsInteger(str) == true)
    {
        if(parseInt(str,10)>=parseInt(val,10))
            return true;
        else
            return false;
    }
    else
        return false;
}
/**
*У���������ֵ
*str��ҪУ��Ĵ���  val���Ƚϵ�ֵ
*
*����ֵ��
*���Ϊ�գ�����У�鲻ͨ����              ����true
*�������������С�ڵ��ڸ���ֵ��У��ͨ��������true�����ڸ���ֵ������false
*/
function checkIntegerMaxValue(str,val)
{
    //���Ϊ�գ���ͨ��У��
    if(str.trim() == "")
        return true;
    if(typeof(val) != "string")
        val = val + "";
    if(checkIsInteger(str) == true)
    {
        if(parseInt(str,10)<=parseInt(val,10))
            return true;
        else
            return false;
    }
    else
        return false;
}
/**
*У�������Ƿ�Ϊ�Ǹ���
*str��ҪУ��Ĵ���
*
*����ֵ��
*���Ϊ�գ�����У�鲻ͨ��������true
*����Ǹ���������true������Ǹ���������false
*/
function isNotNegativeInteger(str)
{
    //���Ϊ�գ���ͨ��У��
    if(str.trim() == "")
        return true;
    if(checkIsInteger(str) == true)
    {
        if(parseInt(str,10) < 0)
            return false;
        else
            return true;
    }
    else
        return false;
}

/**
*У���ַ����Ƿ�Ϊ������
*����ֵ��
*���Ϊ�գ�����У�鲻ͨ����      ����true
*����ִ�Ϊ�����ͣ�У��ͨ��������true��У�鲻ͨ��������false
*/
function checkIsDouble(str)
{
    //���Ϊ�գ���ͨ��У��
    if(str.trim() == "")
        return true;
    //�������������У����������Ч��
    if(str.indexOf(".") == -1)
    {
        if(checkIsInteger(str) == true)
            return true;
        else
            return false;
    }
    else
    {
        if(/^(\-?)(\d+)(.{1})(\d+)$/g.test(str))
            return true;
        else
            return false;
    }
}
/**
*У�鸡������Сֵ
*str��ҪУ��Ĵ���  val���Ƚϵ�ֵ
*
*����ֵ��
*���Ϊ�գ�����У�鲻ͨ����              ����true
*����������������ڵ��ڸ���ֵ��У��ͨ��������true��С�ڸ���ֵ������false
*/
function checkDoubleMinValue(str,val)
{
    //���Ϊ�գ���ͨ��У��
    if(str.trim() == "")
        return true;
    if(typeof(val) != "string")
        val = val + "";
    if(checkIsDouble(str) == true)
    {
        if(parseFloat(str)>=parseFloat(val))
            return true;
        else
            return false;
    }
    else
        return false;
}
/**
*У�鸡�������ֵ
*str��ҪУ��Ĵ���  val���Ƚϵ�ֵ
*
*����ֵ��
*���Ϊ�գ�����У�鲻ͨ����              ����true
*�������������С�ڵ��ڸ���ֵ��У��ͨ��������true��������ڸ���ֵ������false
*/
function checkDoubleMaxValue(str,val)
{
    //���Ϊ�գ���ͨ��У��
    if(str.trim() == "")
        return true;
    if(typeof(val) != "string")
        val = val + "";
    if(checkIsDouble(str) == true)
    {
        if(parseFloat(str)<=parseFloat(val))
            return true;
        else
            return false;
    }
    else
        return false;
}
/**
*У�鸡�����Ƿ�Ϊ�Ǹ���
*str��ҪУ��Ĵ���
*
*����ֵ��
*���Ϊ�գ�����У�鲻ͨ��������true
*����Ǹ���������true������Ǹ���������false
*/
function isNotNegativeDouble(str)
{
    //���Ϊ�գ���ͨ��У��
    if(str.trim() == "")
        return true;
    if(checkIsDouble(str) == true)
    {
        if(parseFloat(str) < 0)
            return false;
        else
            return true;
    }
    else
        return false;
}

/**
*У���ַ����Ƿ�Ϊ������
*����ֵ��
*���Ϊ�գ�����У�鲻ͨ��������true
*����ִ�Ϊ�����ͣ�У��ͨ��������true��У��ͨ��������false
*/
function checkIsValidDate(str)
{
    //���Ϊ�գ���ͨ��У��
    if(str.trim() == "")
        return true;
    var pattern = /^((\d{4})|(\d{2}))-(\d{1,2})-(\d{1,2})$/g;
    if(!pattern.test(str))
        return false;
    var arrDate = str.split("-");
    if(parseInt(arrDate[0],10) < 100)
        arrDate[0] = 2000 + parseInt(arrDate[0],10) + "";
    var date =  new Date(arrDate[0],(parseInt(arrDate[1],10) -1)+"",arrDate[2]);
    if(date.getFullYear() == arrDate[0]
       && date.getMonth() == (parseInt(arrDate[1],10) -1)+""
       && date.getDate() == arrDate[2])
        return true;
    else
        return false;
}
/**
*У���ַ����Ƿ�Ϊʱ����
*����ֵ��
*���Ϊ�գ�����У�鲻ͨ��������true
*����ִ�Ϊʱ���ͣ�У��ͨ��������true��У��ͨ��������false
*/
function checkIsValidTime(str)
{
    //���Ϊ�գ���ͨ��У��
    if(str.trim() == "")
        return true;
    var pattern = /^(\d{1,2}):(\d{2})$/g;
	if(pattern.test(str)) 
	{ 
		if( RegExp.$1 <24 && RegExp.$2<60) return true; 
	}else{
		alert("ʱ���ַ��ʽ����ȷ");
		return false;
	}
}
/**
*У���������ڵ��Ⱥ�
*����ֵ��
*���������һ������Ϊ�գ�У�鲻ͨ��,        ����false
*�����ʼ�������ڵ�����ֹ���ڣ�У��ͨ��������true�������ʼ����������ֹ���ڣ�����false
*/
function checkDateEarlier(strStart,strEnd)
{
    if(checkIsValidDate(strStart) == false || checkIsValidDate(strEnd) == false)
        return false;
    //�����һ������Ϊ�գ���ͨ������
    if (( strStart.trim() == "" ) || ( strEnd.trim() == "" ))
        return true;
    var arr1 = strStart.split("-");
    var arr2 = strEnd.split("-");
    var date1 = new Date(arr1[0],parseInt(arr1[1].replace(/^0/,""),10) - 1,arr1[2]);
    var date2 = new Date(arr2[0],parseInt(arr2[1].replace(/^0/,""),10) - 1,arr2[2]);
    if(arr1[1].length == 1)
        arr1[1] = "0" + arr1[1];
    if(arr1[2].length == 1)
        arr1[2] = "0" + arr1[2];
    if(arr2[1].length == 1)
        arr2[1] = "0" + arr2[1];
    if(arr2[2].length == 1)
        arr2[2]="0" + arr2[2];
    var d1 = arr1[0] + arr1[1] + arr1[2];
    var d2 = arr2[0] + arr2[1] + arr2[2];
    if(parseInt(d1,10) > parseInt(d2,10))
       return false;
    else
       return true;
}

/**
*У���ַ����Ƿ�Ϊemail��
*����ֵ��
*���Ϊ�գ�����У�鲻ͨ����         ����true
*����ִ�Ϊemail�ͣ�У��ͨ��������true�����email���Ϸ�������false
*/
function checkEmail(str)
{
    //���Ϊ�գ���ͨ��У��
    if(str.trim() == "")
        return true;
    if (str.charAt(0) == "." || str.charAt(0) == "@" || str.indexOf('@', 0) == -1 || str.indexOf('.', 0) == -1 || str.lastIndexOf("@") == str.length - 1 || str.lastIndexOf(".") == str.length - 1) {
        alert("EMail��ʽ����ȷ����ȷ��ʽ�磺abc@abc.com");
        return false;
	}
    else{
        return true;
	}
}

/**
*У���ַ����Ƿ�ΪIPv4��
*����ֵ��
*���Ϊ�գ�����У�鲻ͨ��������true
*����ִ�ΪIPv4�ͣ�У��ͨ��������true�����Ϸ�������false
*/
function checkIPv4(strIP)
{
	//���Ϊ�գ���ͨ��У��
	if (strIP.trim() == "") 
		return true; 
	if(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g.test(strIP)) 
	{ 
		if( RegExp.$1 <256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256) return true; 
	} else{
		alert("IPv4��ַ��ʽ����ȷ����ȷ��ʽ�磺255.255.255.255");
		return false;
	}
}

/**
*У���ַ����Ƿ�ΪIPv6��
*����ֵ��
*���Ϊ�գ�����У�鲻ͨ����         ����true
*����ִ�ΪIPv6�ͣ�У��ͨ��������true�����Ϸ�������false
*/
function checkIPv6(strIP)
{
	//���Ϊ�գ���ͨ��У��
	if (strIP.trim() == "")
		return true; 
	if(/^(\d+)\.(\d+)\.(\d+)\.(\d+)\.(\d+)\.(\d+)$/g.test(strIP)) 
	{ 
		if( RegExp.$1 <256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256 && RegExp.$5<256 && RegExp.$6<256) 
			return true; 
	} 
	else{
		alert("IPv6��ַ��ʽ����ȷ����ȷ��ʽ�磺255.255.255.255.255.255");
		return false;
	}
}

/**
*У���ַ����Ƿ��Ǵ����ŵĹ̶��绰��ʽ�����磺0511-4405222 �� 021-87888822
*����ֵ��
*���Ϊ�գ�����У�鲻ͨ����						����true
*����ִ�Ϊ�����ŵĹ̶��绰��ʽ��У��ͨ��������true��У�鲻ͨ��������false
*/
function checkTelNumber(str)
{
	//���Ϊ�գ���ͨ��У��
	if (str.trim() == "") 
		return true; 
	if(/^(\d{3,4})-(\d{7,8})$/.test(str)) 
		return true; 
	else{
		alert("�̶��绰�����ʽ����ȷ����ȷ��ʽ�磺0511-4405222 �� 021-87888822");
		return false;
	}
}

/**
*У���ַ����Ƿ����ֻ������ʽ
*����ֵ��
*���Ϊ�գ�����У�鲻ͨ��������true
*����ִ�Ϊ�ֻ������ʽ��У��ͨ��������true��У�鲻ͨ��������false
*/
function checkMobileNumber(str)
{
	//���Ϊ�գ���ͨ��У��
	if (str.trim() == "") 
		return true; 
	if(/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/.test(str)) 
		return true; 
	else{
		alert("�ֻ������ʽ����ȷ����ȷ��ʽ�磺13512345678");
		return false;
	}
}

/**
*У���ַ����Ƿ������������ʽ
*����ֵ��
*���Ϊ�գ�����У�鲻ͨ��������true
*����ִ�Ϊ���������ʽ��У��ͨ��������true��У�鲻ͨ��������false
*/
function checkPostalCode(str)
{
	//���Ϊ�գ���ͨ��У��
	if (str.trim() == "") 
		return true; 
	if(/^[1-9]{1}(\d{5})$/.test(str)) 
		return true; 
	else{
		alert("���������ʽ����ȷ����ȷ��ʽ����Ϊ��0��ͷ��6λ��");
		return false;
	}
}

/**
*У���ַ����Ƿ������֤�����ʽ
*����ֵ��
*���Ϊ�գ�����У�鲻ͨ��������true
*����ִ�Ϊ���֤�����ʽ��У��ͨ��������true��У�鲻ͨ��������false
*/
function checkID(str)
{
	//���Ϊ�գ���ͨ��У��
	if (str.trim() == "") 
		return true; 
	if(/^[1-9]((\d{17})|(\d{16}x)|(\d{14})|(\d{13}x))$/i.test(str)) 
		return true; 
	else{
		alert("���֤�����ʽ����ȷ");
		return false;
	}
}

/**
*У���ַ����Ƿ���ϵ�½����ʽ�淶��ֻ������5-20������ĸ��ͷ���ɴ����֡���_�����ִ�
*����ֵ��
*���Ϊ�գ�����У�鲻ͨ��������true
*����ִ��Ƿ���ϵ�½����ʽ��У��ͨ��������true����ͨ��������false
*/
function checkUserName(str)
{
	//���Ϊ�գ���ͨ��У��
	if (str.trim() == "") 
		return true; 
	if(/^[a-zA-Z]{1}([a-zA-Z0-9]){4,19}$/.test(str)) 
		return true; 
	else
		return false;
}

/**
*У���ַ����Ƿ���������ʽ�淶��ֻ������5-20������ĸ��ͷ���ɴ����֡���_�����ִ�
*����ֵ��
*���Ϊ�գ�����У�鲻ͨ��������true
*����ִ��Ƿ���ϵ�½����ʽ��У��ͨ��������true����ͨ��������false
*/
function checkPasswd(str)
{
	//���Ϊ�գ���ͨ��У��
	if (str.trim() == "") 
		return true; 
	if(/^(\w){6,20}$/.test(str)) 
		return true; 
	else
		return false;
}
/**
*У���ַ����Ƿ���URL��ַ��ʽ��
*����ֵ��
*���Ϊ�գ�����У�鲻ͨ��������true
*����ִ�ΪURL��ַ��У��ͨ��������true��У�鲻ͨ��������false
*/
function checkURL(str)
{
	var regExp = new RegExp("^((https|http|ftp|rtsp|mms)://)[^/s]*");
    //���Ϊ�գ���ͨ��У��
    if(str == "")
        return true;
    if(regExp.test(str))
        return true;
    else{
		alert("URL��ַ��ʽ����ȷ�����磺http://abc.com");
        return false;
	}
}

/**
*У���ַ����Ƿ�Ϊ����
*����ֵ��
*���Ϊ�գ�����У�鲻ͨ����         ����true
*����ִ�Ϊ���ģ�У��ͨ��������true������ִ�Ϊ�����ģ�����false
*/
function checkIsChinese(str)
{
    //���ֵΪ�գ�ͨ��У��
    if (str == "")
        return true;
    var pattern = /^([\u4E00-\u9FA5]|[\uFE30-\uFFA0])*$/gi;
    if (pattern.test(str))
        return true;
    else
        return false;
}

/**
 * �����ַ����ĳ��ȣ�һ�����������ַ�
 */
String.prototype.realLength = function()
{
  return this.replace(/[^\x00-\xff]/g,"**").length;
}

/**
*У���ַ����Ƿ�����Զ���������ʽ
*str ҪУ����ִ�  pat �Զ����������ʽ
*����ֵ��
*���Ϊ�գ�����У�鲻ͨ����         ����true
*����ִ����ϣ�У��ͨ����           ����true
*����ִ������ϣ�                   ����false    �ο���ʾ��Ϣ����������***ģʽ
*/
function checkMask(str,pat)
{
    //���ֵΪ�գ�ͨ��У��
    if (str == "")
        return true;
    var pattern = new RegExp(pat,"gi")
    if (pattern.test(str))
        return true;
    else
        return false;
}

/**

 * �õ��ļ��ĺ�׺��
 * oFileΪfile�ؼ�����
 */
function getFilePostfix(oFile)
{
    if(oFile == null)
        return null;
    var pattern = /(.*)\.(.*)$/gi;
    if(typeof(oFile) == "object")
    {
        if(oFile.value == null || oFile.value == "")
            return null;
        var arr = pattern.exec(oFile.value);
        return RegExp.$2;
    }
    else if(typeof(oFile) == "string")
    {
        var arr = pattern.exec(oFile);
        return RegExp.$2;
    }
    else
        return null;
}
/*
ת��Ϊʱ���ʽ
*/
Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(),    //day
        "h+": this.getHours(),   //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter
        "S": this.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
     (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
     RegExp.$1.length == 1 ? o[k] :
     ("00" + o[k]).substr(("" + o[k]).length));
    return format;
}

//function checkDate(data) {
//    if (data.trim() == "")
//        return true; 
//    else
//    {
//     var reg = new RegExp(^(?:(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(\/|-|\.)(?:0?2\1(?:29))$)|(?:(?:1[6-9]|[2-9]\d)?\d)(\/|-|\.)(?:(?:(?:0?[13578]|1[02])\2(?:31))|(?:(?:0?[1,3-9]|1[0-2])\2(29|30))|(?:(?:0?[1-9])|(?:1[0-2]))\2(?:0?[1-9]|1\d|2[0-8]))$);
//        if (!/^\(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/.test(data.trim())) {
//            alert("���ڸ�ʽ����ȷ��1��ȷ��ʽΪ1900-10-10");
//            return false;
//        }
//        else
//            return true;
//    }
//}
function checkDate(data) {
    if (data.trim() == "")
        return true;
    else {
        var mycheck = /^(?:(?:1[6-9]|[2-9]\d)?\d{2}[\-\.](?:0?[1,3-9]|1[0-2])[\-\.](?:29|30))(?: (?:0?\d|1\d|2[0-3])\:(?:0?\d|[1-5]\d)\:(?:0?\d|[1-5]\d)(?: \d{1,3})?)?$|^(?:(?:1[6-9]|[2-9]\d)?\d{2}[\-\.](?:0?[1,3,5,7,8]|1[02])[\-\.]31)(?: (?:0?\d|1\d|2[0-3])\:(?:0?\d|[1-5]\d)\:(?:0?\d|[1-5]\d)(?: \d{1,3})?)?$|^(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])[\-\.]0?2[\-\.]29)(?: (?:0?\d|1\d|2[0-3])\:(?:0?\d|[1-5]\d)\:(?:0?\d|[1-5]\d)(?: \d{1,3})?)?$|^(?:(?:16|[2468][048]|[3579][26])00[\-\.]0?2[\-\.]29)(?: (?:0?\d|1\d|2[0-3])\:(?:0?\d|[1-5]\d)\:(?:0?\d|[1-5]\d)(?: \d{1,3})?)?$|^(?:(?:1[6-9]|[2-9]\d)?\d{2}[\-\.](?:0?[1-9]|1[0-2])[\-\.](?:0?[1-9]|1\d|2[0-8]))(?: (?:0?\d|1\d|2[0-3])\:(?:0?\d|[1-5]\d)\:(?:0?\d|[1-5]\d)(?: \d{1,3})?)?$/;
        if (!mycheck.test(data.trim())) {
            alert("���ڸ�ʽ����ȷ����ȷ��ʽΪ1900-10-10��");
            return false;
        }
        else
            return true;

    }
}