<?php

namespace App\Controllers;

class BaseController
{
    public function renderHTML($view, $data = [])
    {
        if (is_array($data)) {
            extract($data);
        }

        include $view;
    }
}
