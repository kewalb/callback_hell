setTimeout(function(){
    var arr = [10,9,8,7,6,5,4,3,2,1,"Happy Independence Day"];
    var h1 = document.createElement("h1");
    h1.innerText=arr[0];
    document.body.appendChild(h1);

    setTimeout(function(value){
        console.log(value)
        h1.innerText=value;
        document.body.appendChild(h1);
        
        setTimeout(function(value){
            h1.innerText=value;
            document.body.appendChild(h1);

            setTimeout(function(value){
                h1.innerText=value;
                document.body.appendChild(h1);
                
                setTimeout(function(value){
                    h1.innerText=value;
                    document.body.appendChild(h1);
                    
                    setTimeout(function(value){
                        h1.innerText=value;
                        document.body.appendChild(h1);
                        
                        setTimeout(function(value){
                            h1.innerText=value;
                            document.body.appendChild(h1);
                            
                            setTimeout(function(value){
                                h1.innerText=value;
                                document.body.appendChild(h1);
                                
                                setTimeout(function(value){
                                    h1.innerText=value;
                                    document.body.appendChild(h1);
                                    
                                    setTimeout(function(value){
                                        h1.innerText=value;
                                        document.body.appendChild(h1);
                                        
                                        setTimeout(function(value){
                                            h1.innerText=value;
                                            h1.style.color="red";
                                            document.body.appendChild(h1);
                                            
                                        },1000,arr[10])
                                    },1000,arr[9])
                                },1000,arr[8])
                            },1000,arr[7])
                        },1000,arr[6])
                    },1000,arr[5])
                },1000,arr[4])
            },1000,arr[3])
        },1000,arr[2])
    },1000,arr[1])
},1000)