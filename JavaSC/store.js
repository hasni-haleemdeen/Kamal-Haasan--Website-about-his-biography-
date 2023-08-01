var p1price;
var p2price;
var p3price;
var p4price;
var p5price;
var p6price;
var price = [];
var quantity = [];
var product = [];
var price = [];
var msg = [];

function order1(){
	p1price=document.getElementById('product1').value*1500;	
	window.alert(document.getElementById('product1').value+" Kamal Hassan T-Shirt(Red) is added to your cart. Rs"+p1price);
	quantity.push(document.getElementById('product1').value);
	product.push("Kamal Hassan T-Shirt(Red)");
	price.push(p1price);
	
}

function order2(){
	p2price=document.getElementById('product2').value*1500;	
	window.alert(document.getElementById('product2').value+" Kamal Hassan T-Shirt(Black) is added to your cart. Rs"+p2price);
	quantity.push(document.getElementById('product2').value);
	product.push("Kamal Hassan T-Shirt(Black)");
	price.push(p2price);
	
}

function order3(){
	p3price=document.getElementById('product3').value*3500;	
	window.alert(document.getElementById('product3').value+" Kamal Hassan Hoodie(Anbe Shivam) is added to your cart. Rs"+p3price);
	quantity.push(document.getElementById('product3').value);
	product.push("Kamal Hassan Hoodie(Anbe Shivam)");
	price.push(p3price);
	
}

function order4(){
	p4price=document.getElementById('product4').value*500;	
	window.alert(document.getElementById('product4').value+" Anbe Shivam Poster is added to your cart. Rs"+p4price);
	quantity.push(document.getElementById('product4').value);
	product.push("Anbe Shivam Poster");
	price.push(p1price);
	
}

function order5(){
	p5price=document.getElementById('product5').value*800;	
	window.alert(document.getElementById('product5').value+" Kamal Hassan Poster is added to your cart. Rs"+p5price);
	quantity.push(document.getElementById('product5').value);
	product.push("Kamal Hassan Poster");
	price.push(p5price);
	
}

function order6(){
	p6price=document.getElementById('product6').value*2500;	
	window.alert(document.getElementById('product6').value+" Kamal Hassan T-Shirt(Black is added to your cart. Rs"+p6price);
	quantity.push(document.getElementById('product6').value);
	product.push("Kamal Hassan T-Shirt(Black");
	price.push(p6price);
	
}

function validate(){
	var x = document.forms["form1"]["fullname"].value;
	var y = document.forms["form1"]["number"].value;
	var z = document.forms["form1"]["address"].value;
	var a = document.forms["form1"]["email"].value;
	
	if(x ==""){
		alert("Name section needs to be filled");
		return false;
	}
	if(y == ""){
		alert("PhoneNo. section needs to be filled");
		return false;
	}
	if(z == ""){
		alert("Address section needs to be filled");
		return false;
	}
	if(a == ""){
		alert("Email section needs to be filled");
		return false;
	}
	
	var total=0;
	var i;
	for(i=0;i<product.length;i++){
		var x = quantity[i] + " x " + product[i] + " = Rs. "+price[i];
		msg.push(x);
		total += price[i];
	}
	window.alert("Name : "+document.getElementById('name').value +"\nEmail : "+document.getElementById('email').value +"\n"+ "\nYour order summary : \n" + msg.join("\n") + "\nYour total is Rs." + total.toString() +"\n"+ "\nYour products will be delivered within 14 days.\nThank you for shopping with us.")
	
}


