<?php

echo 'Processing........';

// check for a get variable

if(isset($_GET['name']))
{
    echo 'GET:Your name is '.$_GET['name'];
}

?>