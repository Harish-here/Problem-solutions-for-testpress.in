 function stringRev(strparm){
            return strparm.split("").reverse().join("");
            }

            function stringRevraw(str){
                var l = str.length,newstr="";
                for(i=l-1;i>=0;i--){
                    newstr += str[i];
                }
                return newstr;
            }
            function checkPrime(value){
                for(i =2;i<value;i++){
                    if(value%i === 0) return "NOT PRIME";
                }
                return value > 1?"PRIME":"NOT PRIME";
            }
            function removeLeadZero(value){
                var revNum = stringRev(value),index=0;
                if(revNum[0] != '0') return revNum
                else{
                    for(i=1;i<revNum.length;i++){
                        if(revNum[i] != '0') {
                            index=i;
                            break;
                        }
                    }
                    value = "";
                    for(j=index;j<revNum.length;j++){
                        value += revNum[j];
                    }
                    return value;
                }
            }
            function findMaxMin(strarr){
                var strarr = strarr.split(" ");
                var arr = [];
                for(i=0;i<strarr.length;i++){
                    arr[i] = +strarr[i];
                }
                return "MAX : "+Math.max(...arr)+" MIN : "+ Math.min(...arr)+" ";
            }
            function findMaxMinRaw(strarr){
                var strarr = strarr.split(" ");
                var arr = [];
                for(i=0;i<strarr.length;i++){
                    arr[i] = +strarr[i];
                }
                arr.sort(function(a, b){
                    return a - b;
                    });
                return "MAX : "+arr[arr.length - 1]+" MIN : "+arr[0]+"";
            }
            function makeLargestNum(strarr){
                var strarr = strarr.split(" ");
                var arr = [];
                for(i=0;i<strarr.length;i++){
                    arr[i] = +strarr[i];
                } var temp ="";
                for(i =0;i<arr.length;i++){
                    for(j=i+1;j<arr.length;j++){
                        var a1 = arr[i].toString();//making the number into string
                        var a2 = arr[j].toString();
                        //get the min length of string
                        var minlen = (a1.length > a2.length)?a2.length:a1.length;
                        //if the first value is bigger readt to swap and can exit n continue the loop
                        if(a1[0]<a2[0]){
                               temp = arr[i];
                               arr[i] = arr[j];
                               arr[j] = temp;
                            }else{
                                if(a1[0]>a2[0]) continue;// if its is small continue the loop
                                else{ //to check the further digit
                                    for(t=1;t<minlen;t++){
                                        if(a1[t]<a2[t]) {//to the swap
                                        temp = arr[i];
                                        arr[i] = arr[j];
                                        arr[j] = temp;
                                        break;
                                        }else{
                                            if(a1[t]>a2[t]){break;}//if it is smaller no need to swap exit the loop
                                            else{
                                                continue;
                                            }
                                        }
                                    }
                                }
                            }
                        
                    }
                }
            }

            var objfrm = document.forms[0];
            function sayhello(){
                var str = objfrm.elements["txt"].value.toString();
                alert("5">"4");
            }
