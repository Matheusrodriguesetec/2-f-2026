<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula 02 - PHP + HTML</title>
</head>
<body>
    <h1>Aula 02 - PHP + HTML</h1>

    <?php
        $nome = "anderson";
        echo "<p style='color: red; width: 55px;'>bem vindo $nome</p>";
        // laço de repetição // - contar de 1 a 5  //


        echo "<ul>";
            for ($i=1; $i <= 5; $i++) { 
                echo "<li> $i </li>";
            }
        echo "</ul>";

        // exemplo de variaveis //

        $a = 4;
        $b = 0;


        if ($b == 0) {
            echo "O valor do denominador é invalido";
        } else {
            $s = $a / $b;
        echo "$s <br>";
        echo "Continua o programa";
        }
        
    ?>

    </ul>
</body>
</html>