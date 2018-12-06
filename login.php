<?php 

$servername = "**************";
$username = "**************";
$password = "**************";
$dbname = "**************";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


	$json = file_get_contents('php://input');
 
	 // Json formatında gelen verileri anlamlı hale getirme işlemi
	 $obj = json_decode($json,true);
	 
	// {email : value, password : value} <-- şeklinde olan veriyi ayıklama yaptım.
	$email = $obj['email'];
	$password = $obj['password']; 
	
	if($obj['email']!="")//eposta adresi boş ise sorguları hiç çalıştırmadım.
	{
	
		$login_query ="select * from users where userEmail = '$email' and userPassword = '$password'"; //sql komutlarınının çalıştırılması
		$login = $conn->query($login_query);
	
	
		if($login->num_rows>0){//eğer 0 dan daha çok girdi mevcutsa giriş yapıldı anlamına gelir.
			echo json_encode('ok');  // başarılı giriş durumunda kontrol mesajı döndürülüyor.	 		
		}
		else
		{		
			echo json_encode('E-posta adresi veya şifre hatalı.');
		}
	}
	
	else{
	  echo json_encode('Boş alan bırakmayın.');
	}
	
?>