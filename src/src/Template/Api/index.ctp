<?php
$xml = Xml::fromArray(['response' => $recipes]);
echo $xml->asXML();
  ?>