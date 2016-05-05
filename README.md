# StickyHeader Plugin v1.0
Este plugin está hecho para funcionar con [Jquery v1.11 o superior](https://jquery.com/) 

## Funcionalidad
El objetivo de este plugin es **anclar** un elemento que represente el **encabezado** en un sitio web cuando el usuario hace **scroll**.

## Uso
Incluir la librería en el archivo html deseado
```
<script src="jquery.stickyheader.min.js"></script>
```
Llamar la librería en base al elemento al que se desee aplicar el anclaje
```
<script>
    jQuery(document).ready(function(){
        jQuery("header").stickyHeader();
    });
</script>
```

## Personalización
Se puede personalizar el elemento anclado asignando una clase de CSS, por ejemplo:
```
<script>
    jQuery(document).ready(function(){
        jQuery("header").stickyHeader({class: 'nombre_clase'});
    });
</script>
```
También se puede restringir el tamaño máximo al que no se deberá aplicar el anclaje, ideal para versiones responsivas donde no se quiere anclar el elemento, por ejemplo, en medidas menores a 480px no se aplicará el anclaje:
```
<script>
    jQuery(document).ready(function(){
        jQuery("header").stickyHeader({maxwidth: 480});
    });
</script>
```
Se pueden combinar ambas configuraciones si es necesario:
```
<script>
    jQuery(document).ready(function(){
        jQuery("header").stickyHeader({class: 'nombre_clase', maxwidth: 480});
    });
</script>
```
