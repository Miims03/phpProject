<?php

class User{
    public function __construct(string $uName, string $psw, string $email, string $date){
        $this->uName = $uName;
        $this->psw = $psw;
        $this->email = $email;
        $this->date = $date;
    }
}

// $users = 
// [
//     [
//         "uNameSign" => "Miims", 
//         "pswSign" => "1234", 
//         "emailSign" => "amine.chr2@gmail.com",
//         "dateSign" => "1998-04-03"
//     ],
//     [
//         "uNameSign" => "Martin", 
//         "pswSign" => "4321", 
//         "emailSign" => "martin.chr2@gmail.com",
//         "dateSign" => "1998-03-03"
//     ]
// ];



// foreach ($users as $elem => $val) {
//     echo $val.' -- ';
// }

?>