<?php

namespace App\Controllers;

class IndexController extends BaseController
{

    public function NumAction($request)
    {
        $pares = [];
        for ($i = 0; $i < 20; $i++) { // 0 a 19
            if ($i % 2 === 0) {
                $pares[] = $i;
                if (count($pares) === 10) { // solo 10 números
                    break;
                }
            }
        }

        $this->renderHTML('../view/index_view.php', ['pares' => $pares]);
    }
    public function ImpAction($request)
    {
        $impares = [];
        for ($i = 0; $i < 20; $i++) { // 0 a 19
            if ($i % 2 !== 0) {
                $impares[] = $i;
                if (count($impares) === 10) { // solo 10 números
                    break;
                }
            }
        }

        $this->renderHTML('../view/index_view.php', ['impares' => $impares]);
    }
    public function NumParesAction($request)
    {
        $partes = explode("/", $request);
        $num = end($partes);
        $numPares = [];

        for ($i = 0; $i < $num; $i++) {
            $numPares[] = $i * 2;
        }

        $this->renderHTML('../view/index_view.php', ['numPares' => $numPares]);
    }

    public function NumImparesAction($request)
    {
        $partes = explode("/", $request);
        $num = end($partes);
        $numImpares = [];

        for ($i = 0; $i < $num; $i++) {
            $numImpares[] = $i * 2 + 1;
        }

        $this->renderHTML('../view/index_view.php', ['numImpares' => $numImpares]);
    }
}
