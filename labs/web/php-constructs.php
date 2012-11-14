if (условие выполнения кода до выражения elseif) {
  код;
} elseif (условие выполнения кода до выражения else) {
  код;
} else {
  код - выполняется, если не текущий результат вычислений не соответствует предыдущим условиям;
}

switch($переменная или выражение, значение которого сравнивается со значениями в строках case) {
case 'значение 1':
  код;
  break;
case $значение_2:
  код
  break;
case 'значение 3':
  код
  break;
default:
  код
}

if ($foo): print 'foo'; endif;

$variable = condition ? if true : if false
Пример: $message = ($cake == 'fresh') ? 'This cake is tasty' : 'This cake tastes awful'; print $message;

In case you're not sure how that works, there are 3 parts to the ternary assignment:

