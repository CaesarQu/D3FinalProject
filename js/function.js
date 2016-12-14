	var left = 2;
	var result;
	
	function featureName(a){
	
		var str = " ";
		if(a==1) str="Qi Deficiency  Feature：The skin is rough, the eyes of a lot of red silk, easy bleeding gums. Regulation: eat hawthorn, vinegar, roses, eat less fat and other tired of the goods. Can participate in a variety of dance, walking fitness method, free-hand aerobics.";
		if(a==2) str="阳虚体质  特征：肌肉不健壮，常常感到手脚发凉，衣服比别人穿得多，夏天不喜欢吹空调，喜欢安静，性格多沉静、内向。调节：平时可多食牛肉、羊肉等温阳之品，少食梨、西瓜、荸荠等生冷寒凉食物，少饮绿茶。";
		if(a==3) str="血虚体质  特征：血液亏虚，以面色淡白或萎黄，唇舌爪甲色淡，头晕眼花，心悸多梦，手足发麻，妇女月经量少、色淡、后期或经闭，脉细等为常见证候。宜多吃常吃具有补血作用的食物,宜吃高铁、高蛋白、高维生素C的食品,宜吃些补气、补肾、健脾作用的食物。忌吃生冷性凉物品。";
		if(a==4) str="阴虚体质  特征：体形多瘦长，不耐暑热，常感到眼睛干涩，口干咽燥，总想喝水，皮肤干燥，经常大便干结，容易失眠。调节：多食瘦猪肉、鸭肉、绿豆、冬瓜等甘凉滋润之品，少食羊肉、韭菜、辣椒、葵花子等性温燥烈之品。适合太极拳、太极剑、气功等项目。";
		if(a==5) str="气虚体质  特征：肌肉松软，声音低，易出汗，易累，易感冒。调节：多食用具有益气健脾作用的食物，如黄豆、白扁豆、鸡肉等。少食空心菜、生萝卜等。";
		if(a==6) str="气郁体质  特征：体形偏瘦，常感到闷闷不乐、情绪低沉，常有胸闷，经常无缘无故地叹气,易失眠。调节：多食黄花菜、海带、山楂、玫瑰花等具有行气、解郁、消食、醒神作用的食物。气郁体质的人不要总待在家里，要多参加群众性的体育运动项目。";
		if(a==7) str="痰湿体质  特征：体形肥胖，腹部肥满而松软。易出汗，且多黏腻。经常感觉脸上有一层油。调节：饮食应以清淡为主，可多食冬瓜等。因体形肥胖，易于困倦，故应根据自己的具体情况循序渐进，长期坚持运动锻炼。";
		if(a==8) str="Blood Deficiency  Feature：the face and nose is always shiny shiny, his face acne prone, easy to itchy skin. Often feel bitter, bad breath, temper more impatient. Regulation: diet with light-based, can eat red bean, mung bean, celery, cucumber, lotus root and other Ganhan food. Suitable for long-distance running, swimming, mountain climbing, all kinds of ball, martial arts";
		if(a==9) str="Sthenia Heat  Feature: increased heat energy, the body is more heat, his face red, easily thirsty tongue dry, like to drink cold, yellow urine and urine less, into the air-conditioned room to feel more comfortable. Not suitable for taking the warm nature of the diet, but eat some cold and moist food, in order to maintain the balance of the body, feel comfortable, to reduce the general thermal";
		
		return str;
	
	}
	
	function topKMaxOfArr(k, arr){ 

	var arrNum=[1,2,3,4,5,6,7,8,9];	
	
    function swap(a, b){  
        var t = arr[a];  
        arr[a] = arr[b];  
        arr[b] = t;  
		
		var m = arrNum[a];
		arrNum[a] = arrNum[b];  
        arrNum[b] = m;  
    }  
      
    var i,j;  
    //ֻ��ѭ��k��  
    for(i=arr.length;i>arr.length-k;i--){  
          
        for(j=Math.floor(i/2)-1;j>=0;j--){  
            if(arr[j]<arr[2*j+1]){  
                swap(j, 2*j+1);  
            }  
            if(2*j+2<i && arr[j]<arr[2*j+2]){  
                swap(j, 2*j+2);  
            }  
        }  
          
        swap( i-1, 0 );  
    }  
      
    return arrNum.slice( arr.length - k );  
}  
	
	function getRadioValue(ra){
			var value='';  
			var radio = document.getElementsByName(ra);  
			for(var i = 0;i<radio.length;i++)  
			{  
				if(radio[i].checked==true)  
				{value = radio[i].value;  
				break;}  
			}  
			return value;  
		}
		
	
	function tijiao(){
			var str = "";
			var l = computeAll(result[2]);
			console.log("result2"+ result[2] + result[1]+result[0]);
			var m = computeAll(result[1]);
			var s = computeAll(result[0]);
			if(l==m && l==s) str = featureName(result[2])+"<br/>"+featureName(result[1])+"<br/>"+featureName(result[0]);
			if(l==m && l>s) str = featureName(result[2])+"<br/>"+featureName(result[1]);
			if(l==s && l>m) str = featureName(result[2])+"<br/>"+featureName(result[0]);
			if(s==m && s>l) str = featureName(result[0])+"<br/>"+featureName(result[1]);
			if(s>m && s>l) str = featureName(result[0]);
			if(m>s && m>l) str = featureName(result[1]);
			if(l>s && l>m) str = featureName(result[2]);
			return str;
			}
		
	function compute(){
		
		    var yuxueValue = Number(getRadioValue("yuxue1"))+Number(getRadioValue("yuxue2"));
			var yangxuValue = Number(getRadioValue("yangxu1"))+Number(getRadioValue("yangxu2"));
			var xuexuValue = Number(getRadioValue("xuexu1"))+Number(getRadioValue("xuexu2"));
			var yinxuValue = Number(getRadioValue("yinxu1"))+Number(getRadioValue("yinxu2"));
			var qixuValue = Number(getRadioValue("qixu1"))+Number(getRadioValue("qixu2"));
			var qiyuValue = Number(getRadioValue("qiyu1"))+Number(getRadioValue("qiyu2"));
			var tanshiValue = Number(getRadioValue("tanshi1"))+Number(getRadioValue("tanshi2"));
			var shireValue = Number(getRadioValue("shire1"))+Number(getRadioValue("shire2"));
			var reValue = Number(getRadioValue("re1"))+Number(getRadioValue("re2"));
			var arr = [yuxueValue,yangxuValue,xuexuValue,yinxuValue,qixuValue,qiyuValue,tanshiValue,shireValue,reValue];
			var k=3; 
			result = topKMaxOfArr(k, arr);
	
	}
	function computeAll(a){
		
		    var yuxueAllValue = Number(getRadioValue("yuxue1"))+Number(getRadioValue("yuxue2"))+Number(getRadioValue("yuxue3"))+Number(getRadioValue("yuxue4"))+Number(getRadioValue("yuxue5"));
			var yangxuAllValue = Number(getRadioValue("yangxu1"))+Number(getRadioValue("yangxu2"))+Number(getRadioValue("yangxu3"))+Number(getRadioValue("yangxu4"))+Number(getRadioValue("yangxu5"));
			var xuexuAllValue = Number(getRadioValue("xuexu1"))+Number(getRadioValue("xuexu2"))+Number(getRadioValue("xuexu3"))+Number(getRadioValue("xuexu4"))+Number(getRadioValue("xuexu5"));
			var yinxuAllValue = Number(getRadioValue("yinxu1"))+Number(getRadioValue("yinxu2"))+Number(getRadioValue("yinxu3"))+Number(getRadioValue("yinxu4"))+Number(getRadioValue("yinxu5"));
			var qixuAllValue = Number(getRadioValue("qixu1"))+Number(getRadioValue("qixu2"))+Number(getRadioValue("qixu3"))+Number(getRadioValue("qixu4"))+Number(getRadioValue("qixu5"));
			var qiyuAllValue = Number(getRadioValue("qiyu1"))+Number(getRadioValue("qiyu2"))+Number(getRadioValue("qiyu3"))+Number(getRadioValue("qiyu4"))+Number(getRadioValue("qiyu5"));
			var tanshiAllValue = Number(getRadioValue("tanshi1"))+Number(getRadioValue("tanshi2"))+Number(getRadioValue("tanshi3"))+Number(getRadioValue("tanshi4"))+Number(getRadioValue("tanshi5"));
			var shireAllValue = Number(getRadioValue("shire1"))+Number(getRadioValue("shire2"))+Number(getRadioValue("shire3"))+Number(getRadioValue("shire4"))+Number(getRadioValue("shire5"));
			var reAllValue = Number(getRadioValue("re1"))+Number(getRadioValue("re2"))+Number(getRadioValue("re3"))+Number(getRadioValue("re4"))+Number(getRadioValue("re5"));
			
			if(a==1) return yuxueAllValue;
			if(a==2) return yangxuAllValue;
			if(a==3) return xuexuAllValue;
			if(a==4) return yinxuAllValue;
			if(a==5) return qixuAllValue;
			if(a==6) return qiyuAllValue;
			if(a==7) return tanshiAllValue;
			if(a==8) return shireAllValue;
			if(a==9) return reAllValue;
			
	
	}

	function display(){
	
	        
		
		if(left<0) {$("#t3").show();return;}
		else if(result[left]==1) $("#yuxue").show();
		else if(result[left]==2) $("#yangxu").show();
		else if(result[left]==3) $("#xuexu").show();
		else if(result[left]==4) $("#yinxu").show();
		else if(result[left]==5) $("#qixu").show();
		else if(result[left]==6) $("#qiyu").show();
		else if(result[left]==7) $("#tanshi").show();
		else if(result[left]==8) $("#shire").show();
		else if(result[left]==9) $("#re").show();
		left = left-1;
		
	}	
		

	function submit(){
	var inter = document.getElementById("smg");
			document.getElementById("chartdiv").style.visibility = 'visible';
			inter.innerHTML=tijiao();
			}
	
	
	