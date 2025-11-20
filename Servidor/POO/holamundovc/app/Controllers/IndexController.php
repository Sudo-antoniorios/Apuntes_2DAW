<?php

namespace App\Controllers;

class IndexController extends BaseController {
    
    public function IndexAction() {
        $data = ['message' => 'Hola Mundo'];
        $this->renderHTML('../view/index_view.php', $data);
    }
}



    