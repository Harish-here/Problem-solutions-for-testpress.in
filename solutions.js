            //*****Problem 1*****
            function stringRev(strparm){
                        //using array functions
            return strparm.split("").reverse().join("");
            }

            function stringRevraw(str){
                        //without in built functions
                var l = str.length,newstr="";
                for(i=l-1;i>=0;i--){
                    newstr += str[i];
                }
                return newstr;
            }
            //***End of problem 1***************************************
            //**************   PROBLEM 2 ****************************
            function checkPrime(value){
                for(i =2;i<value;i++){
                    if(value%i === 0) return "NOT PRIME";
                }
                return value > 1?"PRIME":"NOT PRIME";
            }
            // ************  END OF PROBLEM 2   *********************

            // ************       PROBLEM 3     *********************
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
            // ************  END OF PROBLEM 3   *********************

            // ************       PROBLEM 4      *********************
            function findMaxMin(strarr){
                        //with math functions
                var strarr = strarr.split(" ");
                var arr = [];
                for(i=0;i<strarr.length;i++){
                    arr[i] = +strarr[i];
                }
                return "MAX : "+Math.max(...arr)+" MIN : "+ Math.min(...arr)+" ";
            }
            
            //without math functions by sorting
            function findMaxMinRaw(strarr){
                var strarr = strarr.split(" ");
                var arr = [];
                for(i=0;i<strarr.length;i++){
                    arr[i] = +strarr[i]; // making inot proper array
                }
                arr.sort(function(a, b){
                    return a - b;
                    });
                return "MAX : "+arr[arr.length - 1]+" MIN : "+arr[0]+"";
            }

            // ************  END OF PROBLEM 4   *********************

            // ************       PROBLEM 5     *********************
            function makeLargestNum(strarr){
                        //expected array in form of string eg. 10 20 12 123  separated by space
                var strarr = strarr.split(" ");
                var arr = [];
                for(i=0;i<strarr.length;i++){
                    arr[i] = +strarr[i];// making inot proper array
                } var temp ="";
                for(i =0;i<arr.length;i++){
                    for(j=i+1;j<arr.length;j++){
                        var a1 = arr[i].toString();//making the number into string
                        var a2 = arr[j].toString();
                        //get the min length of string
                        var minlen = (a1.length > a2.length)?a2.length:a1.length;
                        var maxlen = (a1.length > a2.length)?a1.length:a2.length;
                        //if the first value is bigger ready to swap and can exit n continue the loop
                        if(a1[0]<a2[0]){
                               toswape = true;
                            }else{
                                if(a1[0]>a2[0]) continue;// if its is small continue the loop
                                else{ //to check the further digit
                                    for(t=1;t<minlen;t++){
                                        if(a1[t]<a2[t]) {//to the swap
                                        toswape = true;
                                        break;
                                        }else{
                                            if(a1[t]>a2[t]){break;}//if it is smaller no need to swap exit the loop
                                            else{
                                                continue;
                                            }
                                        }
                                        var lastv = t;// to check it reach the last index
                                    }
                                }
                                if(lastv == minlen){//one of the string is less in length
                                var minstr = (a1.length > a2.length)?a2:a1;
                                var maxstr = !(a1.length > a2.length)?a2:a1;
                                for(f=0;f<maxlen;f++){
                                    if(minstr[0]>maxstr[f]){
                                        toswape = true;
                                    }
                                }

                                }
                            }
                            if(toswape){//flag prev set in one of the test case
                                temp = arr[i];
                                arr[i] = arr[j];
                                arr[j] = temp;
                            }
                        
                    }
                }
                return arr.join("") //joined all the array to get the largest no
            }
            // ************  END OF PROBLEM 2   *********************
