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
                var arr = [],collections =[];
                for(i=0;i<strarr.length;i++){
                    arr[i] = +strarr[i];
                }var temp = "";
                for(i=0;i<arr.length;i++){
                    for(j=i;j<arr.length;j++){//make all possible combinations of numbers
                        temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                        collections.push(arr.join(""));
                    }
                }
                return Math.max(...collections);//find the max number in the collections
            
            }
            // ************  END OF PROBLEM 5   *********************
